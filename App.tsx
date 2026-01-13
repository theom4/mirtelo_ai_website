import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import Lifecycle from './components/Lifecycle';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-quinn-black bg-quinn-light selection:bg-quinn-green selection:text-black">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Lifecycle />
        <Pricing />
      </main>
      <Footer />
      
      {/* Made in Aura Badge - Mimicking the bottom right badge in screenshot */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#1a1a1a] text-white text-[10px] font-bold px-3 py-1.5 rounded-md flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer">
           <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
           Made in Aura
        </div>
      </div>

      {/* Use React.createElement to avoid TypeScript errors with custom elements */}
      {React.createElement('elevenlabs-convai', { 'agent-id': 'agent_0301kev4k7e6fyvsry7hz6ce85ny' })}
    </div>
  );
};

export default App;