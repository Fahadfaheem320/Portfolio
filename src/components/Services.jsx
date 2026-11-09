import React from 'react';
import { 
  Palette, 
  Layout, 
  Megaphone, 
  BookOpen, 
  Compass, 
  Presentation,
  ArrowRight 
} from 'lucide-react';

export const Services = ({ services }) => {
  const getIcon = (iconName) => {
    const props = { size: 26, strokeWidth: 1.8 };
    switch (iconName) {
      case 'Palette':
        return <Palette {...props} />;
      case 'Layout':
        return <Layout {...props} />;
      case 'Megaphone':
        return <Megaphone {...props} />;
      case 'BookOpen':
        return <BookOpen {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Presentation':
        return <Presentation {...props} />;
      default:
        return <Palette {...props} />;
    }
  };

  const handleInquire = (serviceTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // pre-select or focus
      const subjectInput = document.getElementById('contact-subject');
      if (subjectInput) {
        subjectInput.value = `Inquiry regarding ${serviceTitle}`;
        subjectInput.focus();
      }
    }
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-heading text-center">
          <span className="section-subtitle">What I Deliver</span>
          <h2 className="section-title">Specialized Creative Services</h2>
          <div className="section-line" />
          <p className="section-intro">
            Comprehensive creative solutions engineered to clarify your brand voice, elevate visual touchpoints, and scale customer engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={service.id} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  {getIcon(service.icon)}
                </div>
                <span className="service-index">0{idx + 1}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              <div className="service-tags-list">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="service-inquire-btn"
                onClick={() => handleInquire(service.title)}
              >
                <span>Request Service</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

