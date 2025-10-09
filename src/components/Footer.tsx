import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black/70 py-6 mt-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} NewGate. Todos los derechos reservados.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://www.facebook.com/Newgateguitars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/newgate.guitars/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:contacto@newgate.com"
            className="hover:text-green-400 transition-colors"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
}
