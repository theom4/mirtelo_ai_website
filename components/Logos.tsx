import React from 'react';

const Logos: React.FC = () => {
  // Using text placeholders styled as logos since we don't have the SVGs.
  // In a real app, these would be SVGs.
  const logos = [
    { name: "Acme.", font: "font-serif" },
    { name: "Lumina", font: "font-serif italic" },
    { name: "KYTE", font: "font-sans font-black border-2 border-current px-1" },
    { name: "framer", font: "font-sans font-bold" },
    { name: "Oyster", font: "font-serif" }
  ];

  return (
    <section id="customers" className="py-12 border-b border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-8">
          Vertraut von Teams, die Schnelligkeit schätzen
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
             <div key={index} className={`text-2xl md:text-3xl text-gray-800 ${logo.font}`}>
               {logo.name}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;