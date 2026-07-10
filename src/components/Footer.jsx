const quickLinks = ['Home', 'About Us', 'Portfolio', 'Blog', 'Careers'];
const serviceLinks = ['ATS Friendly CV', 'Birthday Surprise Website', 'Wedding Invitation Website', 'Portfolio Website', 'Project Report'];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container" data-aos="fade-up">
        <div className="row gy-5 mb-5 mt-3">
          {/* Column 1 - Brand */}
          <div className="col-lg-4 pe-lg-5">
            <div className="position-relative d-inline-block mb-4">
              <img
                src="/logo.jpeg"
                alt="PixelVerse Logo"
                className="rounded-circle border border-secondary shadow-sm object-fit-cover"
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
              A creative digital agency crafting stunning digital experiences that captivate audiences and drive business growth.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <a href="https://instagram.com/pixel.verse__" target="_blank" rel="noreferrer" className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift text-white border-0" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://instagram.com/pixel.verse__" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none small ms-2 nav-link-custom">
                @pixel.verse__
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-4 col-lg-2">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary text-decoration-none nav-link-custom">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="col-md-4 col-lg-3">
            <h5 className="fw-bold mb-4">Services</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary text-decoration-none nav-link-custom">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="col-md-4 col-lg-3">
            <h5 className="fw-bold mb-4">Contact Us</h5>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" className="text-primary-custom flex-shrink-0 mt-1">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-secondary">pixelverse2026@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-secondary mb-0 small">
            &copy; 2026 PixelVerse. All rights reserved.
          </p>
          <div className="d-flex gap-4">
            <a href="#" className="text-secondary text-decoration-none small nav-link-custom">Privacy Policy</a>
            <a href="#" className="text-secondary text-decoration-none small nav-link-custom">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
