import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Compass, Award, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Heritage Higher Secondary School | Tradition in Learning";
  }, []);

  const coreValues = [
    { title: 'Integrity', desc: 'Conducting oneself with truthfulness, honesty, and strong moral principles in all endeavors.', icon: Shield },
    { title: 'Discipline', desc: 'Fostering self-control, punctuality, organized study habits, and personal responsibility.', icon: BookOpen },
    { title: 'Respect', desc: 'Valuing teachers, parents, fellow students, and diverse perspectives with genuine courtesy.', icon: Heart },
    { title: 'Curiosity', desc: 'Encouraging active inquiry, deep reading, scientific questioning, and lifelong learning.', icon: Compass },
    { title: 'Responsibility', desc: 'Understanding the consequences of actions and fulfilling duties to family and society.', icon: Award },
    { title: 'Compassion', desc: 'Demonstrating empathy, kindness, and helpfulness towards peers and community members.', icon: CheckCircle2 }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>About Heritage</span>
          </div>
          <h1>About Heritage Higher Secondary School</h1>
          <p>
            Founded on principles of academic rigor, moral clarity, and institutional discipline in RS Puram, Coimbatore.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-subtitle">Our Heritage</span>
              <h2>A Legacy of Scholarly Excellence</h2>
              <p style={{ marginTop: '1.25rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Heritage Higher Secondary School was established in 2001 with a clear mandate: to provide structured academic excellence grounded in traditional values for young minds in Coimbatore.
              </p>
              <p style={{ marginTop: '1rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Over the past 25 years, our institution has expanded from a modest primary campus into a full-fledged co-educational day school spanning Pre-Primary to Grade 12 (Higher Secondary). We emphasize strong fundamentals in Science, Mathematics, Humanities, and Languages under the State-board focused curriculum framework.
              </p>
              <p style={{ marginTop: '1rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Our commitment remains unchanged — to provide an orderly, disciplined, and nurturing environment where students earn knowledge through effort and develop strength of character.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <img 
                src="/images/hero_school_building.jpg" 
                alt="Heritage Campus Architecture" 
                style={{ borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gold)', boxShadow: 'var(--shadow-lg)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-stone-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <div className="card" style={{ borderTop: '4px solid var(--color-burgundy)', padding: '2.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)' }}>Institutional Vision</span>
              <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0 1rem', color: 'var(--color-burgundy)' }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                To be recognized as a premier educational institution that nurtures disciplined thinkers, ethically grounded individuals, and intellectually curious citizens capable of contributing meaningfully to society.
              </p>
            </div>

            <div className="card" style={{ borderTop: '4px solid var(--color-forest)', padding: '2.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)' }}>Core Objectives</span>
              <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0 1rem', color: 'var(--color-forest)' }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                To deliver a structured state-board higher-secondary curriculum through dedicated mentorship, transparent assessment, moral guidance, and rich co-curricular opportunities in a safe, respectful campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Foundational Pillars</span>
            <h2>Our Core Values</h2>
            <p style={{ maxWidth: '650px', margin: '0.75rem auto 0' }}>
              These six core values define daily life, classroom interactions, and student discipline at Heritage.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {coreValues.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="card" style={{ padding: '2rem' }}>
                  <div style={{ color: 'var(--color-burgundy)', marginBottom: '1rem' }}>
                    <IconComp size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principal's Message Detail */}
      <section className="section-padding bg-forest">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <img 
                src="/images/principal_portrait.jpg" 
                alt="Dr. Raghavan Iyer" 
                style={{ borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gold)', width: '100%', maxWidth: '380px' }} 
              />
            </div>

            <div>
              <span className="section-subtitle" style={{ color: 'var(--color-gold-light)' }}>Leadership Statement</span>
              <h2 style={{ color: 'var(--color-ivory)' }}>Principal's Address</h2>
              <div style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-gold)', margin: '1rem 0' }}>
                Dr. Raghavan Iyer • Principal, M.A., Ph.D. in Education
              </div>
              <p style={{ color: 'rgba(250,248,242,0.88)', lineHeight: '1.7', fontSize: '1rem', marginBottom: '1rem' }}>
                "At Heritage, we hold the conviction that genuine education develops both the mind and the character. In an era of rapid technological shift, grounding young people in clear moral values, respectful conduct, and solid academic fundamentals is more critical than ever."
              </p>
              <p style={{ color: 'rgba(250,248,242,0.88)', lineHeight: '1.7', fontSize: '1rem' }}>
                "We cultivate an atmosphere where hard work is celebrated, curiosity is encouraged, and every student receives personalized attention from dedicated educators."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="section-padding bg-burgundy">
        <div className="container text-center">
          <h2>Join the Heritage Community</h2>
          <p style={{ color: 'rgba(250,248,242,0.9)', maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Discover our admissions criteria and schedule a guided campus tour in RS Puram.
          </p>
          <Link to="/admissions" className="btn btn-gold">
            Admissions Overview & Enquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
