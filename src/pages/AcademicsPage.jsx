import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Award, FileText, ArrowRight, UserCheck, GraduationCap, Compass } from 'lucide-react';

export default function AcademicsPage() {
  useEffect(() => {
    document.title = "Academics | Heritage Higher Secondary School";
  }, []);

  const stages = [
    {
      title: 'Foundation Years (Pre-Primary)',
      subtitle: 'LKG & UKG',
      focus: 'Foundational literacy, phonics, motor skills, social habits, structured play, and language development.',
      highlights: ['Activity-based learning', 'Storytelling & phonics focus', 'Safe play facilities', 'Gentle social integration']
    },
    {
      title: 'Primary School',
      subtitle: 'Grades 1 – 5',
      focus: 'Core literacy in English & Tamil, basic mathematics, environmental science, art, and reading discipline.',
      highlights: ['Structured reading hours', 'Math lab manipulative exercises', 'Value education modules', 'Computer familiarity']
    },
    {
      title: 'Middle School',
      subtitle: 'Grades 6 – 8',
      focus: 'Expanded science subjects (Physics, Chemistry, Biology), social sciences, algebra, geometry, and Hindi/Third language.',
      highlights: ['Hands-on laboratory introductions', 'Project-based humanities research', 'Scientific questioning', 'Inter-house academic quizzes']
    },
    {
      title: 'Secondary School',
      subtitle: 'Grades 9 – 10',
      focus: 'Rigorous state-board syllabus mastery, board exam orientation, structured revision, and weekly testing.',
      highlights: ['State board curriculum alignment', 'Comprehensive mock examinations', 'Individual subject mentoring', 'Time management workshops']
    },
    {
      title: 'Higher Secondary',
      subtitle: 'Grades 11 – 12',
      focus: 'Specialized academic streams preparing for board excellence and competitive higher education entrance examinations.',
      highlights: [
        'Stream A: Mathematics, Physics, Chemistry, Biology / Computer Science',
        'Stream B: Accountancy, Commerce, Economics, Business Maths / Computer Applications',
        'Intensive entrance test prep guidance',
        'One-on-one career counseling'
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Academics</span>
          </div>
          <h1>Academic Programs & Pedagogy</h1>
          <p>
            A state-board and higher-secondary focused academic model delivering structured learning, clear metrics, and disciplined mentorship.
          </p>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Scholarly Standard</span>
            <h2>Our Educational Pedagogy</h2>
            <p style={{ maxWidth: '720px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              At Heritage Higher Secondary School, academic excellence is achieved through structured subject progression, qualified faculty guidance, and regular transparent evaluation. We believe in building deep conceptual clarity rather than superficial memorization.
            </p>
          </div>

          {/* Academic Stages Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
            {stages.map((stage, idx) => (
              <div key={idx} className="card" style={{ borderLeft: '5px solid var(--color-burgundy)', padding: '2.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {stage.subtitle}
                    </span>
                    <h3 style={{ fontSize: '1.6rem', marginTop: '0.2rem', color: 'var(--color-burgundy-dark)' }}>{stage.title}</h3>
                  </div>
                  <span style={{ 
                    backgroundColor: 'rgba(107, 38, 53, 0.08)', 
                    color: 'var(--color-burgundy)', 
                    padding: '0.35rem 0.85rem', 
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    Stage 0{idx + 1}
                  </span>
                </div>

                <p style={{ margin: '1rem 0 1.25rem', fontSize: '1rem', lineHeight: 1.6, color: 'var(--color-charcoal)' }}>
                  {stage.focus}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                  {stage.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-charcoal-muted)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & Assessment Framework */}
      <section className="section-padding bg-stone-light">
        <div className="container">
          <div className="heading-wrapper text-center">
            <span className="section-subtitle">Quality & Evaluation</span>
            <h2>Teaching Approach & Assessment</h2>
            <p style={{ maxWidth: '650px', margin: '0.75rem auto 0' }}>
              Our methodology ensures continuous monitoring of student progress and early academic intervention.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <BookOpen size={32} style={{ color: 'var(--color-burgundy)' }} />
              <h3 style={{ fontSize: '1.4rem', margin: '1rem 0 0.5rem' }}>Structured Classroom Teaching</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                Daily structured lesson plans, blackboard demonstrations, interactive problem-solving, and clear homework schedules across all subjects.
              </p>
            </div>

            <div className="card">
              <FileText size={32} style={{ color: 'var(--color-burgundy)' }} />
              <h3 style={{ fontSize: '1.4rem', margin: '1rem 0 0.5rem' }}>Continuous Evaluation</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                Unit tests, monthly progress assessments, term examinations, and comprehensive answer-sheet reviews shared directly with parents.
              </p>
            </div>

            <div className="card">
              <UserCheck size={32} style={{ color: 'var(--color-burgundy)' }} />
              <h3 style={{ fontSize: '1.4rem', margin: '1rem 0 0.5rem' }}>Academic Remedial Support</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                After-school study assistance and remedial mentoring sessions for students needing additional guidance in complex subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Higher Education & Career Guidance */}
      <section className="section-padding bg-forest">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-subtitle" style={{ color: 'var(--color-gold-light)' }}>Future Preparation</span>
              <h2 style={{ color: 'var(--color-ivory)' }}>Higher Education & Career Counseling</h2>
              <p style={{ color: 'rgba(250,248,242,0.88)', lineHeight: '1.7', fontSize: '1.05rem', margin: '1.25rem 0' }}>
                For Grade 11 and 12 students, Heritage provides structured counseling regarding university applications, engineering and medical entrance examinations, chartered accountancy foundations, and state university degree choices.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(250,248,242,0.9)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <GraduationCap size={20} style={{ color: 'var(--color-gold)' }} />
                  Competitive entrance examination orientation sessions
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Compass size={20} style={{ color: 'var(--color-gold)' }} />
                  Individual counseling sessions for course selection
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Award size={20} style={{ color: 'var(--color-gold)' }} />
                  Alumni interaction seminars and guest lectures
                </li>
              </ul>
            </div>

            <div className="card" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid var(--color-gold)', color: 'var(--color-ivory)', padding: '2.5rem' }}>
              <h3 style={{ color: 'var(--color-gold)', fontSize: '1.6rem', marginBottom: '1rem' }}>Academic Stream Selection</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(250,248,242,0.85)', marginBottom: '1.5rem' }}>
                Offered at Grade 11 stage based on Grade 10 performance and student interest:
              </p>
              <div style={{ padding: '0.85rem', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                <strong>Bio-Maths / CS:</strong> Physics, Chemistry, Mathematics, Biology / CS
              </div>
              <div style={{ padding: '0.85rem', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                <strong>Commerce & Accountancy:</strong> Commerce, Accountancy, Economics, Business Maths / Computer Applications
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-burgundy">
        <div className="container text-center">
          <h2>Enquire About Academics & Admission</h2>
          <p style={{ color: 'rgba(250,248,242,0.9)', maxWidth: '600px', margin: '1rem auto 2rem' }}>
            We invite prospective parents to consult our admissions desk for detailed syllabus and age criteria.
          </p>
          <Link to="/admissions" className="btn btn-gold">
            Admissions Enquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
