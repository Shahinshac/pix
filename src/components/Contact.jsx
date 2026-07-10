import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        setFormStatus('sending');
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          // try to read text or json error from server
          const text = await res.text().catch(() => null);
          let errMsg = text || `Request failed with status ${res.status}`;
          try {
            const json = JSON.parse(text || 'null');
            if (json && json.error) errMsg = json.error;
          } catch (e) {}
          throw new Error(errMsg);
        }
        // parse json if present
        const data = await res.json().catch(() => null);
        setFormStatus('sent');
        setFormData({ name: '', email: '', service: '', message: '' });
      } catch (err) {
        console.error(err);
        setFormStatus('error');
      }
    })();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/pixel.verse__',
      username: 'pixel.verse__',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-5" style={{ margin: '100px 0' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Column - Contact Info */}
          <div className="col-lg-5" data-aos="fade-right">
            <h2 className="display-4 fw-bold display-font mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="lead text-muted mb-5">
              Ready to take your digital presence to the next level? Get in touch with us today and let's discuss your next project.
            </p>

            <div className="d-flex flex-column gap-4 mb-5">
              <div className="d-flex align-items-center gap-4">
                <div className="icon-box bg-gradient-custom shadow-sm mb-0 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email Us</h5>
                  <p className="text-muted mb-0">pixelverse2026@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <div key={social.name} className="d-flex align-items-center">
                  <a
                    href={social.href || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gradient rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift"
                    style={{ width: '45px', height: '45px' }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                  <a
                    href={social.href || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-2 small text-muted text-decoration-none align-self-center"
                    style={{ color: 'var(--text-light)' }}
                  >
                    @{social.username}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="custom-card p-4 p-md-5 shadow-lg">
              <h3 className="h2 fw-bold mb-4 display-font">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="row g-4">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label fw-medium text-muted">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-control custom-input"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-medium text-muted">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-control custom-input"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="service" className="form-label fw-medium text-muted">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    autoComplete="off"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select custom-input"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="ATS Friendly CV">ATS Friendly CV</option>
                    <option value="Birthday Surprise Website">Birthday Surprise Website</option>
                    <option value="Wedding Invitation Website">Wedding Invitation Website</option>
                    <option value="Portfolio Website">Portfolio Website</option>
                    <option value="Project Report">Project Report</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-medium text-muted">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="form-control custom-input"
                    required
                  />
                </div>

                <div className="col-12 mt-5">
                  <button type="submit" className="btn btn-gradient w-100 py-3 rounded-pill fw-bold fs-5 hover-lift" disabled={formStatus === 'sending'}>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      {formStatus === 'sending' ? 'Sending...' : formStatus === 'sent' ? 'Sent ✓' : 'Send Message'}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </div>
                  </button>
                </div>
                {formStatus === 'error' && (
                  <div className="col-12">
                    <div className="alert alert-danger">Failed to send message. Try again later.</div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
