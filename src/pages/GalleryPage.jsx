import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LightboxModal from '../components/LightboxModal';
import { Eye, ArrowRight } from 'lucide-react';

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery | Heritage Higher Secondary School";
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const categories = ['All', 'Campus', 'Academics', 'Sports', 'Events', 'Arts', 'Student Life'];

  const galleryItems = [
    {
      id: 1,
      title: 'Heritage School Main Building',
      category: 'Campus',
      src: '/images/hero_school_building.jpg',
      alt: 'Colonial academic building facade with lush lawn'
    },
    {
      id: 2,
      title: 'Central Academic Library Study Hall',
      category: 'Campus',
      src: '/images/school_library.jpg',
      alt: 'Students reading at wooden study tables in classic library'
    },
    {
      id: 3,
      title: 'Principal Dr. Raghavan Iyer in Library',
      category: 'Academics',
      src: '/images/principal_portrait.jpg',
      alt: 'School Principal in academic library setting'
    },
    {
      id: 4,
      title: 'Science Practical Laboratory Session',
      category: 'Academics',
      src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
      alt: 'High school students conducting chemistry experiment'
    },
    {
      id: 5,
      title: 'Central Computer Research Lab',
      category: 'Academics',
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
      alt: 'Students working at desktop computers'
    },
    {
      id: 6,
      title: 'Inter-House Basketball Tournament',
      category: 'Sports',
      src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
      alt: 'Basketball match on outdoor court'
    },
    {
      id: 7,
      title: 'Track & Field Athletics Training',
      category: 'Sports',
      src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
      alt: 'Student athletes on track during morning practice'
    },
    {
      id: 8,
      title: 'Annual Day Cultural Auditorium Performance',
      category: 'Events',
      src: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1000&q=80',
      alt: 'Stage performance during school annual function'
    },
    {
      id: 9,
      title: 'Fine Arts Painting & Sculpture Studio',
      category: 'Arts',
      src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80',
      alt: 'Students practicing artwork in studio'
    },
    {
      id: 10,
      title: 'Classical Music Choir Practice',
      category: 'Arts',
      src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
      alt: 'Music room session with Indian instruments'
    },
    {
      id: 11,
      title: 'Student Debate Society Session',
      category: 'Student Life',
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
      alt: 'Students engaged in classroom debate'
    },
    {
      id: 12,
      title: 'Green Earth Eco Club Tree Plantation',
      category: 'Student Life',
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
      alt: 'Student volunteers planting saplings on campus'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Gallery</span>
          </div>
          <h1>Campus & Life Photo Gallery</h1>
          <p>
            A visual overview of academic life, laboratory research, athletic events, and campus architecture.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-ivory">
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            flexWrap: 'wrap', 
            marginBottom: '3rem' 
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.6rem 1.25rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  fontWeight: activeCategory === cat ? '700' : '500',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: activeCategory === cat ? 'var(--color-burgundy)' : 'var(--color-white)',
                  color: activeCategory === cat ? 'var(--color-ivory)' : 'var(--color-charcoal)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.75rem' 
          }}>
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(index)}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-white)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-normal)'
                }}
                className="gallery-card"
              >
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform var(--transition-normal)'
                    }} 
                    className="gallery-img"
                  />
                  <div className="gallery-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(107, 38, 53, 0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-ivory)',
                    opacity: 0,
                    transition: 'opacity var(--transition-fast)'
                  }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                      <Eye size={18} /> Expand Image
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1rem 1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', margin: '0.2rem 0 0', color: 'var(--color-burgundy-dark)' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {lightboxIndex >= 0 && (
            <LightboxModal 
              isOpen={lightboxIndex >= 0}
              onClose={closeLightbox}
              images={filteredItems}
              currentIndex={lightboxIndex}
              onNext={nextImage}
              onPrev={prevImage}
            />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-burgundy">
        <div className="container text-center">
          <h2>Visit Our Campus in Person</h2>
          <p style={{ color: 'rgba(250,248,242,0.9)', maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Schedule an in-person walkthrough of our library, classrooms, and sports facilities in RS Puram.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Schedule a Guided Tour <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
