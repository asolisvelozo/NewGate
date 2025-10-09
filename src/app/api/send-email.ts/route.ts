// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Instancia de Resend usando la API Key de las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

// El email del dueño de la web, a donde llegarán los mensajes
const toEmail = 'tu-email@tudominio.com'; // <-- CAMBIA ESTO

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Solo aceptamos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validación simple de datos
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nombre, Email y Mensaje son requeridos.' });
    }

    // Enviamos el email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>', // Email 'desde' (configurado en Resend)
      to: [toEmail],
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email, // Para que al darle "responder" le respondas al usuario
      html: `
        <h1>Nuevo mensaje del formulario de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Hubo un error al enviar el email.' });
    }

    console.log({ data });
    return res.status(200).json({ message: 'Mensaje enviado exitosamente!' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}