import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, ChevronUp, FileText, Send, Calendar, User, Phone, Mail, HelpCircle } from 'lucide-react';

export default function AdmissionsPage() {
  useEffect(() => {
    document.title = "Admissions | Heritage Higher Secondary School";
  }, []);

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: 'Grade 1',
    phone: '',
    email: '',
    visitDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const steps = [
    { step: '01', title: 'Admissions Enquiry', desc: 'Submit an online enquiry or visit the admissions office in RS Puram to receive the school prospectus and details.' },
    { step: '02', title: 'Campus Visit & Orientation', desc: 'Schedule a guided walkthrough of our library, laboratories, classrooms, and sports facilities with an admissions officer.' },
    { step: '03', title: 'Student Interaction / Assessment', desc: 'An informal interaction for lower grades or a basic academic readiness assessment for higher secondary entrants.' },
    { step: '04', title: 'Application Submission', desc: 'Submit the completed application form along with verified copies of birth certificate, previous report cards, and transfer certificate.' },
    { step: '05', title: 'Admission Confirmation', desc: 'Upon review by the admissions committee, formal confirmation is issued followed by fee deposit and student onboarding.' }
  ];

  const documentsRequired = [
    'Copy of Student Birth Certificate (Attested)',
    'Transfer Certificate (TC) from previous recognized school',
    'Report cards / Mark statements of past 2 academic years',
    'Conduct Certificate from previous institution',
    'Recent passport-size photographs of Student & Parents (4 copies)',
    'Proof of Residence (Aadhaar / Passport / Ration Card / Utility Bill)',
    'Medical fitness certificate from a registered medical practitioner'
  ];

  const ageGuidelines = [
    { grade: 'LKG', minAge: '3 Years 6 Months', maxAge: '4 Years 5 Months' },
    { grade: 'UKG', minAge: '4 Years 6 Months', maxAge: '5 Years 5 Months' },
    { grade: 'Grade 1', minAge: '5 Years 6 Months', maxAge: '6 Years 5 Months' },
    { grade: 'Grade 5', minAge: '9 Years 6 Months', maxAge: '10 Years 5 Months' },
    { grade: 'Grade 8', minAge: '12 Years 6 Months', maxAge: '13 Years 5 Months' },
    { grade: 'Grade 11', minAge: '15 Years 6 Months', maxAge: '16 Years 5 Months' }
  ];

  const faqs = [
    {
      q: 'What grades does Heritage Higher Secondary School offer?',
      a: 'Heritage offers complete schooling from Pre-Primary (LKG & UKG), Primary (Grades 1–5), Middle School (Grades 6–8), Secondary (Grades 9–10) up to Higher Secondary (Grades 11–12 with Science & Commerce streams).'
    },
    {
      q: 'How does the admission process work?',
      a: 'The process involves an initial enquiry, campus visit, document submission, informal student interaction/readiness assessment, and formal confirmation upon committee review.'
    },
    {
      q: 'Can parents visit the campus before applying?',
      a: 'Yes, we encourage parents to schedule a campus tour between Monday and Saturday (9:00 AM – 3:00 PM) to observe our classrooms, library, and sports facilities.'
    },
    {
      q: 'What documents are required for admission?',
      a: 'Key documents include the student birth certificate, transfer certificate (TC), past academic mark sheets, proof of address, medical fitness certificate, and passport photographs.'
    },
    {
      q: 'Is school transport available?',
      a: 'Yes, Heritage operates dedicated school bus routes across major residential areas in and around Coimbatore, adhering to strict safety standards and trained bus attendants.'
    },
    {
      q: 'What extracurricular activities are available?',
      a: 'Students can participate in athletics, basketball, cricket, chess, literary & debate club, classical music, fine arts, drama, robotics, and social service initiatives.'
    },
    {
      q: 'How can I contact the admissions office directly?',
      a: 'You can call our admissions helpdesk at +91 98765 67890 or email office@heritageschool.example, or visit our campus office in RS Puram, Coimbatore.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Valid contact phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email address is required';

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
            <Link to="/">Home</Link> / <span>Admissions</span>
          </div>
          <h1>Admissions at Heritage</h1>
          <p>
            Begin the next chapter of your child's educational journey in an established, disciplined academic community.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Structured Pathway</span>
            <h2>Step-by-Step Admission Process</h2>
            <p style={{ maxWidth: '650px', margin: '0.75rem auto 0' }}>
              We ensure a transparent, systematic admission procedure for prospective parents and students.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {steps.map((s, idx) => (
              <div key={idx} className="card" style={{ position: 'relative', borderTop: '4px solid var(--color-gold)', padding: '1.75rem' }}>
                <span style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '2.5rem', 
                  fontWeight: 700, 
                  color: 'var(--color-gold)', 
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>
                  {s.step}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-burgundy-dark)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines & Documents Grid */}
      <section className="section-padding bg-stone-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            
            {/* Required Documents */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <FileText size={28} style={{ color: 'var(--color-burgundy)' }} />
                <h3 style={{ fontSize: '1.6rem', margin: 0 }}>Required Documents</h3>
              </div>
              <p style={{ fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                Please bring original and self-attested copies of the following documents during formal submission:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {documentsRequired.map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--color-charcoal)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Age Criteria Table */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Age Criteria Guidelines</h3>
              <p style={{ fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                Calculated as of June 31 of the academic entry year:
              </p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-burgundy)', color: 'var(--color-ivory)' }}>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderRadius: '4px 0 0 0' }}>Grade Level</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Minimum Age</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderRadius: '0 4px 0 0' }}>Maximum Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ageGuidelines.map((g, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: idx % 2 === 0 ? 'var(--color-ivory)' : 'var(--color-white)' }}>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--color-burgundy-dark)' }}>{g.grade}</td>
                        <td style={{ padding: '0.75rem 1rem' }}>{g.minAge}</td>
                        <td style={{ padding: '0.75rem 1rem' }}>{g.maxAge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Admission Enquiry Form Section */}
      <section className="section-padding bg-ivory">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '3rem 2.5rem', borderTop: '5px solid var(--color-burgundy)' }}>
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <span className="section-subtitle">Get in Touch</span>
              <h2>Admission Enquiry Form</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-muted)', marginTop: '0.4rem' }}>
                Submit details below to request prospectus, schedule a campus visit, or consult our admissions team.
              </p>
            </div>

            {isSubmitted ? (
              <div className="alert-success">
                <CheckCircle2 size={24} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ margin: 0, color: '#1b5e20', fontSize: '1.1rem' }}>Thank you! Your enquiry has been received.</h4>
                  <p style={{ margin: '0.4rem 0 0', fontSize: '0.9rem', color: '#2e7d32' }}>
                    Our admissions desk in RS Puram will contact you shortly via phone or email.
                  </p>
                  <p style={{ margin: '0.6rem 0 0', fontSize: '0.8rem', fontStyle: 'italic', opacity: 0.85 }}>
                    Note: This is a demo form for portfolio showcase purposes and does not require a real backend.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="parentName">Parent / Guardian Name *</label>
                    <input 
                      type="text" 
                      id="parentName" 
                      name="parentName" 
                      className="form-input" 
                      value={formData.parentName} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Ramesh Sundaram" 
                    />
                    {errors.parentName && <div className="form-error">{errors.parentName}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="studentName">Student Name *</label>
                    <input 
                      type="text" 
                      id="studentName" 
                      name="studentName" 
                      className="form-input" 
                      value={formData.studentName} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Ananya Ramesh" 
                    />
                    {errors.studentName && <div className="form-error">{errors.studentName}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="grade">Grade Applying For *</label>
                    <select id="grade" name="grade" className="form-select" value={formData.grade} onChange={handleInputChange}>
                      <option value="LKG">LKG (Pre-Primary)</option>
                      <option value="UKG">UKG (Pre-Primary)</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 11 Science">Grade 11 (Science Stream)</option>
                      <option value="Grade 11 Commerce">Grade 11 (Commerce Stream)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="form-input" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+91 98765 43210" 
                    />
                    {errors.phone && <div className="form-error">{errors.phone}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-input" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="parent@example.com" 
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="visitDate">Preferred Campus Visit Date</label>
                    <input 
                      type="date" 
                      id="visitDate" 
                      name="visitDate" 
                      className="form-input" 
                      value={formData.visitDate} 
                      onChange={handleInputChange} 
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Additional Message / Query</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="form-textarea" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Mention any specific queries regarding transport, academic subjects, or visit schedule..."
                  />
                </div>

                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem' }}>
                    Submit Admissions Enquiry <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding bg-stone-light">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ margin: '0.5rem 0 0' }}>Find quick answers regarding admissions, campus visits, and school policies.</p>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                  <button 
                    className="accordion-header"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} style={{ color: 'var(--color-gold)' }} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="accordion-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
