import React from 'react';
import { Power, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-quinn-green font-bold text-xs uppercase tracking-widest mb-6">Produkt</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Demo-Engine</a></li>
              <li><a href="#" className="hover:text-white transition">Onboarding</a></li>
              <li><a href="#" className="hover:text-white transition">Erfolgs-Agenten</a></li>
              <li><a href="#" className="hover:text-white transition">Preise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-quinn-green font-bold text-xs uppercase tracking-widest mb-6">Ressourcen</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Hilfe-Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-quinn-green font-bold text-xs uppercase tracking-widest mb-6">Unternehmen</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-quinn-green font-bold text-xs uppercase tracking-widest mb-6">Sozial</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Power className="w-12 h-12 stroke-white" strokeWidth={1.5} />
            <span className="font-serif text-7xl tracking-tight text-white">Mirtelo</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-quinn-green animate-pulse"></div>
            <span className="text-xs text-gray-400 font-medium">System Betriebsbereit • 24/7</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2024 Mirtelo AI Inc. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Datenschutzerklärung</a>
            <a href="#" className="hover:text-gray-400">Nutzungsbedingungen</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;