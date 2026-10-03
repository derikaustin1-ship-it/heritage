import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 — Page Not Found | Heritage Higher Secondary School";
  }, []);

  return (
    <div style={{ 
      minHeight: '70vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'var(--color-ivory)',
      padding: '4rem 1.5rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          backgroundColor: 'rgba(107, 38, 53, 0.08)', 
          color: 'var(--color-burgundy)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          border: '1px solid var(--color-gold)'
        }}>
          <BookOpen size={38} />
        </div>

        <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)' }}>
          Error 404
        </span>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '0.5rem 0 1rem', color: 'var(--color-burgundy-dark)' }}>
          This Page Has Gone Beyond the Library.
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', marginBottom: '2.25rem' }}>
          We couldn't find the page you were looking for. It may have been moved or renamed.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} /> Return Home
          </Link>
          <Link to="/academics" className="btn btn-secondary">
            Explore Academics <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
