//import { ChevronDown } from 'lucide-react';
import { Great_Vibes  } from "next/font/google";
import Logo from "@/components/Logo";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"], 
});


export  function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <Logo/>
            </a>
            
          </div>
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a href="/shop" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium tracking-wide">
              SHOP
               
            </a>

            <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium tracking-wide">
              MODELS
            </a>
            
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
              CONTACT
            </a>
            
            <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium tracking-wide">
               ABOUT US
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}