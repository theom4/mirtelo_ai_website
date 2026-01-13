import React from 'react';

const Lifecycle: React.FC = () => {
  return (
    <section id="lifecycle" className="bg-quinn-black py-32 text-center text-white relative overflow-hidden">
      {/* Narrative Header */}
      <div className="container mx-auto px-6 relative z-10">
        <h4 className="text-quinn-green text-xs font-bold tracking-[0.2em] uppercase mb-8">
          Die Wachstumsgeschichte
        </h4>
        
        <h2 className="font-serif text-5xl md:text-7xl mb-8">
          Vom ersten Klick <br />
          bis zur <span className="italic text-quinn-green">Ewigkeit.</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Mirtelo ist nicht nur ein Chatbot. Es ist eine Maschine, die mit Ihrem Kunden über den gesamten Lebenszyklus hinweg wächst.
        </p>

        {/* Decorative Line */}
        <div className="w-px h-24 bg-gradient-to-b from-quinn-green to-transparent mx-auto mt-16"></div>
        
        <div className="mt-8 font-serif text-4xl text-white">
          Gebaut für Teams, die es sich <br/>
          nicht leisten können zu <span className="underline decoration-quinn-green decoration-wavy decoration-2 underline-offset-8">warten.</span>
        </div>
      </div>
    </section>
  );
};

export default Lifecycle;