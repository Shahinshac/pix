export default function Hero() {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5">
      {/* Background Orbs */}
      <div className="gradient-blob blob-1 animate-float"></div>
      <div className="gradient-blob blob-2 animate-float"></div>
      
      <div className="container position-relative z-1 text-center mt-5">
        <div data-aos="fade-up">
          <span className="badge rounded-pill border px-4 py-2 mb-4" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: 'var(--primary)', borderColor: 'rgba(139, 92, 246, 0.2)' }}>
            ✨ Welcome to the Future of Digital
          </span>
        </div>
        
        <h1 className="display-3 fw-bold mb-3 display-font" data-aos="fade-up" data-aos-delay="100">
          We Craft Digital<br />
          <span className="text-gradient">Experiences</span>
        </h1>
        
        <p className="lead mx-auto mb-5" style={{ maxWidth: '600px', color: '#6b7280' }} data-aos="fade-up" data-aos-delay="200">
          Transforming ideas into stunning digital realities. We blend creativity with technology to build experiences that captivate and inspire.
        </p>
        
        <div className="d-flex justify-content-center gap-3 mb-5" data-aos="fade-up" data-aos-delay="300">
          <a href="#contact" className="btn btn-gradient btn-lg px-5 py-3 rounded-pill fw-semibold">
            Get Started
          </a>
          <a href="#portfolio" className="btn btn-outline-custom btn-lg px-5 py-3 rounded-pill fw-semibold">
            Our Work
          </a>
        </div>
        
        {/* Stats Bar */}
        <div className="custom-card p-4 mt-5 d-inline-block mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3 border-end">
              <h2 className="fw-bold mb-1 display-font">200+</h2>
              <p className="text-muted small text-uppercase mb-0 tracking-wider">Projects</p>
            </div>
            <div className="col-6 col-md-3 border-end">
              <h2 className="fw-bold mb-1 display-font">50+</h2>
              <p className="text-muted small text-uppercase mb-0 tracking-wider">Clients</p>
            </div>
            <div className="col-6 col-md-3 border-end">
              <h2 className="fw-bold mb-1 display-font">10+</h2>
              <p className="text-muted small text-uppercase mb-0 tracking-wider">Years</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold mb-1 display-font">15+</h2>
              <p className="text-muted small text-uppercase mb-0 tracking-wider">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
