import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import CrestLogo from './CrestLogo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Campus', path: '/campus' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'var(--color-ivory)' }}>
      {/* Top Info Bar */}
      <div className="top-info-bar" style={{ 
        backgroundColor: 'var(--color-burgundy-dark)', 
        color: '#FAF8F2', 
        padding: '0.4rem 0', 
        fontSize: '0.8rem',
        borderBottom: '1px solid rgba(176, 141, 87, 0.3)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={13} style={{ color: 'var(--color-gold)' }} />
              RS Puram, Coimbatore, Tamil Nadu
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={13} style={{ color: 'var(--color-gold)' }} />
              +91 98765 67890
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Mail size={13} style={{ color: 'var(--color-gold)' }} />
              office@heritageschool.example
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em', opacity: 0.85 }}>Pre-Primary to Grade 12 • Day School</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div style={{ 
        backgroundColor: 'var(--color-ivory)', 
        borderBottom: '1px solid var(--color-border)', 
        boxShadow: 'var(--shadow-sm)' 
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
          <Link to="/" aria-label="Heritage Higher Secondary School Home">
            <CrestLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1.15rem', alignItems: 'center', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                    style={({ isActive }) => ({
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? '700' : '500',
                      color: isActive ? 'var(--color-burgundy)' : 'var(--color-charcoal)',
                      padding: '0.4rem 0.1rem',
                      position: 'relative',
                      display: 'inline-block',
                      transition: 'color var(--transition-fast)'
                    })}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link 
              to="/admissions" 
              className="btn btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
            >
              Admissions Enquiry
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.5rem',
              color: 'var(--color-burgundy)',
              cursor: 'pointer'
            }}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(37, 37, 37, 0.6)',
            backdropFilter: 'blur(3px)',
            zIndex: 1100
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '85%',
              maxWidth: '360px',
              height: '100%',
              backgroundColor: 'var(--color-ivory)',
              boxShadow: 'var(--shadow-lg)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                <CrestLogo size="normal" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  style={{ background: 'none', border: 'none', color: 'var(--color-burgundy)', cursor: 'pointer', padding: '0.4rem' }}
                >
                  <X size={24} />
                </button>
              </div>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: isActive ? '700' : '500',
                        color: isActive ? 'var(--color-ivory)' : 'var(--color-burgundy-dark)',
                        backgroundColor: isActive ? 'var(--color-burgundy)' : 'transparent'
                      })}
                    >
                      {link.name}
                      <ChevronRight size={18} opacity={0.6} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-border)', marginTop: '2rem' }}>
              <Link 
                to="/admissions" 
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '1rem' }}
              >
                Admissions Enquiry
              </Link>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)', textAlign: 'center' }}>
                <p style={{ margin: 0 }}>RS Puram, Coimbatore, TN</p>
                <p style={{ margin: 0 }}>+91 98765 67890</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-gold);
          transition: width var(--transition-fast);
        }
        .nav-item:hover::after, .nav-item.active::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .top-info-bar {
            display: none !important;
          }
        }
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
