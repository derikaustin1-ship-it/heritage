import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Library, Microscope, Monitor, Trophy, ShieldCheck, Bus, Music, Sparkles, ArrowRight } from 'lucide-react';

export default function CampusPage() {
  useEffect(() => {
    document.title = "Campus | Heritage Higher Secondary School";
  }, []);

  const facilities = [
    {
      title: 'Central Academic Library',
      desc: 'Featuring over 15,000 reference volumes, educational journals, research encyclopedias, and quiet reading alcoves designed for deep study.',
      icon: Library,
      image: '/images/school_library.jpg'
    },
    {
      title: 'Science Research Laboratories',
      desc: 'Dedicated, fully safety-compliant Physics, Chemistry, and Biology laboratories equipped with individual demonstration stations for practical experiments.',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Modern Computer Centre',
      desc: 'Equipped with high-performance desktop workstations, high-speed fiber internet, and programming software for computer science streams.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sports Grounds & Athletics',
      desc: 'Spacious outdoor basketball court, 200m track area, cricket nets, and indoor games room for table tennis and chess.',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Institutional Auditorium',
      desc: '500-seat multi-purpose hall equipped with acoustic wall paneling and stage lighting for school assemblies, cultural events, and annual days.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Fine Arts & Performing Arts Studio',
      desc: 'Dedicated creative rooms for drawing, painting, classical Indian music instruction, and band practice under specialized teachers.',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Campus</span>
          </div>
          <h1>Campus Infrastructure & Facilities</h1>
          <p>
            A serene, architectural environment in RS Puram, Coimbatore, designed for scholarly focus, physical fitness, and student wellbeing.
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-subtitle">Scholarly Sanctuary</span>
              <h2>Designed for Disciplined Learning</h2>
              <p style={{ marginTop: '1.25rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Situated away from traffic noise in RS Puram, the Heritage campus combines classical South Indian architectural motifs with modern educational infrastructure.
              </p>
              <p style={{ marginTop: '1rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Every building, corridor, and green courtyard is maintained to maintain a calm, clean, and disciplined atmosphere where students can concentrate on academics, sports, and co-curricular pursuits.
              </p>
            </div>

            <div>
              <img 
                src="/images/hero_school_building.jpg" 
                alt="Heritage Campus Overview" 
                style={{ borderRadius: 'var(--radius-md)', border: '2px solid var(--color-gold)', boxShadow: 'var(--shadow-lg)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase Grid */}
      <section className="section-padding bg-stone-light">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Institutional Facilities</span>
            <h2>Infrastructure Showcase</h2>
            <p style={{ maxWidth: '650px', margin: '0.75rem auto 0' }}>
              Explore our specialized learning centers and sports amenities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {facilities.map((f, idx) => {
              const IconComp = f.icon;
              return (
                <div key={idx} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
                  />
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem', color: 'var(--color-burgundy)' }}>
                      <IconComp size={24} />
                      <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--color-burgundy-dark)' }}>{f.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Transport Section */}
      <section className="section-padding bg-forest">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle" style={{ color: 'var(--color-gold-light)' }}>Student Security</span>
            <h2 style={{ color: 'var(--color-ivory)' }}>Safety & School Transport</h2>
            <p style={{ color: 'rgba(250,248,242,0.85)', maxWidth: '650px', margin: '0.75rem auto 0' }}>
              We maintain non-negotiable safety procedures across all transport buses and campus access gates.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(176,141,87,0.3)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
              <Bus size={32} style={{ color: 'var(--color-gold)' }} />
              <h3 style={{ color: 'var(--color-ivory)', marginTop: '1rem', fontSize: '1.35rem' }}>Dedicated Transport Fleet</h3>
              <p style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Fleet of GPS-monitored buses covering major residential hubs in Coimbatore with trained drivers and bus attendants.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(176,141,87,0.3)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
              <ShieldCheck size={32} style={{ color: 'var(--color-gold)' }} />
              <h3 style={{ color: 'var(--color-ivory)', marginTop: '1rem', fontSize: '1.35rem' }}>24/7 CCTV & Security Desk</h3>
              <p style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Continuous campus perimeter monitoring, visitor badge verification, and mandatory entry/exit logs.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/gallery" className="btn btn-gold">
              View Complete Campus Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
