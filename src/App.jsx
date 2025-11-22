import { useState } from 'react';
import { 
  Book, Menu, X, Moon, Sun, Heart, Users, 
  BookOpen, Mail, Phone, MapPin, ChevronRight, Star 
} from 'lucide-react';
import '../QuranWebsite.css';

const QuranWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const surahs = [
    { name: 'Al-Fatiha', verses: 7, meaning: 'The Opening' },
    { name: 'Al-Baqarah', verses: 286, meaning: 'The Cow' },
    { name: 'Al-Imran', verses: 200, meaning: 'Family of Imran' },
    { name: 'An-Nisa', verses: 176, meaning: 'The Women' },
    { name: 'Al-Maida', verses: 120, meaning: 'The Table Spread' },
    { name: 'Al-Anam', verses: 165, meaning: 'The Cattle' },
  ];

  const services = [
    { 
      icon: BookOpen, 
      title: 'Quran Classes', 
      desc: 'Learn to read and understand the Holy Quran with certified teachers' 
    },
    { 
      icon: Users, 
      title: 'Community', 
      desc: 'Join our growing community of believers and learners' 
    },
    { 
      icon: Heart, 
      title: 'Charity', 
      desc: 'Support those in need through our charitable programs' 
    },
  ];

  const stats = [
    { num: '114', label: 'Surahs' },
    { num: '6,236', label: 'Verses' },
    { num: '10K+', label: 'Students' },
    { num: '50+', label: 'Teachers' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@nooralquran.org' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Islamic Center, City, Country' },
  ];

  const navLinks = ['Home', 'Surahs', 'Services', 'About', 'Contact'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: implement submit logic
  };

  return (
    <div className={`quran-website ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-icon">
              <Book size={20} />
            </div>
            <span className="brand-name">Noor Al-Quran</span>
          </div>
          
          <div className="nav-links">
            {navLinks.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="menu-toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {navLinks.map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Welcome to Our Community</span>
          </div>
          <h1 className="hero-title">
            Discover the Beauty of
            <span className="accent-text">The Holy Quran</span>
          </h1>
          <p className="hero-description">
            Join thousands of Muslims worldwide in learning, understanding, 
            and living by the divine guidance of Allah's words.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Start Reading <ChevronRight size={20} />
            </button>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>
        </div>

        {/* Arabic Verse Card */}
        <div className="verse-card">
          <p className="arabic-verse">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="verse-translation">
            "In the name of Allah, the Most Gracious, the Most Merciful"
          </p>
          <p className="verse-reference">— Al-Fatiha 1:1</p>
        </div>
      </section>

      {/* Surahs Section */}
      <section id="surahs" className="surahs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Surahs</h2>
            <p className="section-subtitle">
              Begin your journey through the chapters of the Holy Quran
            </p>
          </div>
          <div className="surahs-grid">
            {surahs.map((surah, index) => (
              <div key={index} className="surah-card">
                <div className="surah-header">
                  <div className="surah-number">{index + 1}</div>
                  <Star size={20} className="surah-star" />
                </div>
                <h3 className="surah-name">{surah.name}</h3>
                <p className="surah-meaning">{surah.meaning}</p>
                <p className="surah-verses">{surah.verses} verses</p>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <button className="link-button">
              View All 114 Surahs <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Ways we serve our community</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <p className="stat-number">{stat.num}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p className="contact-description">
                Have questions? We'd love to hear from you. Send us a message 
                and we'll respond as soon as possible.
              </p>
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <item.icon size={20} />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="form-input"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4} 
                  className="form-textarea"
                />
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-icon small">
                <Book size={16} />
              </div>
              <span className="brand-name">Noor Al-Quran</span>
            </div>
            <p className="footer-text">
              © 2025 Noor Al-Quran. Spreading the light of knowledge.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuranWebsite;