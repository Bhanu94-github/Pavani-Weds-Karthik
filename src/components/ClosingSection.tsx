import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';

interface Props {
  config: WeddingConfig;
}

export const ClosingSection: React.FC<Props> = ({ config }) => {
  const { closing, couple } = config;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="closing-grand-section" aria-labelledby="closing-title">
      <div className="royal-divider" aria-hidden="true">
        <span className="royal-divider-symbol">❖</span>
      </div>

      <div className="closing-parchment-box">
        <span className="eyebrow-tag">Divine Blessings</span>
        <h2 id="closing-title" className="section-heading-luxury">{closing.title}</h2>
        <p className="closing-message-narrative">{closing.message}</p>

        <div className="royal-signature-area">
          <p className="signature-couple-text">
            <span>{couple.bride.displayName}</span>
            <span className="signature-amp">&amp;</span>
            <span>{couple.groom.displayName}</span>
          </p>
          <p className="signature-families-label">{closing.gratitudeNote}</p>
        </div>

        <button
          type="button"
          className="scroll-top-pill"
          onClick={scrollToTop}
          aria-label="Back to top of wedding invitation"
        >
          <ArrowUp size={15} />
          <span>Back to Top</span>
        </button>

        <div className="royal-copyright-tag">
          <p>
            With divine blessings and affection <Heart size={13} className="heart-inline-icon" /> Palivela Family
          </p>
          <small className="wedding-date-stamp">20 November 2026 • Sravya Gardens, Nizamabad</small>
        </div>
      </div>

      <style>{`
        .closing-grand-section {
          text-align: center;
          margin-top: 4rem;
        }
        .closing-parchment-box {
          max-width: 720px;
          margin: 0 auto;
        }
        .closing-message-narrative {
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--ink-primary);
          margin-bottom: 2rem;
        }
        .royal-signature-area {
          margin: 2.2rem 0;
        }
        .signature-couple-text {
          font-family: var(--font-script);
          font-size: clamp(2.5rem, 6.5vw, 4.2rem);
          color: var(--royal-wine);
          line-height: 1.1;
        }
        .signature-amp {
          display: inline-block;
          font-family: var(--font-serif);
          font-size: 0.55em;
          margin: 0 0.35em;
          vertical-align: 0.15em;
          color: var(--gold-dark);
        }
        .signature-families-label {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--gold-dark);
          margin-top: 0.5rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .scroll-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: var(--silk-cream);
          border: 1px solid var(--hairline-gold);
          border-radius: var(--radius-full);
          padding: 0.5rem 1.2rem;
          font-family: var(--font-sans);
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--ink-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 1.8rem;
        }
        .scroll-top-pill:hover {
          border-color: var(--gold-metallic);
          color: var(--royal-wine);
          background: var(--silk-pure);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
        }
        .royal-copyright-tag {
          margin-top: 2.8rem;
          padding-top: 1.8rem;
          border-top: 1px dashed var(--hairline-gold);
          font-size: 0.88rem;
          color: var(--ink-muted);
        }
        .heart-inline-icon {
          color: var(--royal-wine);
          display: inline;
          vertical-align: middle;
        }
        .wedding-date-stamp {
          display: block;
          font-size: 0.8rem;
          margin-top: 0.4rem;
          color: var(--gold-dark);
          font-weight: 600;
          letter-spacing: 0.05em;
        }
      `}</style>
    </footer>
  );
};
