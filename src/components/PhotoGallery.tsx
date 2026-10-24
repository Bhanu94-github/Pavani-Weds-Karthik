import React, { useState } from 'react';
import { Camera, X, Sparkles, ZoomIn } from 'lucide-react';
import { GalleryPhoto } from '../types/wedding';

interface Props {
  photos: GalleryPhoto[];
  title: string;
  subtitle: string;
  noticeIfEmpty?: string;
}

export const PhotoGallery: React.FC<Props> = ({ photos, title, subtitle, noticeIfEmpty }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  if (!photos || photos.length === 0) {
    return (
      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-header-block">
          <span className="eyebrow-text">Memories</span>
          <h2 id="gallery-title" className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="gallery-empty-notice">
          <Camera size={32} className="gold-ornament" />
          <p>{noticeIfEmpty || 'Photographs will be uploaded here shortly.'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="section-header-block">
        <span className="eyebrow-text">Visual Memories</span>
        <h2 id="gallery-title" className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>

      <div className="gallery-grid">
        {photos.map(photo => (
          <figure
            key={photo.id}
            className={`gallery-item ${photo.aspectRatio}`}
            onClick={() => setSelectedPhoto(photo)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPhoto(photo);
              }
            }}
            aria-label={`View ${photo.title}`}
          >
            <div className="gallery-image-wrapper">
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <ZoomIn size={24} className="zoom-icon" />
                <span className="gallery-overlay-title">{photo.title}</span>
                {photo.caption && <span className="gallery-overlay-sub">{photo.caption}</span>}
              </div>
            </div>
            <figcaption className="gallery-caption">
              <span className="caption-title">{photo.title}</span>
              {photo.isPlaceholder && (
                <span className="placeholder-tag">
                  <Sparkles size={11} /> Ready for Couple Photos
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo view"
            >
              <X size={22} />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="lightbox-img"
            />
            <div className="lightbox-details">
              <h4 className="lightbox-title">{selectedPhoto.title}</h4>
              {selectedPhoto.caption && <p className="lightbox-caption">{selectedPhoto.caption}</p>}
            </div>
          </div>
        </div>
      )}

      <div className="botanical-divider" aria-hidden="true">
        <span>✿</span>
      </div>

      <style>{`
        .gallery-section {
          margin: 3.5rem 0;
          text-align: center;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 960px;
          margin: 2rem auto;
        }
        .gallery-item {
          background: var(--paper-pure);
          border: 1px solid var(--hairline);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
          display: flex;
          flex-direction: column;
        }
        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--gold);
        }
        .gallery-image-wrapper {
          position: relative;
          overflow: hidden;
          background: var(--paper-cream);
          aspect-ratio: 4 / 3;
        }
        .gallery-item.portrait .gallery-image-wrapper {
          aspect-ratio: 3 / 4;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-smooth);
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(77, 19, 32, 0.85), rgba(77, 19, 32, 0.2));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          opacity: 0;
          transition: opacity var(--transition-fast);
          padding: 1rem;
          color: var(--paper-pure);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .zoom-icon {
          color: var(--gold-light);
          margin-bottom: 0.3rem;
        }
        .gallery-overlay-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
        }
        .gallery-overlay-sub {
          font-size: 0.82rem;
          color: var(--blush);
        }
        .gallery-caption {
          padding: 0.8rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          background: var(--paper-pure);
          border-top: 1px solid var(--hairline);
        }
        .caption-title {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1rem;
          color: var(--wine);
        }
        .placeholder-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.72rem;
          color: var(--gold-dark);
          background: var(--paper-cream);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          font-weight: 600;
        }
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(40, 9, 16, 0.9);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          backdrop-filter: blur(4px);
        }
        .lightbox-content {
          position: relative;
          max-width: 800px;
          max-height: 90vh;
          background: var(--paper-pure);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 0.8rem;
          right: 0.8rem;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }
        .lightbox-img {
          width: 100%;
          max-height: 70vh;
          object-fit: contain;
          background: #000;
        }
        .lightbox-details {
          padding: 1rem 1.4rem;
          text-align: left;
          background: var(--paper-cream);
        }
        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--wine);
        }
        .lightbox-caption {
          font-size: 0.9rem;
          color: var(--ink-light);
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
        }
      `}</style>
    </section>
  );
};
