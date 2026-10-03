import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Trophy, Star, Medal, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AchievementsPage() {
  useEffect(() => {
    document.title = "Achievements | Heritage Higher Secondary School";
  }, []);

  const demoStats = [
    { num: '300+', label: 'Annual Student Projects Completed' },
    { num: '25+', label: 'Co-Curricular & Student Societies' },
    { num: '90%+', label: 'Student Active Participation Rate' },
    { num: '12+', label: 'Annual Inter-School Trophies' }
  ];

  const achievementCategories = [
    {
      title: 'Academic Honors',
      desc: 'Consistent 100% pass record in State Board Grade 10 & 12 examinations with a high proportion of distinction scores in Mathematics and Science.',
      badge: 'State Board Performance',
      icon: Award,
      items: [
        'Over 45% of Grade 12 students securing above 90% aggregate in Board exams.',
        'Centum scores achieved in Mathematics, Physics, and Accountancy.',
        '100% qualification rate for higher education admissions.'
      ]
    },
    {
      title: 'Sports & Athletics Distinction',
      desc: 'Outstanding performance in Coimbatore district and regional school athletics meets, basketball tournaments, and chess championships.',
      badge: 'District Champions',
      icon: Trophy,
      items: [
        'Gold & Silver medals in District Under-17 Athletics 800m & 1500m events.',
        'Runners-up in Regional Inter-School Basketball Tournament.',
        'Top 3 finishes in State Junior Chess Championship.'
      ]
    },
    {
      title: 'Debate & Public Speaking',
      desc: 'Recognized excellence in inter-school elocution, parliamentary debate formats, and district quiz competitions.',
      badge: 'Oratory Excellence',
      icon: Star,
      items: [
        'Winner of Coimbatore Inter-School English Debate Competition.',
        'First place in District Heritage & Science Quiz 2025.',
        'Best Speaker award at State Model United Nations Simulation.'
      ]
    },
    {
      title: 'Science & Innovation Projects',
      desc: 'Student scientific models and environmental solutions selected for regional science congress exhibitions.',
      badge: 'Innovation Showcase',
      icon: Sparkles,
      items: [
        'First prize for Solar Water Purification prototype at Regional Science Fair.',
        'Special commendation for Eco-Friendly Waste Management model.',
        'Selection for State Level Student Innovation Expo.'
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Achievements</span>
          </div>
          <h1>Recognising Effort & Excellence</h1>
          <p>
            Celebrating academic discipline, sporting vigor, artistic talent, and community honors earned by our students.
          </p>
        </div>
      </section>

      {/* Fictional Stats Wall */}
      <section style={{ backgroundColor: 'var(--color-burgundy-dark)', borderBottom: '1px solid var(--color-border)', color: 'var(--color-ivory)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem',
            padding: '2.5rem 0',
            textAlign: 'center'
          }}>
            {demoStats.map((s, idx) => (
              <div key={idx} style={{ padding: '0.5rem 1rem', borderRight: idx !== demoStats.length - 1 ? '1px solid rgba(176,141,87,0.25)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'rgba(250,248,242,0.85)', marginTop: '0.35rem', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', pb: '1rem', fontSize: '0.75rem', color: 'var(--color-gold)', letterSpacing: '0.05em', paddingBottom: '1rem' }}>
            * Demonstrative statistics for portfolio showcase
          </div>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Student Honors</span>
            <h2>Areas of Distinction</h2>
            <p style={{ maxWidth: '650px', margin: '0.75rem auto 0' }}>
              We encourage every student to strive for personal mastery and represent the school with pride.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {achievementCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={idx} className="card" style={{ padding: '2.25rem', borderTop: '4px solid var(--color-burgundy)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ color: 'var(--color-gold)' }}>
                      <IconComp size={36} />
                    </div>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      color: 'var(--color-burgundy)', 
                      backgroundColor: 'rgba(107, 38, 53, 0.08)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase'
                    }}>
                      {cat.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-burgundy-dark)' }}>{cat.title}</h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>{cat.desc}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                    {cat.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-charcoal)' }}>
                        <Medal size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-burgundy">
        <div className="container text-center">
          <h2>Strive for Academic Excellence at Heritage</h2>
          <p style={{ color: 'rgba(250,248,242,0.9)', maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Discover how our disciplined curriculum and faculty guidance unlock student potential.
          </p>
          <Link to="/admissions" className="btn btn-gold">
            Admissions Overview <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
