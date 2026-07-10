import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = ['Home', 'Services', 'About', 'Portfolio', 'Testimonials', 'Contact'];

  return (
    <nav className={`fixed-top w-100 ${scrolled ? 'glass-nav' : 'bg-transparent'} py-3 transition-all`} style={{ zIndex: 50 }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="text-decoration-none"
        >
          <div className="position-relative d-inline-block" style={{ group: true }}>
            <img
              src="/logo.jpeg"
              alt="PixelVerse Logo"
              className="rounded-circle border border-secondary shadow-sm object-fit-cover"
              style={{ width: scrolled ? '40px' : '48px', height: scrolled ? '40px' : '48px', transition: 'all 0.3s' }}
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="d-none d-md-flex align-items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.toLowerCase()); }}
              className="nav-link-custom text-decoration-none"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle (Visible only on small screens) */}
        <div className="d-flex d-md-none align-items-center gap-3">
          <button 
            className="btn btn-link p-0 text-decoration-none" 
            style={{ color: 'inherit' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="d-md-none border-top mt-3" style={{ background: '#030712', borderTopColor: 'rgba(255,255,255,0.05) !important' }}>
          <div className="container py-3 d-flex flex-column gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.toLowerCase()); }}
                className="nav-link-custom text-decoration-none fs-5"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
