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
    // Launch festive confetti
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#C5A059', '#70283D', '#E8B4B8', '#FAF5EE', '#405746']
    });

    onOpen();
  };

  return (
    <div className="envelope-overlay" role="dialog" aria-modal="true" aria-label="Wedding Invitation Envelope">
      <div className="envelope-card">
        <div className="wax-seal" aria-hidden="true">
          <span>PK</span>
        </div>

        <span className="envelope-eyebrow">Auspicious Wedding Invitation</span>

        <h2 className="envelope-couple-names">
          <span>{config.couple.bride.fullName}</span>
          <span className="envelope-weds">weds</span>
          <span>{config.couple.groom.fullName}</span>
        </h2>

        <div className="envelope-meta-snippet">
          <p className="envelope-date">{config.mainWedding.displayDate}</p>
          <p className="envelope-venue">{config.mainWedding.venueName} • Nizamabad</p>
        </div>

        <button
          type="button"
          className="btn-gold envelope-open-btn"
          onClick={handleOpenInvitation}
          autoFocus
        >
          <MailOpen size={18} />
          <span>Open Invitation</span>
          <Sparkles size={16} />
        </button>

        <p className="envelope-touch-note">Tap to view the complete wedding ceremonies</p>
      </div>

      <style>{`
        .envelope-eyebrow {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: var(--wine);
          font-weight: 700;
          display: block;
          margin-bottom: 0.6rem;
        }
        .envelope-couple-names {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 4.5vw, 2.5rem);
          color: var(--wine-dark);
          line-height: 1.15;
          margin-bottom: 1.2rem;
        }
        .envelope-weds {
          display: block;
          font-family: var(--font-script);
          font-size: 1.8rem;
          color: var(--gold-dark);
          margin: 0.2rem 0;
        }
        .envelope-meta-snippet {
          background: var(--paper-pure);
          border: 1px dashed var(--hairline);
          border-radius: var(--radius-sm);
          padding: 0.8rem 1rem;
          margin-bottom: 1.8rem;
        }
        .envelope-date {
          font-weight: 700;
          color: var(--wine);
          font-size: 1rem;
        }
        .envelope-venue {
          font-size: 0.88rem;
          color: var(--ink-light);
          margin-top: 0.2rem;
        }
        .envelope-open-btn {
          width: 100%;
          padding: 0.95rem;
          font-size: 1.05rem;
          letter-spacing: 0.04em;
        }
        .envelope-touch-note {
          font-size: 0.8rem;
          color: var(--ink-muted);
          margin-top: 1rem;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
