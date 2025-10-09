// components/ContactForm.tsx
"use client"

import React, { useState } from 'react';

// Definimos los tipos para el estado del formulario y el resultado
type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormResult = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formResult, setFormResult] = useState<FormResult>({
    status: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormResult({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Algo salió mal.');
      }
      
      setFormResult({ status: 'success', message: '¡Mensaje enviado con éxito!' });
      // Opcional: limpiar el formulario después de un envío exitoso
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error: any) {
      setFormResult({ status: 'error', message: error.message || 'No se pudo enviar el mensaje.' });
    }
  };


  return (
    // ... (el <section> y el <div> del fondo siguen igual) ...
    // ...
    // Aquí empieza la sección del formulario
    <div className="md:w-2/3 space-y-6">
        {/* Aquí va el <form> con los cambios */}
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo NOMBRE */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">NOMBRE</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                    placeholder="Tu nombre"
                />
            </div>

            {/* Repite para EMAIL, TELÉFONO y MENSAJE, añadiendo value y onChange */}
            {/* Campo EMAIL */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">EMAIL</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                    placeholder="tu@email.com"
                />
            </div>

            {/* Campo TELÉFONO */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">TELÉFONO</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                    placeholder="Tu teléfono (opcional)"
                />
            </div>
            
            {/* Campo MENSAJE */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">MENSAJE</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                    placeholder="Escribe tu mensaje aquí..."
                ></textarea>
            </div>
            
            {/* Botón de envío con estado de carga */}
            <button
                type="submit"
                disabled={formResult.status === 'loading'}
                className="w-full py-3 px-6 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {formResult.status === 'loading' ? 'Enviando...' : 'Enviar'}
            </button>

            {/* Mensajes de éxito o error */}
            {formResult.status === 'success' && (
                <p className="text-green-400 text-center">{formResult.message}</p>
            )}
            {formResult.status === 'error' && (
                <p className="text-red-400 text-center">{formResult.message}</p>
            )}
        </form>
    </div>
    // ...
  );
};

export default ContactForm;