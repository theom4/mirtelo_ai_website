import React, { useState, useEffect } from 'react';
import { Power, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Plattform', href: '#platform' },
    { label: 'Lebenszyklus', href: '#lifecycle' },
    { label: 'Kunden', href: '#customers' },
    { label: 'Preise', href: '#pricing' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Power className="w-6 h-6 stroke-[2.5px]" />
          <span className="font-serif text-3xl tracking-tight text-quinn-black">Mirtelo</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-gray-600 hover:text-black font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="font-medium text-sm hover:underline">Einloggen</a>
          <button className="bg-quinn-black text-white px-6 py-2.5 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-200">
            Mirtelo aktivieren
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden border-t">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-lg font-medium">{link.label}</a>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <a href="#" className="font-medium">Einloggen</a>
          <button className="bg-quinn-black text-white px-6 py-3 rounded-full font-medium w-full">
            Mirtelo aktivieren
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;