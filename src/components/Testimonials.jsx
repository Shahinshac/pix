import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, Nova Finance',
    content: 'PixelVerse transformed our digital presence completely. Their attention to detail and creative approach exceeded all our expectations. The results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, Pulse Health',
    content: 'Working with PixelVerse was an incredible experience. They understood our vision from day one and delivered a product that truly represents our brand.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'CMO, Apex Brand',
    content: 'The team at PixelVerse is exceptional. They brought fresh ideas to the table and executed flawlessly. Our conversion rates increased by 150% after the redesign.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-5" style={{ margin: '100px 0', backgroundColor: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-primary-custom fw-semibold tracking-wider text-uppercase d-block mb-2" style={{ letterSpacing: '2px' }}>
            TESTIMONIALS
          </span>
          <h2 className="display-4 fw-bold display-font">
            Client Success Stories
          </h2>
        </div>

        <div className="mx-auto position-relative" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="200">
          {/* Quote Icon */}
          <div className="position-absolute" style={{ top: '-40px', left: '-20px', opacity: 0.1, zIndex: 0 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="120" height="120">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="custom-card p-5 text-center position-relative z-1 shadow-sm border-0">
            <div className="d-flex justify-content-center gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" width="24" height="24" className="text-warning">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="fs-4 fst-italic mb-5" style={{ minHeight: '120px' }}>
              "{testimonials[current].content}"
            </p>

            <div>
              <h4 className="fw-bold mb-1">{testimonials[current].name}</h4>
              <p className="text-muted mb-0">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="d-flex justify-content-center gap-4 mt-5">
            <button 
              onClick={prev} 
              className="btn btn-outline-secondary rounded-circle shadow-sm"
              style={{ width: '50px', height: '50px' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button 
              onClick={next} 
              className="btn btn-outline-secondary rounded-circle shadow-sm"
              style={{ width: '50px', height: '50px' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
