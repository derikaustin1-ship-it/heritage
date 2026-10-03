import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Award, Users, Compass, Shield, ChevronRight, 
  Sparkles, CheckCircle2, ArrowRight, Library, Microscope, 
  Trophy, Calendar, Heart, Clock, Milestone 
} from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    document.title = "Heritage Higher Secondary School | Tradition in Learning";
  }, []);

  const stats = [
    { number: '25+', label: 'Years of Educational Tradition' },
    { number: '1,800+', label: 'Enrolled Students' },
    { number: '110+', label: 'Educators & Support Staff' },
    { number: '20+', label: 'Clubs & Co-Curricular Activities' }
  ];

  const philosophyPillars = [
    {
      title: 'Knowledge',
      subtitle: 'Academic Foundations',
      description: 'Building rigorous intellectual habits, deep subject mastery, and critical inquiry through a structured curriculum.',
      icon: BookOpen
    },
    {
      title: 'Character',
      subtitle: 'Integrity & Responsibility',
      description: 'Developing moral clarity, self-discipline, respect for elders and peers, and accountability in daily conduct.',
      icon: Shield
    },
    {
      title: 'Perspective',
      subtitle: 'Understanding the World',
      description: 'Preparing students to understand wider societal challenges, value diverse views, and contribute meaningfully.',
      icon: Compass
    }
  ];

  const academicStages = [
    {
      title: 'Foundation Years',
      subtitle: 'Pre-Primary',
      desc: 'Nurturing curiosity, foundational literacy, numeracy, and motor coordination in a warm, structured environment.',
      icon: '🌱'
    },
    {
      title: 'Primary School',
      subtitle: 'Grades 1 – 5',
      desc: 'Developing core subjects, reading discipline, analytical reasoning, and collaborative learning habits.',
      icon: '📚'
    },
    {
      title: 'Middle School',
      subtitle: 'Grades 6 – 8',
      desc: 'Expanding scientific inquiry, mathematical concepts, linguistic depth, and introductory lab experiments.',
      icon: '🔬'
    },
    {
      title: 'Secondary School',
      subtitle: 'Grades 9 – 10',
      desc: 'Rigorous preparation for board assessments with focused academic mentoring and structured examination practice.',
      icon: '🎓'
    },
    {
      title: 'Higher Secondary',
      subtitle: 'Grades 11 – 12',
      desc: 'Specialized streams (Science, Commerce, Humanities), intensive career guidance, and university entrance counseling.',
      icon: '🏛️'
    }
  ];

  const timelineMilestones = [
    { year: '2001', title: 'Foundation of Heritage', desc: 'Established in RS Puram with a core commitment to academic discipline and moral character.' },
    { year: '2008', title: 'New Academic Block', desc: 'Constructed dedicated state-of-the-art classrooms and extended junior science laboratories.' },
    { year: '2014', title: 'Science & Tech Expansion', desc: 'Introduced modernized Physics, Chemistry, Biology, and Computer Science research labs.' },
    { year: '2019', title: 'Arts & Sports Complex', desc: 'Inaugurated multi-purpose sports grounds, auditorium, and dedicated fine arts wings.' },
    { year: '2024', title: 'Digital Learning Initiatives', desc: 'Integrated interactive smart boards, digital library resources, and online parent portals.' }
  ];

  const parentTestimonials = [
    {
      quote: "Heritage has given my daughter not just academic clarity, but a sense of discipline and self-respect that is rare today. The teachers are genuinely invested in her growth.",
      author: "Suresh M.",
      role: "Parent of Grade 8 Student"
    },
    {
      quote: "The structured examination guidance and dedicated faculty helped my son navigate Grade 11 with confidence. The school balances academics with strong values.",
      author: "Lakshmi P.",
      role: "Parent of Grade 11 Student"
    },
    {
      quote: "As parents, we value the peaceful, respectful environment at Heritage. Primary school has laid a fantastic foundation for our child's curiosity.",
      author: "Arvind K.",
      role: "Parent of Grade 5 Student"
    }
  ];

  const newsItems = [
    {
      category: 'Academic Exhibition',
      date: 'October 15, 2026',
      title: 'Annual Science & Humanities Exhibition Announced',
      desc: 'Students across Grades 6–12 will present original research models and historical demonstrations.'
    },
    {
      category: 'Athletics',
      date: 'November 04, 2026',
      title: 'Inter-House Annual Sports Meet 2026',
      desc: 'Three-day track, field, and indoor tournament promoting sportsmanship, team spirit, and endurance.'
    },
    {
      category: 'Community',
      date: 'November 20, 2026',
      title: 'Parent-Educator Orientation & Progress Review',
      desc: 'Interactive discussion on mid-term academic performance, study schedules, and student mentoring.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '82vh', 
        display: 'flex', 
        alignItems: 'center',
        background: `linear-gradient(rgba(45, 15, 23, 0.82), rgba(36, 74, 58, 0.85)), url('/images/hero_school_building.jpg') center/cover no-repeat`,
        color: 'var(--color-ivory)',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        <div className="container" style={{ padding: '4rem 1.5rem', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.4rem 1rem', 
              backgroundColor: 'rgba(176, 141, 87, 0.25)',
              border: '1px solid var(--color-gold)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.825rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-light)',
              marginBottom: '1.5rem'
            }}>
              Heritage Higher Secondary School • RS Puram, Coimbatore
            </span>

            <h1 style={{ color: 'var(--color-ivory)', fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Tradition in Learning.<br />Excellence in Character.
            </h1>

            <p style={{ 
              color: 'rgba(250, 248, 242, 0.92)', 
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
              lineHeight: 1.6, 
              fontWeight: 300,
              marginBottom: '2.25rem',
              maxWidth: '740px'
            }}>
              For generations of learners, education has been more than the pursuit of knowledge. At Heritage, we nurture disciplined thinkers, confident individuals and responsible members of society.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
              <Link to="/about" className="btn btn-gold">
                Explore Heritage <ChevronRight size={18} />
              </Link>
              <Link to="/admissions" className="btn btn-outline-gold">
                Admissions Enquiry
              </Link>
            </div>

            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              padding: '0.65rem 1.25rem', 
              backgroundColor: 'rgba(0, 0, 0, 0.4)', 
              backdropFilter: 'blur(4px)',
              borderLeft: '3px solid var(--color-gold)',
              fontSize: '0.88rem',
              color: 'var(--color-gold-light)'
            }}>
              <Sparkles size={16} style={{ color: 'var(--color-gold)' }} />
              <span>Pre-Primary to Grade 12 • Co-Educational • Day School</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / History Statistics Strip */}
      <section style={{ backgroundColor: 'var(--color-burgundy-dark)', borderBottom: '1px solid var(--color-border)', color: 'var(--color-ivory)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem',
            padding: '2.5rem 0',
            textAlign: 'center'
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ padding: '0.5rem 1rem', borderRight: idx !== stats.length - 1 ? '1px solid rgba(176,141,87,0.25)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'rgba(250,248,242,0.85)', marginTop: '0.35rem', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="/images/school_library.jpg" 
                alt="Heritage School Library & Study Hall" 
                style={{ 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--color-border)', 
                  boxShadow: 'var(--shadow-lg)' 
                }} 
              />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                backgroundColor: 'var(--color-forest)',
                color: 'var(--color-ivory)',
                padding: '1.25rem 1.75rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                maxWidth: '240px',
                border: '1px solid var(--color-gold)'
              }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-gold)' }}>Established 2001</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Over two decades of scholarly dedication in Coimbatore.</div>
              </div>
            </div>

            <div>
              <span className="section-subtitle">Welcome to Heritage</span>
              <h2>A School Built on Strong Foundations</h2>
              <p style={{ marginTop: '1.25rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                At Heritage Higher Secondary School, education is regarded as a lifelong pursuit of intellectual clarity and moral strength. Situated in the heart of RS Puram, our campus offers a calm, disciplined environment where tradition and contemporary learning converge.
              </p>
              <p style={{ marginTop: '1rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                We place equal emphasis on academic thoroughness, personal responsibility, and mutual respect. Our educators serve as mentors, guiding students through structured learning paths that foster self-reliance and intellectual curiosity.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '2rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-burgundy)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-gold)' }} /> Rigorous State Board Curriculum
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-burgundy)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-gold)' }} /> Structured Mentorship
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-burgundy)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-gold)' }} /> Discipline & Value System
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-burgundy)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-gold)' }} /> Active Co-Curricular Life
                </div>
              </div>

              <Link to="/about" className="btn btn-primary">
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy (3 Pillars) */}
      <section className="section-padding bg-stone-light">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Guiding Framework</span>
            <h2>Education with Purpose</h2>
            <p style={{ maxWidth: '650px', margin: '0.75rem auto 0' }}>
              Our educational philosophy rests on three foundational pillars designed to prepare students for both higher academic challenges and responsible life.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {philosophyPillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <div key={index} className="card" style={{ textAlign: 'center', padding: '2.5rem 2rem', borderTop: '3px solid var(--color-gold)' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(107, 38, 53, 0.08)', 
                    color: 'var(--color-burgundy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem'
                  }}>
                    <IconComp size={30} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>
                    {pillar.subtitle}
                  </span>
                  <h3 style={{ margin: '0.4rem 0 1rem', fontSize: '1.6rem' }}>{pillar.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.65' }}>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Excellence & Stages */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Structured Progression</span>
            <h2>A Culture of Academic Excellence</h2>
            <p style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
              From foundational early education to senior secondary specialization, our curriculum maintains systematic rigor, regular assessment, and individual attention.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
            {academicStages.map((stage, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem', position: 'relative' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{stage.icon}</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {stage.subtitle}
                </span>
                <h3 style={{ fontSize: '1.35rem', margin: '0.3rem 0 0.75rem' }}>{stage.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>{stage.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/academics" className="btn btn-secondary">
              Explore Complete Academics Framework <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Highlight Section */}
      <section className="section-padding bg-forest">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle" style={{ color: 'var(--color-gold-light)' }}>Environment for Growth</span>
            <h2 style={{ color: 'var(--color-ivory)' }}>A Campus for Learning and Reflection</h2>
            <p style={{ color: 'rgba(250, 248, 242, 0.85)', maxWidth: '650px', margin: '0.75rem auto 0' }}>
              Designed with classical proportions and modern safety standards, our campus provides spaces that encourage focus, research, physical wellbeing, and artistic expression.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(176,141,87,0.3)', padding: '1.75rem', borderRadius: 'var(--radius-md)' }}>
              <Library size={32} style={{ color: 'var(--color-gold)' }} />
              <h3 style={{ color: 'var(--color-ivory)', marginTop: '1rem', fontSize: '1.4rem' }}>Central Academic Library</h3>
              <p style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Over 15,000 volumes, academic periodicals, reference encyclopedias, and quiet study alcoves.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(176,141,87,0.3)', padding: '1.75rem', borderRadius: 'var(--radius-md)' }}>
              <Microscope size={32} style={{ color: 'var(--color-gold)' }} />
              <h3 style={{ color: 'var(--color-ivory)', marginTop: '1rem', fontSize: '1.4rem' }}>Science & Technology Labs</h3>
              <p style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Fully equipped Physics, Chemistry, Biology, and Computer Science stations for practical experiments.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(176,141,87,0.3)', padding: '1.75rem', borderRadius: 'var(--radius-md)' }}>
              <Trophy size={32} style={{ color: 'var(--color-gold)' }} />
              <h3 style={{ color: 'var(--color-ivory)', marginTop: '1rem', fontSize: '1.4rem' }}>Athletics & Sports Grounds</h3>
              <p style={{ color: 'rgba(250,248,242,0.8)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Spacious basketball court, track area, cricket pitch, and indoor sports room for physical fitness.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/campus" className="btn btn-gold">
              Explore Campus Facilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Heritage Legacy</span>
            <h2>Our Journey</h2>
            <p style={{ maxWidth: '600px', margin: '0.75rem auto 0' }}>
              Key milestones shaping our institutional growth and academic commitment over the past quarter century.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              bottom: 0, 
              left: '50%', 
              width: '2px', 
              backgroundColor: 'var(--color-border)', 
              transform: 'translateX(-50%)' 
            }} className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timelineMilestones.map((m, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                  position: 'relative'
                }}>
                  <div style={{ 
                    width: '45%', 
                    backgroundColor: 'var(--color-white)', 
                    padding: '1.5rem', 
                    borderRadius: 'var(--radius-md)', 
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                    textAlign: idx % 2 === 0 ? 'right' : 'left'
                  }} className="timeline-card">
                    <span style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '1.6rem', 
                      fontWeight: 700, 
                      color: 'var(--color-gold)' 
                    }}>
                      {m.year}
                    </span>
                    <h4 style={{ margin: '0.2rem 0 0.5rem', fontSize: '1.15rem' }}>{m.title}</h4>
                    <p style={{ fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="section-padding bg-stone-light" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ position: 'relative' }}>
                <img 
                  src="/images/principal_portrait.jpg" 
                  alt="Dr. Raghavan Iyer, Principal of Heritage Higher Secondary School" 
                  style={{ 
                    borderRadius: 'var(--radius-md)', 
                    border: '3px solid var(--color-gold)', 
                    boxShadow: 'var(--shadow-lg)' 
                  }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '15px', 
                  left: '15px', 
                  right: '15px', 
                  backgroundColor: 'rgba(36, 74, 58, 0.95)', 
                  color: 'var(--color-ivory)', 
                  padding: '0.85rem 1.25rem', 
                  borderRadius: 'var(--radius-sm)',
                  backdropFilter: 'blur(4px)'
                }}>
                  <h4 style={{ color: 'var(--color-ivory)', fontSize: '1.1rem', margin: 0 }}>Dr. Raghavan Iyer</h4>
                  <p style={{ color: 'var(--color-gold-light)', fontSize: '0.825rem', margin: 0, fontWeight: 500 }}>Principal • M.A., Ph.D. in Education</p>
                </div>
              </div>
            </div>

            <div>
              <span className="section-subtitle">Leadership Message</span>
              <h2>Nurturing Minds, Building Character</h2>
              <div style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-burgundy)', margin: '1.25rem 0', lineHeight: 1.6 }}>
                "Education is not merely about preparing for examinations; it is about cultivating intellectual discipline, moral integrity, and resilience that guide a student throughout life."
              </div>
              <p style={{ lineHeight: '1.7', fontSize: '1rem', marginBottom: '1rem' }}>
                Welcome to Heritage Higher Secondary School. Our institution has stood as a beacon of academic stability and character development in Coimbatore. We believe every student possesses unique potential that thrives when supported by structured guidance and high expectations.
              </p>
              <p style={{ lineHeight: '1.7', fontSize: '1rem', marginBottom: '1.75rem' }}>
                We invite parents and guardians to partner with us in shaping confident, disciplined, and responsible young leaders of tomorrow.
              </p>

              <Link to="/about" className="btn btn-primary">
                Read Full Message & Vision <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Community Perspectives</span>
            <h2>Voices from Our School Community</h2>
            <p style={{ maxWidth: '600px', margin: '0.75rem auto 0' }}>
              Hear from parents who have experienced the academic discipline and caring environment at Heritage.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {parentTestimonials.map((t, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.25rem' }}>
                <div>
                  <div style={{ color: 'var(--color-gold)', fontSize: '2rem', fontFamily: 'serif', lineHeight: 1, marginBottom: '0.75rem' }}>“</div>
                  <p style={{ fontStyle: 'italic', fontSize: '0.98rem', lineHeight: '1.65', color: 'var(--color-charcoal)' }}>
                    {t.quote}
                  </p>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <h4 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--color-burgundy-dark)' }}>{t.author}</h4>
                  <span style={{ fontSize: '0.825rem', color: 'var(--color-charcoal-muted)' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="section-padding bg-stone-light">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Campus Updates</span>
            <h2>School News & Announcements</h2>
            <p style={{ maxWidth: '600px', margin: '0.75rem auto 0' }}>
              Stay informed about upcoming academic exhibitions, athletic meets, and campus events.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {newsItems.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: 'var(--color-burgundy)', 
                    backgroundColor: 'rgba(107, 38, 53, 0.08)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} /> {item.date}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0 0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
                <div style={{ marginTop: '1.25rem' }}>
                  <Link to="/contact" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-burgundy)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    Read Announcement <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Call to Action Banner */}
      <section className="section-padding bg-burgundy" style={{ borderTop: '4px solid var(--color-gold)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            color: 'var(--color-gold)',
            marginBottom: '0.75rem',
            display: 'inline-block'
          }}>
            Admissions Open for Academic Year 2026–2027
          </span>
          <h2 style={{ color: 'var(--color-ivory)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem' }}>
            Begin Your Child's Journey with Heritage
          </h2>
          <p style={{ color: 'rgba(250, 248, 242, 0.9)', maxWidth: '650px', margin: '0 auto 2.25rem', fontSize: '1.1rem' }}>
            Learn more about our academic programs, admissions criteria, campus visits, and school community in RS Puram, Coimbatore.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-gold">
              Admissions Enquiry Form
            </Link>
            <Link to="/contact" className="btn btn-outline-gold">
              Schedule a Campus Visit
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-card {
            width: 100% !important;
            text-align: left !important;
            margin-left: 45px;
          }
        }
      `}</style>
    </div>
  );
}
