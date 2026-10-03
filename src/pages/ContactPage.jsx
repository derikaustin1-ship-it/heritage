import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2, UserCheck } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Heritage Higher Secondary School";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email address is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Contact Us</span>
          </div>
          <h1>Contact Heritage Higher Secondary School</h1>
          <p>
            We welcome inquiries from prospective parents, alumni, and community members in RS Puram, Coimbatore.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
            
            {/* Contact Details Column */}
            <div>
              <span className="section-subtitle">Reach Us</span>
              <h2>Campus Address & Office Hours</h2>
              <p style={{ margin: '1rem 0 2rem', lineHeight: '1.6', fontSize: '1rem' }}>
                Our administrative and admissions offices are open for in-person consultations during official school working hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div className="card" style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(107, 38, 53, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--color-burgundy)', height: 'fit-content' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', margin: '0 0 0.35rem', color: 'var(--color-burgundy-dark)' }}>Campus Address</h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>
                      Heritage Higher Secondary School<br />
                      RS Puram, Coimbatore,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(107, 38, 53, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--color-burgundy)', height: 'fit-content' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', margin: '0 0 0.35rem', color: 'var(--color-burgundy-dark)' }}>Phone Numbers</h4>
                    <p style={{ margin: 0, fontSize: '0.92rem' }}>
                      Main Desk: <strong>+91 98765 67890</strong><br />
                      Admissions: <strong>+91 98765 67891</strong>
                    </p>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(107, 38, 53, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--color-burgundy)', height: 'fit-content' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', margin: '0 0 0.35rem', color: 'var(--color-burgundy-dark)' }}>Email Communication</h4>
                    <p style={{ margin: 0, fontSize: '0.92rem' }}>
                      General: <strong>office@heritageschool.example</strong><br />
                      Admissions: <strong>admissions@heritageschool.example</strong>
                    </p>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(107, 38, 53, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--color-burgundy)', height: 'fit-content' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', margin: '0 0 0.35rem', color: 'var(--color-burgundy-dark)' }}>Office Hours</h4>
                    <p style={{ margin: 0, fontSize: '0.92rem' }}>
                      Monday – Saturday: <strong>8:30 AM – 4:00 PM</strong><br />
                      Sundays & Public Holidays: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Form Column */}
            <div>
              <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--color-burgundy)' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Send Us a Message</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.5rem' }}>
                  Fill out the form below and our office team will respond promptly.
                </p>

                {isSubmitted ? (
                  <div className="alert-success">
                    <CheckCircle2 size={24} style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: 0, color: '#1b5e20', fontSize: '1.1rem' }}>Thank you for contacting Heritage.</h4>
                      <p style={{ margin: '0.4rem 0 0', fontSize: '0.9rem', color: '#2e7d32' }}>
                        We have received your enquiry and will get back to you soon.
                      </p>
                      <p style={{ margin: '0.6rem 0 0', fontSize: '0.8rem', fontStyle: 'italic', opacity: 0.85 }}>
                        Note: This is a demo form for portfolio showcase purposes.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Your Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="form-input" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="e.g. Dr. K. Meenakshi" 
                      />
                      {errors.name && <div className="form-error">{errors.name}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="yourname@example.com" 
                      />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="form-input" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="+91 98765 67890" 
                      />
                      {errors.phone && <div className="form-error">{errors.phone}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">Subject / Department</label>
                      <select id="subject" name="subject" className="form-select" value={formData.subject} onChange={handleChange}>
                        <option value="General Enquiry">General Inquiry</option>
                        <option value="Admissions">Admissions Inquiry</option>
                        <option value="Academic Stream">Academic Stream Details</option>
                        <option value="Campus Visit">Campus Visit Request</option>
                        <option value="Alumni Relation">Alumni Communication</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Your Message *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        className="form-textarea" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Write your message or inquiry here..."
                      />
                      {errors.message && <div className="form-error">{errors.message}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                      Send Message <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Location Card Placeholder */}
      <section className="section-padding bg-stone-light">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Location Map</span>
            <h2>Find Us in RS Puram</h2>
            <p style={{ margin: '0.5rem 0 0' }}>Located in RS Puram, Coimbatore with convenient bus and city transit connections.</p>
          </div>

          <div style={{ 
            height: '350px', 
            borderRadius: 'var(--radius-md)', 
            backgroundColor: 'var(--color-forest-dark)', 
            color: 'var(--color-ivory)',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '2px solid var(--color-gold)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'center',
            padding: '2rem'
          }}>
            <Building2 size={48} style={{ color: 'var(--color-gold)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--color-ivory)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>Heritage Higher Secondary School</h3>
            <p style={{ color: 'rgba(250,248,242,0.85)', fontSize: '1.05rem', maxWidth: '500px' }}>
              RS Puram, Coimbatore, Tamil Nadu, India • Landmark Location
            </p>
            <span style={{ 
              marginTop: '1rem', 
              fontSize: '0.8rem', 
              color: 'var(--color-gold)', 
              padding: '0.35rem 0.85rem', 
              border: '1px solid var(--color-gold)', 
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(0,0,0,0.4)'
            }}>
              Interactive Map Container Placeholder
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
