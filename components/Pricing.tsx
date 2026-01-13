import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$99",
      period: "/mo",
      description: "Für Coaches und frühe Startups.",
      features: ["1.000 Gespräche/Monat", "Basis-Demo-Training", "E-Mail-Support"],
      cta: "Loslegen",
      popular: false
    },
    {
      name: "Wachstum",
      price: "$249",
      period: "/mo",
      description: "Für skalierende SaaS-Teams.",
      features: ["Unbegrenzte Gespräche", "Erweiterte Analytik", "Lebenszyklus & Onboarding", "Slack Connect Kanal"],
      cta: "Kostenlos testen",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Individuell",
      period: "",
      description: "Für globale Organisationen.",
      features: ["Dedizierter Success Manager", "Benutzerdefinierte SLAs", "Mehrsprachiger Support", "Vollständige On-Premise-Bereitstellung"],
      cta: "Vertrieb kontaktieren",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-quinn-black">
            Einfache, transparente <br />
            <span className="italic text-quinn-green">Preise.</span>
          </h2>
          <p className="text-gray-500 font-light">Starten Sie mit einer Testphase, upgraden Sie bei Wachstum. Keine versteckten Kosten.</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-black' : 'text-gray-400'}`}>Monatlich</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-gray-200 rounded-full p-1 relative transition-colors duration-300"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-black' : 'text-gray-400'}`}>
              Jährlich <span className="text-green-500 text-xs">-20%</span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-[2rem] p-8 md:p-10 relative transition-transform duration-300 hover:-translate-y-2 ${
                tier.popular 
                  ? 'bg-[#111] text-white shadow-2xl scale-105 z-10 border-0' 
                  : 'bg-white text-black border border-gray-200 shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-quinn-green text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Beliebt
                </div>
              )}

              <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={`text-sm ${tier.popular ? 'text-gray-400' : 'text-gray-500'}`}>{tier.period}</span>
              </div>
              <p className={`text-sm mb-8 ${tier.popular ? 'text-gray-400' : 'text-gray-500'}`}>{tier.description}</p>

              <button 
                className={`w-full py-3.5 rounded-xl font-bold mb-8 transition-colors ${
                  tier.popular 
                    ? 'bg-quinn-green text-black hover:bg-white' 
                    : 'bg-transparent border border-gray-900 text-black hover:bg-black hover:text-white'
                }`}
              >
                {tier.cta}
              </button>

              <div className="space-y-4">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 ${tier.popular ? 'text-quinn-green' : 'text-green-500'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;