export default function About() {
  return (
    <section id="about" className="py-5" style={{ margin: '100px 0' }}>
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Column - Image/Visual */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="position-relative w-100" style={{ height: '500px' }}>
              <div 
                className="position-absolute rounded-4 shadow-lg bg-gradient-custom"
                style={{ width: '80%', height: '80%', top: '0', left: '0', transform: 'rotate(-5deg)', opacity: 0.9 }}
              ></div>
              <div 
                className="position-absolute rounded-4 shadow-lg bg-white"
                style={{ width: '80%', height: '80%', bottom: '0', right: '0', transform: 'rotate(5deg)' }}
              >
                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4">
                  <h2 className="display-font text-gradient display-1 fw-bold mb-0">10+</h2>
                  <p className="text-muted fw-semibold text-uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6" data-aos="fade-left">
            <span className="text-primary-custom fw-semibold text-uppercase mb-2 d-block tracking-wider" style={{ letterSpacing: '2px' }}>
              ABOUT US
            </span>
            <h2 className="display-4 fw-bold mb-4 display-font">
              We're a Team of Creative Problem Solvers
            </h2>
            <p className="text-muted mb-4 lead">
              At PixelVerse, we believe in the power of digital transformation. Our agency brings together creative minds, technical experts, and strategic thinkers to deliver solutions that push boundaries.
            </p>
            <p className="text-muted mb-5">
              With over a decade of experience, we've helped hundreds of businesses establish their digital presence, optimize their operations, and scale their impact globally.
            </p>

            <ul className="list-unstyled mb-0">
              {[
                'Award-Winning Design Team',
                'Cutting-Edge Technology Stack',
                'Results-Driven Approach',
                'Dedicated Support 24/7'
              ].map((feature, idx) => (
                <li key={idx} className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-gradient-custom d-flex justify-content-center align-items-center me-3" style={{ width: '24px', height: '24px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="fw-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
