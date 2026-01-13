import React from 'react';
import { PlayCircle, Rocket, LifeBuoy } from 'lucide-react';
import { FeatureCard } from '../types';

const Features: React.FC = () => {
  const features: FeatureCard[] = [
    {
      number: "01",
      title: "Demo-Engine",
      description: "Mirtelo agiert als Ihr Vertriebsmitarbeiter. Er eliminiert Wartezeiten, qualifiziert sofort und liefert rund um die Uhr markengerechte Demos.",
      icon: <PlayCircle className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Aktivierung",
      description: "Nach der Konvertierung wird Mirtelo zum Onboarding-Partner. Er führt Benutzer durch Funktionen und verbessert die Trial-to-Paid-Raten.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Support & Erfolg",
      description: "Mirtelo erkennt Abwanderungsrisiken, beantwortet Supportanfragen mit Kontext und eskaliert komplexe Probleme sofort an Menschen.",
      icon: <LifeBuoy className="w-6 h-6" />
    }
  ];

  return (
    <section id="platform" className="bg-[#1a1a1a] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-[#222] p-8 rounded-3xl border border-white/5 hover:border-quinn-green/30 transition-all duration-300 overflow-hidden min-h-[320px] flex flex-col justify-end">
              
              {/* Background Number */}
              <div className="absolute top-4 right-6 font-serif text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none">
                {feature.number}
              </div>

              {/* Icon */}
              <div className="mb-auto">
                <div className="w-12 h-12 rounded-full bg-quinn-green text-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl mb-4 group-hover:text-quinn-green transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;