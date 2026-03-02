"use client"; 

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react"; 
import Logo from "@/components/Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: "GUITARRAS",
      href: "/guitars",
  
    },
    {
      name: "BAJOS",
      href: "/basses",

    },
    {
      name: "SERIES",
      href: "/series",
      submenu: [
        { name: "The Half Light Series", href: "/series/half-light" },
      ],
    },
    { name: "TIENDA", href: "/shop" },
    { name: "NOSOTROS", href: "/about" }, 
    { name: "CONTACTO", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group h-full flex items-center">
                {item.submenu ? (
                  <>
                    <button className="text-gray-300 group-hover:text-white transition-colors flex items-center gap-1 text-sm font-medium tracking-wide outline-none">
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>

                    <div className="absolute left-0 top-14 w-56 bg-gray-900 border border-gray-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 rounded-md overflow-hidden">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="space-y-1">
                    <div className="block px-3 py-2 text-base font-medium text-white">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-1 border-l-2 border-gray-700 ml-3">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}