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
      <div className="botanical-divider" aria-hidden="true">
        <span>❧</span>
      </div>

      <div className="closing-content-box">
        <span className="closing-kicker">Auspicious Blessings</span>
        <h2 id="closing-title" className="closing-title">{closing.title}</h2>
        <p className="closing-message-text">{closing.message}</p>

        <div className="couple-signature-block">
          <p className="signature-names">
            <span>{couple.bride.displayName}</span>
            <span className="signature-ampersand">&amp;</span>
            <span>{couple.groom.displayName}</span>
          </p>
          <p className="gratitude-note">{closing.gratitudeNote}</p>
        </div>

        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top of wedding invitation"
        >
          <ArrowUp size={15} />
          <span>Back to Top</span>
        </button>

        <div className="footer-copyright">
          <p>
            Celebrated with <Heart size={13} className="text-wine-inline" /> by the Palivela Family
          </p>
          <small className="date-tag">20 November 2026 • Nizamabad, Telangana</small>
        </div>
      </div>

      <style>{`
        .closing-grand-section {
          text-align: center;
          margin-top: 4rem;
          padding-top: 1rem;
        }
        .closing-content-box {
          max-width: 680px;
          margin: 0 auto;
        }
        .closing-kicker {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--gold-dark);
          font-weight: 700;
          display: block;
          margin-bottom: 0.4rem;
        }
        .closing-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          color: var(--wine);
          margin-bottom: 1rem;
        }
        .closing-message-text {
          font-size: 1.08rem;
          line-height: 1.7;
          color: var(--ink);
          margin-bottom: 2rem;
        }
        .couple-signature-block {
          margin: 2rem 0;
        }
        .signature-names {
          font-family: var(--font-script);
          font-size: clamp(2.4rem, 6vw, 3.8rem);
          color: var(--wine);
          line-height: 1.1;
        }
        .signature-ampersand {
          display: inline-block;
          font-family: var(--font-serif);
          font-size: 0.55em;
          margin: 0 0.3em;
          vertical-align: 0.15em;
          color: var(--gold-dark);
        }
        .gratitude-note {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--ink-light);
          margin-top: 0.5rem;
          letter-spacing: 0.05em;
        }
        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: 1px solid var(--hairline);
          border-radius: var(--radius-full);
          padding: 0.45rem 1.1rem;
          font-family: var(--font-sans);
          font-size: 0.84rem;
          color: var(--ink-light);
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-top: 1.5rem;
        }
        .back-to-top-btn:hover {
          border-color: var(--gold);
          color: var(--wine);
          background: var(--paper-cream);
        }
        .footer-copyright {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--hairline);
          font-size: 0.85rem;
          color: var(--ink-muted);
        }
        .text-wine-inline {
          color: var(--wine);
          display: inline;
          vertical-align: middle;
        }
        .date-tag {
          display: block;
          font-size: 0.78rem;
          margin-top: 0.3rem;
          color: var(--gold-dark);
        }
      `}</style>
    </footer>
  );
};
