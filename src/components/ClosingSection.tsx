import React from 'react';
import { Heart, ArrowUp, MailOpen } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';
import { LotusGarlandDivider } from './RoyalOrnaments';

interface Props {
  config: WeddingConfig;
  onReopenEnvelope?: () => void;
}

export const ClosingSection: React.FC<Props> = ({ config, onReopenEnvelope }) => {
  const { closing, couple } = config;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="closing-grand-section" aria-labelledby="closing-title">
      <LotusGarlandDivider className="closing-top-garland" />

      <div className="closing-parchment-box">
        {/* Sacred Mangalam Shloka */}
        <div className="closing-shloka-banner" aria-label="Auspicious Blessing Shloka">
          <span className="closing-telugu-shloka">॥ మంగళం దివ్య మంగళం • కల్యాణమస్తు ॥</span>
        </div>

        <span className="eyebrow-tag">Divine Blessings &amp; Gratitude</span>
        <h2 id="closing-title" className="section-heading-luxury">{closing.title}</h2>
        <p className="closing-message-narrative">{closing.message}</p>

        <div className="royal-signature-area">
          <p className="signature-couple-text">
            <span>{couple.bride.displayName}</span>
            <span className="signature-amp">&amp;</span>
            <span>{couple.groom.displayName}</span>
          </p>
          <p className="signature-families-label">
            Smt. Gaddaguti Pushpa &amp; Sri Gaddaguti Veeraswamy
          </p>
          <span className="signature-sub-label">
            &amp; The Gaddaguti &amp; Palivela Families
          </span>
        </div>

        <div className="closing-action-buttons">
          {onReopenEnvelope && (
            <button
              type="button"
              className="reopen-folio-pill"
              onClick={onReopenEnvelope}
              aria-label="Reopen wedding invitation envelope folio"
            >
              <MailOpen size={16} />
              <span>View Royal Folio</span>
            </button>
          )}

          <button
            type="button"
            className="scroll-top-pill"
            onClick={scrollToTop}
            aria-label="Back to top of wedding invitation"
          >
            <ArrowUp size={15} />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="royal-copyright-tag">
          <p>
            With divine blessings and affection <Heart size={13} className="heart-inline-icon" /> Palivela &amp; Gaddaguti Family
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
        .closing-shloka-banner {
          margin-bottom: 1.4rem;
        }
        .closing-telugu-shloka {
          font-family: var(--font-telugu);
          font-size: clamp(1.15rem, 2.4vw, 1.35rem);
          font-weight: 700;
          color: var(--gold-dark);
          letter-spacing: 0.06em;
          text-shadow: 0 1px 2px rgba(212, 175, 55, 0.35);
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
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--royal-wine-deep);
          margin-top: 0.5rem;
          letter-spacing: 0.04em;
        }
        .signature-sub-label {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--gold-dark);
          display: block;
          margin-top: 0.2rem;
          letter-spacing: 0.05em;
        }
        .closing-action-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .reopen-folio-pill, .scroll-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--silk-cream);
          border: 1.5px solid var(--hairline-gold);
          border-radius: var(--radius-full);
          padding: 0.6rem 1.4rem;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--royal-wine);
          cursor: pointer;
          transition: all 0.2s var(--ease-royal);
          box-shadow: 0 2px 8px rgba(92, 18, 37, 0.04);
        }
        .reopen-folio-pill:hover, .scroll-top-pill:hover {
          border-color: var(--gold-metallic);
          background: var(--silk-pure);
          color: var(--royal-wine-rich);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(212, 175, 55, 0.25);
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
