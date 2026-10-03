import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import CrestLogo from './CrestLogo';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-burgundy-dark)', color: 'var(--color-ivory)', borderTop: '4px solid var(--color-gold)' }}>
      {/* Upper Footer Banner */}
      <div style={{ backgroundColor: 'var(--color-forest-dark)', padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(176,141,87,0.15)', borderRadius: '50%', color: 'var(--color-gold)' }}>
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 style={{ color: 'var(--color-ivory)', fontSize: '1.1rem', margin: 0 }}>Academic Integrity</h4>
              <p style={{ color: 'rgba(250,248,242,0.75)', fontSize: '0.85rem', margin: 0 }}>Rigorous state-board curriculum and holistic education</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(176,141,87,0.15)', borderRadius: '50%', color: 'var(--color-gold)' }}>
              <HeartHandshake size={28} />
            </div>
            <div>
              <h4 style={{ color: 'var(--color-ivory)', fontSize: '1.1rem', margin: 0 }}>Values & Mentorship</h4>
              <p style={{ color: 'rgba(250,248,242,0.75)', fontSize: '0.85rem', margin: 0 }}>Character development, discipline & personalized care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="section-padding" style={{ paddingBottom: '3rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
          
          {/* Column 1: School Profile */}
          <div>
            <CrestLogo variant="light" size="large" />
            <p style={{ marginTop: '1.25rem', color: 'rgba(250,248,242,0.8)', fontSize: '0.92rem', fontStyle: 'italic' }}>
              "Tradition in Learning. Excellence in Character."
            </p>
            <p style={{ marginTop: '0.75rem', color: 'rgba(250,248,242,0.7)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              A co-educational day school in RS Puram, Coimbatore. Dedicated to developing disciplined thinkers and principled global citizens.
            </p>
          </div>

          {/* Column 2: School Overview */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.15rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(176,141,87,0.3)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              School Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link to="/about" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>About Heritage</Link></li>
              <li><Link to="/academics" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Academic Framework</Link></li>
              <li><Link to="/campus" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Campus Infrastructure</Link></li>
              <li><Link to="/student-life" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Student Life & Clubs</Link></li>
              <li><Link to="/achievements" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Student Achievements</Link></li>
              <li><Link to="/gallery" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Campus Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Admissions */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.15rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(176,141,87,0.3)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              Admissions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link to="/admissions" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Admission Overview</Link></li>
              <li><Link to="/admissions" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Admission Step-by-Step</Link></li>
              <li><Link to="/admissions" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Required Documents</Link></li>
              <li><Link to="/admissions" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Age Criteria & Guidelines</Link></li>
              <li><Link to="/admissions" style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem' }}>Admissions FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.15rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(176,141,87,0.3)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              Campus Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'rgba(250,248,242,0.85)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>Heritage Higher Secondary School,<br />RS Puram, Coimbatore,<br />Tamil Nadu, India</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <span>+91 98765 67890</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <span>office@heritageschool.example</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Clock size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <span>Mon – Sat: 8:30 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Disclaimer Strip */}
      <div style={{ backgroundColor: '#2E1117', padding: '1.25rem 0', borderTop: '1px solid rgba(176,141,87,0.2)', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'rgba(250,248,242,0.75)' }}>
          <div>
            © 2026 Heritage Higher Secondary School. All rights reserved.
          </div>
          <div style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '0.05em' }}>
            Portfolio Demo — Fictional School
          </div>
        </div>
      </div>
    </footer>
  );
}
