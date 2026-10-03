import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Trophy, Music, BookOpen, Compass, Heart, Users, ArrowRight } from 'lucide-react';

export default function StudentLifePage() {
  useEffect(() => {
    document.title = "Student Life | Heritage Higher Secondary School";
  }, []);

  const activities = [
    {
      category: 'Academic & Literary Clubs',
      icon: BookOpen,
      items: [
        { name: 'Heritage Debate Society', desc: 'Fostering public speaking, parliamentary debate format, and logical argumentation.' },
        { name: 'Ramanujan Mathematics Club', desc: 'Exploring puzzle solving, mathematical olympiad problems, and logical riddles.' },
        { name: 'C.V. Raman Science Forum', desc: 'Conducting weekly model demonstrations, science trivia, and research posters.' },
        { name: 'Creative Writing & Editorial Club', desc: 'Publishing the annual school literary magazine and quarterly newsletters.' }
      ]
    },
    {
      category: 'Sports & Athletics',
      icon: Trophy,
      items: [
        { name: 'Inter-House Sports League', desc: 'Four houses competing annually in basketball, cricket, track events, and badminton.' },
        { name: 'Chess & Strategy Forum', desc: 'Developing tactical thinking and concentration through competitive chess tournaments.' },
        { name: 'Athletics & Physical Fitness', desc: 'Daily morning track coaching, yoga sessions, and physical endurance routines.' }
      ]
    },
    {
      category: 'Fine Arts & Performing Arts',
      icon: Music,
      items: [
        { name: 'Classical Music & Choir', desc: 'Vocal training in Carnatic music, choir harmony, and devotional hymns.' },
        { name: 'Fine Arts & Craft Guild', desc: 'Oil painting, sketching, pottery, and traditional South Indian art workshops.' },
        { name: 'Theatre & Cultural Troupe', desc: 'Staging historical plays, literary dramas, and value-based street plays.' }
      ]
    },
    {
      category: 'Leadership & Social Service',
      icon: Users,
      items: [
        { name: 'Student Prefectural Council', desc: 'Elected student leaders responsible for discipline, house morale, and event management.' },
        { name: 'Green Earth Eco Club', desc: 'Campus tree planting, rainwater harvesting awareness, and waste segregation drives.' },
        { name: 'Community Outreach Cell', desc: 'Organizing book donation drives, visits to elderly care centers, and literacy assistance.' }
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Student Life</span>
          </div>
          <h1>Beyond the Classroom</h1>
          <p>
            Cultivating well-rounded character through structured sports, literary societies, artistic expression, and civic responsibility.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-ivory">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <span className="section-subtitle">Holistic Growth</span>
          <h2>Character Formed Through Activity</h2>
          <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
            At Heritage, co-curricular involvement is not an alternative to academic study, but an essential extension of it. Through team sports, debate, music, and student leadership, learners develop resilience, teamwork, self-discipline, and mutual respect.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-stone-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {activities.map((act, idx) => {
              const IconComp = act.icon;
              return (
                <div key={idx} className="card" style={{ padding: '2.25rem', borderTop: '4px solid var(--color-gold)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--color-burgundy)' }}>
                    <IconComp size={28} />
                    <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--color-burgundy-dark)' }}>{act.category}</h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {act.items.map((item, i) => (
                      <div key={i} style={{ borderBottom: i !== act.items.length - 1 ? '1px solid var(--color-border)' : 'none', paddingBottom: '0.85rem' }}>
                        <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.25rem', color: 'var(--color-charcoal)' }}>{item.name}</h4>
                        <p style={{ fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Council Section */}
      <section className="section-padding bg-forest">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-subtitle" style={{ color: 'var(--color-gold-light)' }}>Student Leadership</span>
              <h2 style={{ color: 'var(--color-ivory)' }}>The Student Prefectural Council</h2>
              <p style={{ color: 'rgba(250,248,242,0.88)', lineHeight: '1.7', fontSize: '1.05rem', margin: '1.25rem 0' }}>
                Every year, Grade 11 and 12 students are selected to serve as Head Pupil, House Captains, and Sports Secretaries. They lead morning assemblies, assist faculty during major events, and mentor junior students.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'var(--color-gold-light)', fontSize: '0.92rem' }}>
                <div>• Head Boy & Head Girl</div>
                <div>• Four House Captains</div>
                <div>• Sports Captains</div>
                <div>• Literary & Cultural Secretaries</div>
              </div>
            </div>

            <div className="card" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid var(--color-gold)', color: 'var(--color-ivory)', padding: '2.5rem' }}>
              <h3 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>The Four Houses</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: 'rgba(250,248,242,0.85)', marginBottom: '1.25rem' }}>
                Students belong to four distinct houses named after legendary Indian scholars:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ padding: '0.6rem 1rem', background: 'rgba(107,38,53,0.5)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                  <strong>Thiruvalluvar House:</strong> Ethics & Wisdom
                </div>
                <div style={{ padding: '0.6rem 1rem', background: 'rgba(36,74,58,0.5)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                  <strong>Ramanujan House:</strong> Analytical Precision
                </div>
                <div style={{ padding: '0.6rem 1rem', background: 'rgba(176,141,87,0.3)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                  <strong>Tagore House:</strong> Creative Literature & Arts
                </div>
                <div style={{ padding: '0.6rem 1rem', background: 'rgba(77,26,37,0.5)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                  <strong>C.V. Raman House:</strong> Scientific Inquiry
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-burgundy">
        <div className="container text-center">
          <h2>Experience Student Life at Heritage</h2>
          <p style={{ color: 'rgba(250,248,242,0.9)', maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Learn more about our annual events, house competitions, and admission opportunities.
          </p>
          <Link to="/admissions" className="btn btn-gold">
            Admissions Enquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
