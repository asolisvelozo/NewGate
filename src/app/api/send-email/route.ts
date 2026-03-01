import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Instancia de Resend usando la API Key de tu archivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// El email a donde querés que lleguen las consultas de las guitarras
const toEmail = 'lausolisvelozo@gmail.com'; // <-- ACORDATE DE CAMBIAR ESTO

export async function POST(req: Request) {
  try {
    // 1. En el App Router, el body se lee con await req.json()
    const { name, email, phone, message } = await req.json();

    // 2. Validación simple
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, Email y Mensaje son requeridos.' }, 
        { status: 400 }
      );
    }

    // 3. Enviamos el email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Contacto Web NewGate <onboarding@resend.dev>', 
      to: [toEmail],
      subject: `Nueva consulta de ${name}`,
      replyTo: email, 
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

    // 4. Manejo de errores de Resend
    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json(
        { error: 'Hubo un error al enviar el email.' }, 
        { status: 500 }
      );
    }

    // 5. Todo salió bien
    console.log('Mail enviado:', data);
    return NextResponse.json(
      { message: '¡Mensaje enviado exitosamente!' }, 
      { status: 200 }
    );

  } catch (error) {
    // Error general del servidor
    console.error('Error en el servidor:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor.' }, 
      { status: 500 }
    );
  }
}