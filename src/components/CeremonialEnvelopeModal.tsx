import React from 'react';
import confetti from 'canvas-confetti';
import { MailOpen, Sparkles } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';

interface Props {
  config: WeddingConfig;
  isOpen: boolean;
  onOpen: () => void;
}

export const CeremonialEnvelopeModal: React.FC<Props> = ({ config, isOpen, onOpen }) => {
  if (!isOpen) return null;

  const handleOpenInvitation = () => {
    confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.55 },
      colors: ['#D4AF37', '#7A1A32', '#FFFDF9', '#E5C378', '#133E2B']
    });

    onOpen();
  };

  return (
    <div className="royal-envelope-overlay" role="dialog" aria-modal="true" aria-label="Royal Wedding Invitation">
      <div className="royal-envelope-card">
        <div className="envelope-shloka">॥ శ్రీ లక్ష్మీ ప్రసన్నా ॥</div>

        <div className="metallic-wax-seal" aria-hidden="true">
          <span className="seal-monogram">PK</span>
        </div>

        <span className="envelope-royal-kicker">Auspicious Wedding Invitation</span>

        <h2 className="envelope-names-display">
          <span className="gold-shimmer-text">{config.couple.bride.fullName}</span>
          <span className="envelope-calligraphy-weds">weds</span>
          <span className="gold-shimmer-text">{config.couple.groom.fullName}</span>
        </h2>

        <div className="envelope-summary-snippet">
          <p className="summary-date-text">{config.mainWedding.displayDate}</p>
          <p className="summary-venue-text">{config.mainWedding.venueName} • Nizamabad</p>
        </div>

        <button
          type="button"
          className="btn-royal-gold envelope-unlock-btn"
          onClick={handleOpenInvitation}
          autoFocus
        >
          <MailOpen size={20} />
          <span>Open Wedding Invitation</span>
          <Sparkles size={18} />
        </button>

        <p className="envelope-sub-hint">Tap to view the sacred wedding ceremonies</p>
      </div>

      <style>{`
        .royal-envelope-overlay {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 50% 40%, rgba(61, 8, 20, 0.96), rgba(30, 4, 10, 0.99));
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          backdrop-filter: blur(8px);
          animation: overlayFadeIn 0.35s ease-out;
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .royal-envelope-card {
          position: relative;
          background: var(--silk-ivory);
          border: 2px solid var(--gold-metallic);
          border-radius: var(--radius-lg);
          padding: clamp(2.2rem, 5vw, 3.5rem) clamp(1.6rem, 4.5vw, 3rem);
          max-width: 520px;
          width: 100%;
          text-align: center;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 45px rgba(212, 175, 55, 0.35);
        }
        .envelope-shloka {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--gold-dark);
          letter-spacing: 0.1em;
          margin-bottom: 1.2rem;
        }
        .metallic-wax-seal {
          width: 82px;
          height: 82px;
          margin: 0 auto 1.4rem;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #A62442, #5C1225);
          border: 2.5px solid var(--gold-metallic);
          box-shadow: 0 8px 24px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .seal-monogram {
          color: var(--gold-bright);
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));
          user-select: none;
        }
        .envelope-royal-kicker {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.24em;
          color: var(--gold-dark);
          font-weight: 700;
          display: block;
          margin-bottom: 0.6rem;
        }
        .envelope-names-display {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4.5vw, 2.5rem);
          color: var(--royal-wine);
          line-height: 1.2;
          margin-bottom: 1.4rem;
        }
        .envelope-calligraphy-weds {
          display: block;
          font-family: var(--font-script);
          font-size: 2rem;
          color: var(--gold-dark);
          margin: 0.2rem 0;
          line-height: 1;
        }
        .envelope-summary-snippet {
          background: rgba(212, 175, 55, 0.08);
          border: 1px dashed var(--hairline-gold);
          border-radius: var(--radius-sm);
          padding: 0.9rem 1.1rem;
          margin-bottom: 1.8rem;
        }
        .summary-date-text {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--royal-wine);
          font-size: 1.05rem;
        }
        .summary-venue-text {
          font-size: 0.9rem;
          color: var(--ink-secondary);
          margin-top: 0.25rem;
        }
        .envelope-unlock-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.05rem;
        }
        .envelope-sub-hint {
          font-size: 0.82rem;
          color: var(--ink-muted);
          margin-top: 1.1rem;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
