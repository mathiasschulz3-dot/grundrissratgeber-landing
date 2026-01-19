import { Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="relative z-10 pt-8 pb-4 bg-white/50 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">GrundrissRatgeber<span className="text-gradient">.de</span></h1>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          
          {/* Impressum Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-500">
              Impressum
            </h1>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Angaben gemäß § 5 TMG:</h2>
                <div className="bg-slate-50 rounded-xl p-6 space-y-2">
                  <p className="font-semibold text-lg">KI-ProjexX</p>
                  <p>Mathias Schulz</p>
                  <p>Haidbarg 30B</p>
                  <p>21244 Buchholz in der Nordheide</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Kontakt:</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p>
                    <span className="font-semibold">E-Mail:</span>{' '}
                    <a href="mailto:mathias@ki-projexx.de" className="text-blue-600 hover:text-blue-700 underline">
                      mathias@ki-projexx.de
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p>Mathias Schulz</p>
                  <p>Haidbarg 30B</p>
                  <p>21244 Buchholz in der Nordheide</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Haftungsausschluss:</h3>
                <p className="text-sm">
                  Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>
            </div>
          </section>

          {/* Datenschutz Section */}
          <section>
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-500">
              Datenschutzerklärung
            </h1>
            
            <div className="space-y-8 text-slate-700 leading-relaxed">
              
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Datenschutz auf einen Blick</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Allgemeine Hinweise</h3>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                      Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                      denen Sie persönlich identifiziert werden können.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Datenerfassung auf dieser Website</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                      können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Wie erfassen wir Ihre Daten?</h3>
                    <p className="mb-3">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                      z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p>
                      Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                      IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder 
                      Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Google Analytics</h2>
                <div className="space-y-3">
                  <p>
                    Diese Website verwendet Google Analytics, einen Webanalysedienst der Google Ireland Limited 
                    („Google"). Google Analytics verwendet Cookies.
                  </p>
                  <div className="bg-white rounded-lg p-4 space-y-2">
                    <p className="font-semibold">Wichtige Informationen:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>IP-Anonymisierung ist aktiviert</li>
                      <li>Die Erfassung erfolgt nur mit Ihrer Einwilligung</li>
                      <li>Sie können Ihre Einwilligung jederzeit widerrufen</li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 lit. a DSGVO 
                    (Einwilligung).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Hosting</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="mb-3">Diese Website wird gehostet bei:</p>
                  <p className="font-semibold mb-2">Vercel Inc.</p>
                  <p className="text-sm">
                    340 S Lemon Ave #4133<br/>
                    Walnut, CA 91789<br/>
                    USA
                  </p>
                  <p className="mt-4 text-sm">
                    Weitere Informationen zum Datenschutz bei Vercel finden Sie unter:{' '}
                    <a 
                      href="https://vercel.com/legal/privacy-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      https://vercel.com/legal/privacy-policy
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Ihre Rechte</h2>
                <div className="space-y-3">
                  <p>Sie haben folgende Rechte:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 bg-slate-50 rounded-xl p-6">
                    <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                    <li>Berichtigung unrichtiger Daten</li>
                    <li>Löschung Ihrer Daten</li>
                    <li>Einschränkung der Datenverarbeitung</li>
                    <li>Datenübertragbarkeit</li>
                    <li>Widerspruch gegen die Verarbeitung</li>
                    <li>Beschwerde bei einer Aufsichtsbehörde</li>
                  </ul>
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4 mt-4">
                    <p className="font-semibold mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung:</p>
                    <p className="text-sm">
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                      Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der 
                      bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-t-4 border-blue-500">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kontakt bei Datenschutzfragen</h3>
                <p>
                  Bei Fragen zum Datenschutz wenden Sie sich bitte an:{' '}
                  <a href="mailto:mathias@ki-projexx.de" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                    mathias@ki-projexx.de
                  </a>
                </p>
              </div>

              <p className="text-sm text-slate-500 text-center pt-8">
                Stand: Januar 2026
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            &copy; 2026 GrundrissRatgeber.de - Alle Rechte vorbehalten
          </p>
        </div>
      </footer>
    </div>
  )
}
