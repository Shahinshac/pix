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
            <div className="d-flex gap-3">
              <a href="https://instagram.com/pixel.verse__" target="_blank" rel="noreferrer" className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift text-white border-0" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)' }}>
                <span className="small">I</span>
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
