import React from 'react';
import { Power, Twitter, Linkedin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
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
              <li>
                <a href="tel:+4930439792348" className="hover:text-white transition flex items-center gap-2 group">
                  <Phone className="w-4 h-4 text-quinn-green group-hover:text-white transition-colors" />
                  <span>+49 30 4397 92348</span>
                </a>
              </li>
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

        {/* GDPR / AI Telephony Notice */}
        <div className="mb-12 p-6 bg-gray-900/30 rounded-xl border border-gray-800/50 backdrop-blur-sm">
            <h4 className="text-gray-200 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-quinn-green animate-pulse"></div>
                Einsatz eines KI-gestützten Sprachassistenten zur Entgegennahme eingehender Anrufe
            </h4>
            <div className="text-[10px] text-gray-500 leading-relaxed space-y-3 max-w-5xl">
                <p>
                  Zur automatisierten Bearbeitung telefonischer Anfragen setzen wir den IONOS KI-Telefonassistenten ein. Dieser verarbeitet Gesprächsinhalte in unserem Auftrag, um Ihr Anliegen zu erfassen, weiterzuleiten oder zu beantworten. Dabei kommen automatische Spracherkennung (Speech-to-Text), semantische Analyse (Natural Language Processing) und ggf. Textgenerierung (Text-to-Speech) zum Einsatz.
                </p>
                <p>
                  Gesprächsinhalte können aufgezeichnet, transkribiert oder dokumentiert werden. Dies erfolgt nur, wenn Sie zu Beginn des Gesprächs entsprechend informiert wurden und das Gespräch fortsetzen. Sie können die Verbindung jederzeit beenden, um eine Verarbeitung zu vermeiden.
                </p>
                <p>
                  Verarbeitet werden insbesondere Ihre Äußerungen im Gespräch, technische Verbindungsdaten (Datum, Uhrzeit, Dauer) sowie ggf. freiwillig mitgeteilte Stammdaten wie Name oder Telefonnummer. Zudem werden Interaktionsdaten verarbeitet, etwa zur Gesprächsführung oder bei Abbrüchen.
                  Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO (zur Vertragsanbahnung oder -durchführung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter und skalierbarer Kommunikation).
                </p>
                <p>
                  Zur technischen Umsetzung setzen wir Subdienstleister ein, insbesondere für Hosting, Spracherkennung und semantische Analyse. Dabei können personenbezogene Daten durch den Subdienstleister auch in die USA übermittelt werden. Grundsätzlich erfolgt dies auf Grundlage eines Angemessenheitsbeschlusses nach Art. 45 DSGVO, da die Dienstleister nach dem EU-U.S. Data Privacy Framework zertifiziert sind. Fehlt ein solcher Beschluss, erfolgt die Übermittlung auf Basis von Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO und ergänzender Schutzmaßnahmen. Die Vorgaben der Art. 44 DSGVO werden eingehalten.
                </p>
                <p>
                  Zur Verbesserung der Sprachverarbeitung können pseudonymisierte Daten zu Trainingszwecken verwendet werden. Eine Rückverfolgung auf einzelne Personen ist dabei ausgeschlossen oder erheblich erschwert. Eine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO findet nicht statt.
                </p>
                <p>
                  Die Speicherung erfolgt nur so lange, wie es für die genannten Zwecke erforderlich ist. Anschließend werden die Daten automatisch gelöscht oder anonymisiert.
                </p>
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
            <a href="#" className="hover:text-gray-400">Impressum</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;