const services = [
  { title: 'ATS Friendly CV', description: 'Professional, ATS-optimized resumes that get you past automated screening systems and land you interviews.', icon: 'layers' },
  { title: 'Birthday Surprise Website', description: 'Personalized, interactive websites created specifically to surprise and delight your loved ones on their special day.', icon: 'palette' },
  { title: 'Wedding Invitation Website', description: 'Elegant digital invitations with RSVPs, galleries, and countdowns tailored perfectly to your wedding theme.', icon: 'megaphone' },
  { title: 'Portfolio Website', description: 'Stunning personal or professional portfolios designed to showcase your best work and attract new opportunities.', icon: 'smartphone' },
  { title: 'Project Report', description: 'Comprehensive and visually appealing digital project reports that clearly communicate your data and achievements.', icon: 'code' },
];

function getIcon(iconName) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { width: '28px', height: '28px' }
  };

  switch (iconName) {
    case 'code':
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'palette':
      return (
        <svg {...props}>
          <circle cx="13.5" cy="6.5" r="1.5" />
          <circle cx="17.5" cy="10.5" r="1.5" />
          <circle cx="8.5" cy="7.5" r="1.5" />
          <circle cx="6.5" cy="12.5" r="1.5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.1-.7-.4-1-.3-.3-.4-.7-.4-1.1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.9-10-9.9z" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg {...props}>
          <path d="M3 11l18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case 'smartphone':
      return (
        <svg {...props}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'zap':
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-5" style={{ margin: '100px 0', backgroundColor: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-primary-custom fw-semibold tracking-wider text-uppercase d-block mb-2" style={{ letterSpacing: '2px' }}>
            OUR SERVICES
          </span>
          <h2 className="display-4 fw-bold display-font mb-3">
            Services That Drive Results
          </h2>
          <p className="text-muted lead max-w-2xl mx-auto mx-auto" style={{ maxWidth: '700px' }}>
            We offer comprehensive digital solutions tailored to elevate your brand and accelerate your business growth.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="custom-card hover-lift p-4 h-100">
                <div className="icon-box bg-gradient-custom">
                  {getIcon(service.icon)}
                </div>
                <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                <p className="text-muted mb-4">{service.description}</p>
                <a href="#contact" className="text-primary-custom text-decoration-none fw-medium d-inline-flex align-items-center">
                  Learn More 
                  <span className="ms-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
