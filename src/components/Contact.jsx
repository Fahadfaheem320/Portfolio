import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, Check, Copy, AlertCircle, Sparkles, UserPlus } from 'lucide-react';

export const Contact = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: 'Brand Identity',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      // If a Formspree / Web3Forms endpoint is configured, send real email:
      if (personal.formEndpoint && personal.formEndpoint.startsWith('http')) {
        const response = await fetch(personal.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Failed to send inquiry');
        }
      } else {
        // Fallback smooth simulation
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        service: 'Brand Identity',
        message: ''
      });
    } catch (err) {
      setSubmitting(false);
      setErrors({ form: 'Could not send message right now. Please email directly or try again.' });
    }
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleDownloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Terry;Steven;;;',
      'FN:Steven Terry',
      `TITLE:${personal.role}`,
      'ORG:TopCV',
      `EMAIL;TYPE=INTERNET,WORK:${personal.email}`,
      `TEL;TYPE=CELL,WORK:${personal.phone}`,
      `URL:${personal.website}`,
      `ADR;TYPE=WORK:;;London;England;;;`,
      `NOTE:${personal.tagline}`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Steven_Terry_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-heading text-center">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Create Something Extraordinary</h2>
          <div className="section-line" />
          <p className="section-intro">
            Have a project in mind, an open role, or looking to elevate your brand's visual identity? Let's connect and make it happen.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Details */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <h3 className="info-card-title">Direct Contact Information</h3>
              <p className="info-card-desc">
                Feel free to reach out via phone, email, or direct inquiry. I typically respond within 24 business hours.
              </p>

              <div className="contact-channels-list">
                {/* Email Item */}
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email Address</span>
                    <a href={`mailto:${personal.email}`} className="channel-value-link">
                      {personal.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="channel-copy-btn"
                    onClick={() => handleCopy(personal.email, 'email')}
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <Phone size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Telephone</span>
                    <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="channel-value-link">
                      {personal.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="channel-copy-btn"
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Current Base</span>
                    <span className="channel-value-static">{personal.location} (Open to Global Remote)</span>
                  </div>
                </div>

                {/* Website Item */}
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <Globe size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Portfolio Domain</span>
                    <a href={personal.website} target="_blank" rel="noreferrer" className="channel-value-link">
                      {personal.website.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>

              {/* vCard Button & Status Note */}
              <div className="contact-vcard-wrap">
                <button
                  type="button"
                  className="btn-vcard"
                  onClick={handleDownloadVCard}
                  title="Download contact details as .VCF file"
                >
                  <UserPlus size={16} />
                  <span>Save Contact to Device (.vcf)</span>
                </button>
              </div>

              <div className="contact-status-note">
                <span className="status-indicator-dot" />
                <span>Currently accepting selective brand and digital commissions for Q3/Q4.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success-banner">
                  <div className="success-icon-wrap">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="success-title">Message Received!</h3>
                  <p className="success-desc">
                    Thank you for reaching out. I have received your note and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  {errors.form && (
                    <div className="form-error-banner">
                      <AlertCircle size={15} />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Your Name <span className="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className={`form-input ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && (
                        <span className="form-error">
                          <AlertCircle size={12} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="e.g. john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && (
                        <span className="form-error">
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-service" className="form-label">
                        Project Interest
                      </label>
                      <select
                        id="contact-service"
                        className="form-input"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Brand Identity">Brand Identity & Systems</option>
                        <option value="UI/UX Web Design">UI/UX & Web Design</option>
                        <option value="Digital Marketing">Digital Marketing & Ads</option>
                        <option value="Print Publication">Print & Editorial Design</option>
                        <option value="Creative Consultation">Creative Consultation</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-subject" className="form-label">
                        Subject <span className="required">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        className={`form-input ${errors.subject ? 'is-invalid' : ''}`}
                        placeholder="e.g. New Brand Redesign"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                      {errors.subject && (
                        <span className="form-error">
                          <AlertCircle size={12} /> {errors.subject}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className={`form-input form-textarea ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Tell me about your project timeline, objectives, and deliverables..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && (
                      <span className="form-error">
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary form-submit-btn"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
