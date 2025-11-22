import { useState } from 'react';
import { Book, Menu, X, Moon, Sun, Heart, Users, BookOpen, Mail, Phone, MapPin, ChevronRight, Star } from 'lucide-react';

export default function QuranWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const surahs = [
    { name: 'Al-Fatiha', verses: 7, meaning: 'The Opening' },
    { name: 'Al-Baqarah', verses: 286, meaning: 'The Cow' },
    { name: 'Al-Imran', verses: 200, meaning: 'Family of Imran' },
    { name: 'An-Nisa', verses: 176, meaning: 'The Women' },
    { name: 'Al-Maida', verses: 120, meaning: 'The Table Spread' },
    { name: 'Al-Anam', verses: 165, meaning: 'The Cattle' },
  ];

  const services = [
    { icon: BookOpen, title: 'Quran Classes', desc: 'Learn to read and understand the Holy Quran with certified teachers' },
    { icon: Users, title: 'Community', desc: 'Join our growing community of believers and learners' },
    { icon: Heart, title: 'Charity', desc: 'Support those in need through our charitable programs' },
  ];

  const bg = darkMode ? 'bg-slate-900' : 'bg-amber-50';
  const text = darkMode ? 'text-white' : 'text-slate-800';
  const textMuted = darkMode ? 'text-slate-300' : 'text-slate-600';
  const card = darkMode ? 'bg-slate-800' : 'bg-white';
  const accent = 'text-emerald-500';
  const accentBg = 'bg-emerald-500';

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-slate-900/95' : 'bg-amber-50/95'} backdrop-blur-sm border-b ${darkMode ? 'border-slate-700' : 'border-amber-200'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${accentBg}`}>
              <Book className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Noor Al-Quran</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Surahs', 'Services', 'About', 'Contact'].map(item => (
              <a key={item} href="#" className={`${textMuted} hover:${accent} transition-colors`}>{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-amber-200'}`}>
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${card} border-t ${darkMode ? 'border-slate-700' : 'border-amber-200'}`}>
            {['Home', 'Surahs', 'Services', 'About', 'Contact'].map(item => (
              <a key={item} href="#" className={`block px-4 py-3 ${textMuted} hover:${accent}`}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center py-16">
          <div className="mb-6">
            <span className={`inline-block px-4 py-1 rounded-full text-sm ${darkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
              ✨ Welcome to Our Community
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Beauty of
            <span className={`block ${accent}`}>The Holy Quran</span>
          </h1>
          <p className={`text-lg md:text-xl ${textMuted} max-w-2xl mx-auto mb-8`}>
            Join thousands of Muslims worldwide in learning, understanding, and living by the divine guidance of Allah's words.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`${accentBg} text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2`}>
              Start Reading <ChevronRight className="w-5 h-5" />
            </button>
            <button className={`border-2 border-emerald-500 ${accent} px-8 py-3 rounded-full font-semibold hover:bg-emerald-500 hover:text-white transition-colors`}>
              Learn More
            </button>
          </div>
        </div>

        {/* Arabic Verse Display */}
        <div className={`max-w-3xl mx-auto ${card} rounded-2xl p-8 shadow-xl ${darkMode ? 'shadow-emerald-900/20' : 'shadow-amber-200'}`}>
          <p className="text-3xl md:text-4xl text-center leading-loose font-arabic mb-4" style={{ fontFamily: 'serif', direction: 'rtl' }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className={`text-center ${textMuted}`}>
            "In the name of Allah, the Most Gracious, the Most Merciful"
          </p>
          <p className={`text-center text-sm ${accent} mt-2`}>— Al-Fatiha 1:1</p>
        </div>
      </section>

      {/* Surahs Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-slate-800/50' : 'bg-amber-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Surahs</h2>
            <p className={textMuted}>Begin your journey through the chapters of the Holy Quran</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surahs.map((surah, i) => (
              <div key={i} className={`${card} rounded-xl p-5 hover:scale-105 transition-transform cursor-pointer shadow-lg group`}>
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-full ${accentBg} flex items-center justify-center text-white font-bold`}>
                    {i + 1}
                  </div>
                  <Star className={`w-5 h-5 ${textMuted} group-hover:text-yellow-500 transition-colors`} />
                </div>
                <h3 className="text-xl font-bold mt-4">{surah.name}</h3>
                <p className={`${textMuted} text-sm`}>{surah.meaning}</p>
                <p className={`${accent} text-sm mt-2`}>{surah.verses} verses</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className={`${accent} font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition-all`}>
              View All 114 Surahs <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className={textMuted}>Ways we serve our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className={`${card} rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow`}>
                <div className={`w-16 h-16 ${darkMode ? 'bg-emerald-900/50' : 'bg-emerald-100'} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className={`w-8 h-8 ${accent}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={textMuted}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 px-4 ${accentBg}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: '114', label: 'Surahs' },
              { num: '6,236', label: 'Verses' },
              { num: '10K+', label: 'Students' },
              { num: '50+', label: 'Teachers' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold">{stat.num}</p>
                <p className="text-emerald-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-slate-800/50' : 'bg-amber-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className={`${textMuted} mb-8`}>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'contact@nooralquran.org' },
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  { icon: MapPin, text: '123 Islamic Center, City, Country' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${darkMode ? 'bg-slate-700' : 'bg-amber-200'} rounded-full flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 ${accent}`} />
                    </div>
                    <span className={textMuted}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${card} rounded-2xl p-8 shadow-xl`}>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-amber-50 border-amber-200'} border focus:border-emerald-500 outline-none transition-colors`} />
                <input type="email" placeholder="Your Email" className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-amber-50 border-amber-200'} border focus:border-emerald-500 outline-none transition-colors`} />
                <textarea placeholder="Your Message" rows={4} className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-amber-50 border-amber-200'} border focus:border-emerald-500 outline-none transition-colors resize-none`}></textarea>
                <button className={`w-full ${accentBg} text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors`}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-slate-700' : 'border-amber-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`p-2 rounded-full ${accentBg}`}>
              <Book className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">Noor Al-Quran</span>
          </div>
          <p className={`${textMuted} text-sm`}>© 2025 Noor Al-Quran. Spreading the light of knowledge.</p>
        </div>
      </footer>
    </div>
  );
}