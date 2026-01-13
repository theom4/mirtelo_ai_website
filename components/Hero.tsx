import React from 'react';
import { Power, Zap, Battery, Signal, Wifi } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#fafafa]">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm">
              <div className="w-2 h-2 rounded-full bg-quinn-green animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Immer Aktiv</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-quinn-black">
              Der Agent, der <br />
              <span className="relative inline-block">
                <span className="relative z-10 italic">niemals</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-quinn-green/60 -z-0"></span>
              </span> aufhört <br />
              zu verkaufen.
            </h1>

            <p className="text-lg text-gray-600 font-light max-w-md leading-relaxed">
              Qualifizieren, präsentieren und schließen Sie Leads sofort ab – 24/7. Keine Kalender, kein Warten, keine Compliance-Probleme. Einfach nur Umsatz.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-quinn-black text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-black/20 group">
                Mirtelo in Aktion
                <Power className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </button>
              <button className="bg-white text-quinn-black border border-gray-200 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Demo ansehen
              </button>
            </div>
          </div>

          {/* iPhone Mockup */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
             
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
                {/* iPhone Buttons */}
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[15px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[15px] top-[142px] rounded-r-lg"></div>

                {/* Screen */}
                <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">
                    
                    {/* Status Bar */}
                    <div className="h-12 bg-white flex items-center justify-between px-6 pt-2 select-none z-10">
                        <span className="text-xs font-semibold">9:41</span>
                        <div className="flex items-center gap-1.5">
                            <Signal className="w-3.5 h-3.5" fill="black" />
                            <Wifi className="w-3.5 h-3.5" />
                            <Battery className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-[28px] w-[90px] bg-black rounded-full z-20"></div>

                    {/* App Header inside Phone */}
                    <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center relative">
                                <Power className="text-quinn-green w-4 h-4" />
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-quinn-green border-2 border-white rounded-full"></div>
                             </div>
                             <div className="flex flex-col">
                                 <span className="font-serif font-bold text-lg leading-none">Mirtelo</span>
                                 <span className="text-[10px] text-gray-500">Sofortige Aktivierung</span>
                             </div>
                        </div>
                        <span className="bg-quinn-green/20 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded-full">LIVE</span>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 bg-gray-50 p-4 space-y-4 overflow-y-auto hide-scrollbar">
                         {/* Bot Message 1 */}
                        <div className="flex flex-col gap-1 items-start max-w-[90%]">
                            <div className="bg-white rounded-2xl rounded-tl-sm p-3 text-sm text-gray-800 shadow-sm border border-gray-100">
                                Ich habe gesehen, dass Sie unsere API-Dokumentation durchstöbern. Möchten Sie jetzt eine technische Deep-Dive-Demo?
                            </div>
                            <span className="text-[10px] text-gray-400 pl-1">09:42</span>
                        </div>

                        {/* User Message */}
                        <div className="flex flex-col gap-1 items-end ml-auto max-w-[90%]">
                           <div className="bg-quinn-black text-white rounded-2xl rounded-tr-sm p-3 text-sm font-medium shadow-md">
                                Eigentlich ja, aber hier ist es 2 Uhr morgens. Ist ein Mensch verfügbar?
                           </div>
                           <span className="text-[10px] text-gray-400 pr-1">09:42</span>
                        </div>

                        {/* Bot Message 2 */}
                        <div className="flex flex-col gap-1 items-start max-w-[95%]">
                            <div className="bg-white rounded-2xl rounded-tl-sm p-3 text-sm text-gray-800 shadow-sm border border-gray-100">
                              <p className="mb-3">Ich kann Sie sofort durch die Sandbox-Umgebung führen. Falls wir auf ein Hindernis stoßen, eskaliere ich es für morgen früh an das Technik-Team. Bereit?</p>
                              <div className="flex gap-2 mt-2">
                                <button className="bg-quinn-green text-black px-3 py-1.5 rounded-lg text-xs font-bold hover:brightness-95 transition">Demo starten</button>
                                <button className="bg-gray-100 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-200">Später planen</button>
                              </div>
                            </div>
                            <span className="text-[10px] text-gray-400 pl-1">09:43</span>
                        </div>
                    </div>

                    {/* Bottom Input Area */}
                    <div className="bg-white p-4 border-t border-gray-100">
                        <div className="bg-gray-100 rounded-full h-10 px-4 flex items-center text-gray-400 text-sm">
                            Antworten...
                        </div>
                        <div className="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-4"></div>
                    </div>
                </div>
            </div>

            {/* Background Blob behind iPhone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] h-[660px] bg-gradient-to-tr from-green-100/50 to-transparent rounded-[3rem] rotate-2 -z-10 blur-xl"></div>
            
             {/* Floating Success Badge */}
             <div className="absolute right-10 bottom-40 bg-white/95 backdrop-blur rounded-xl shadow-xl border border-gray-100 p-3 flex items-center gap-3 animate-bounce z-30">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black" fill="black" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Status</div>
                  <div className="text-xs font-bold text-quinn-black">Lead Qualifiziert</div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;