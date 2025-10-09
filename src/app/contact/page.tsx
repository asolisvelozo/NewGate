// pages/contact.tsx
// Update the import path to match the actual location and filename of ContactForm
import ContactForm from "@/components/contacto";

import type { NextPage } from 'next'; // Opcional, pero buena práctica

const ContactPage: NextPage = () => {
  return (
    <>
        
      <ContactForm />
    </>
  );
};

export default ContactPage;