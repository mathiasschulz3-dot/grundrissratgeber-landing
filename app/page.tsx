'use client'

import { Home, Sofa, ChefHat, Trees, Sun, Building2, Sparkles, ArrowRight, Check } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Coming Soon Badge */}
      <div className="fixed top-6 right-6 z-50 animate-pulse-glow">
        <div className="bg-gradient-primary text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Coming Soon
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">GrundrissRatgeber<span className="text-gradient">.de</span></h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 animate-slide-up">
              <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Revolutioniere deine Hausplanung
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6 animate-fade-in leading-tight" style={{animationDelay: '0.1s'}}>
              Dein Traumhaus.<br/>
              <span className="text-gradient">Digital geplant.</span><br/>
              Real gebaut.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
              Der ultimative 2D/3D Hausplaner mit Küchen-/Möbel-Katalog<br/>
              und direkter Bauträger-Vermittlung. Alles an einem Ort.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center items-center mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Jetzt vormerken
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-200">
                Mehr erfahren
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="glass-effect rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-gradient mb-2">2D/3D</div>
                <div className="text-slate-600">Interaktiver Planer</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-gradient mb-2">1000+</div>
                <div className="text-slate-600">Möbel & Produkte</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-slate-600">Partner-Bauträger</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
              Alles für dein <span className="text-gradient">Traumhaus</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Von der ersten Skizze bis zum fertigen Haus - wir begleiten dich bei jedem Schritt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Grundriss Planer */}
            <div className="card-hover bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Grundriss Planer</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Erstelle deinen perfekten Grundriss in 2D und visualisiere ihn sofort in 3D. 
                Intuitive Drag & Drop Bedienung.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                Bald verfügbar <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Küchen Planer */}
            <div className="card-hover bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 shadow-xl text-white group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Premium Partner
                </div>
                <h3 className="text-2xl font-bold mb-3">Küchen Planer</h3>
                <p className="mb-4 leading-relaxed opacity-90">
                  Plane deine Traumküche mit 4 verschiedenen Layouts. Direktvermittlung 
                  zu Premium-Küchenherstellern.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">€630 - €3.750 Provision pro Küche</span>
                  </div>
                </div>
                <div className="flex items-center font-semibold group-hover:gap-3 gap-2 transition-all">
                  Jetzt planen <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Möbel Katalog */}
            <div className="card-hover bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sofa className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Möbel Katalog</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Über 1000+ Möbelstücke von Top-Marken wie IKEA, Otto und Wayfair. 
                Direkt in deinen Grundriss integrierbar.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>IKEA • Otto • Wayfair</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>5-15% Kommission</span>
                </div>
              </div>
              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                Katalog durchsuchen <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Garten & Outdoor */}
            <div className="card-hover bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trees className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Garten & Outdoor</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Gestalte deinen Traumgarten mit Gartenmöbeln, Pflanzen und Outdoor-Küchen. 
                Komplette Planung und Vermittlung.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                Garten planen <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Wintergarten & Überdachungen */}
            <div className="card-hover bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Wintergarten & Überdachungen</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Erweitere dein Zuhause mit einem Wintergarten oder Terrassenüberdachung. 
                Inklusive Vermittlung zu Fachbetrieben.
              </p>
              <div className="flex items-center text-amber-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                Optionen entdecken <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bauträger Vermittlung */}
            <div className="card-hover bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-8 shadow-xl text-white group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="inline-block bg-gradient-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Premium Service
                </div>
                <h3 className="text-2xl font-bold mb-3">Bauträger Vermittlung</h3>
                <p className="mb-4 leading-relaxed opacity-90">
                  Finde den perfekten Bauträger für dein Projekt. Direkte Vermittlung 
                  zu geprüften Partnern in ganz Deutschland.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">50+ geprüfte Partner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">3-5% Provision (€12-20k pro Haus)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Musterhaus.net Partner</span>
                  </div>
                </div>
                <div className="flex items-center font-semibold group-hover:gap-3 gap-2 transition-all">
                  Bauträger finden <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Bereit für dein Traumhaus?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Melde dich jetzt für den frühen Zugang an und erhalte <strong>20% Rabatt</strong><br/>
              auf alle Premium-Features beim Launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Deine E-Mail-Adresse" 
                className="px-8 py-4 rounded-xl text-slate-900 text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Jetzt vormerken
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Keine Spam-Mails. Jederzeit abmeldbar. Deine Daten sind sicher.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">GrundrissRatgeber.de</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dein digitaler Partner für die perfekte Hausplanung.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produkt</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Features</li>
                <li className="hover:text-white transition-colors cursor-pointer">Preise</li>
                <li className="hover:text-white transition-colors cursor-pointer">Roadmap</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Über uns</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Karriere</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Impressum</li>
                <li className="hover:text-white transition-colors cursor-pointer">Datenschutz</li>
                <li className="hover:text-white transition-colors cursor-pointer">AGB</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 GrundrissRatgeber.de - Alle Rechte vorbehalten</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
