const projects = [
  { title: 'Nova Finance', category: 'Web Development', gradient: 'linear-gradient(to bottom right, #7c3aed, #4f46e5)' },
  { title: 'Pulse Health', category: 'Mobile App', gradient: 'linear-gradient(to bottom right, #c026d3, #db2777)' },
  { title: 'Apex Brand', category: 'Brand Identity', gradient: 'linear-gradient(to bottom right, #0891b2, #2563eb)' },
  { title: 'Echo Commerce', category: 'E-Commerce', gradient: 'linear-gradient(to bottom right, #f97316, #ef4444)' },
  { title: 'Drift Social', category: 'UI/UX Design', gradient: 'linear-gradient(to bottom right, #22c55e, #10b981)' },
  { title: 'Zen Studio', category: 'Web Development', gradient: 'linear-gradient(to bottom right, #9333ea, #7c3aed)' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5" style={{ margin: '100px 0' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-primary-custom fw-semibold tracking-wider text-uppercase d-block mb-2" style={{ letterSpacing: '2px' }}>
            OUR WORK
          </span>
          <h2 className="display-4 fw-bold display-font mb-3">
            Featured Projects
          </h2>
          <p className="text-muted lead max-w-2xl mx-auto mx-auto" style={{ maxWidth: '700px' }}>
            Explore some of our recent work and see how we've helped brands achieve their digital goals.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="custom-card overflow-hidden h-100" style={{ cursor: 'pointer' }}>
                <div 
                  className="position-relative d-flex justify-content-center align-items-center"
                  style={{ height: '320px', background: project.gradient, transition: 'transform 0.4s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.querySelector('.overlay').style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.querySelector('.overlay').style.opacity = '0';
                  }}
                >
                  <h3 className="display-font text-white fw-bold display-1 m-0" style={{ opacity: 0.2 }}>
                    {project.title.split(' ').map(w => w[0]).join('')}
                  </h3>
                  
                  {/* Hover Overlay */}
                  <div 
                    className="overlay position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                    style={{ background: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.3s' }}
                  >
                    <span className="badge bg-white text-dark rounded-pill px-3 py-2 mb-3 shadow">
                      {project.category}
                    </span>
                    <h4 className="text-white display-font mb-4 fw-bold">{project.title}</h4>
                    <span className="btn btn-outline-light rounded-pill px-4">
                      View Project →
                    </span>
                  </div>
                </div>
                
                <div className="p-4 bg-white border-top">
                  <h4 className="fw-bold mb-1">{project.title}</h4>
                  <p className="text-muted mb-0">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
