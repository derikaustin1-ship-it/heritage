import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, images, currentIndex, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <div 
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="lightbox-btn lightbox-close" 
          onClick={onClose} 
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {images.length > 1 && (
          <>
            <button 
              className="lightbox-btn lightbox-prev" 
              onClick={onPrev} 
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              className="lightbox-btn lightbox-next" 
              onClick={onNext} 
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        <img 
          src={currentItem.url || currentItem.src} 
          alt={currentItem.title || currentItem.alt || "School gallery photo"} 
          className="lightbox-img" 
        />

        {(currentItem.title || currentItem.category) && (
          <div className="lightbox-caption">
            <strong>{currentItem.title}</strong>
            {currentItem.category && (
              <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {currentItem.category}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
