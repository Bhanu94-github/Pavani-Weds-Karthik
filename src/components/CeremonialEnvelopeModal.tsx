import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MailOpen, Sparkles } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';
import { GaneshaIcon } from './TraditionalIcons';
import { RoyalCornerBracket } from './RoyalOrnaments';

interface Props {
  config: WeddingConfig;
  isOpen: boolean;
  onOpen: () => void;
}

export const CeremonialEnvelopeModal: React.FC<Props> = ({ config, isOpen, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  if (!isOpen) return null;

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Grand royal celebratory burst: gold metallic zari, crimson rose, and emerald confetti
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.55 },
      colors: ['#D4AF37', '#7A1A32', '#FFFDF9', '#E5C378', '#133E2B', '#F5E8C9']
    });

    // Secondary delayed shower
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 70,
        origin: { x: 0.2, y: 0.6 },
        colors: ['#D4AF37', '#FFF2CC', '#E8A5A5']
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 70,
        origin: { x: 0.8, y: 0.6 },
        colors: ['#D4AF37', '#FFF2CC', '#E8A5A5']
      });
    }, 250);

    setTimeout(() => {
      onOpen();
    }, 850);
  };

  return (
    <div
      className={`royal-unboxing-overlay ${isOpening ? 'is-unfolding' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Royal Wedding Invitation Box"
    >
      <div className={`royal-unboxing-card ${isOpening ? 'card-opening-motion' : ''}`}>
        {/* Envelope Folio 3D Flap */}
        <div className="folio-top-flap" aria-hidden="true">
          <div className="flap-gold-crease"></div>
        </div>

        {/* 4 Corner Zari Filigree Brackets */}
        <RoyalCornerBracket position="top-left" size={62} />
        <RoyalCornerBracket position="top-right" size={62} />
        <RoyalCornerBracket position="bottom-left" size={62} />
        <RoyalCornerBracket position="bottom-right" size={62} />

        {/* Ceremonial Golden Ribbon Cross */}
        <div className="envelope-ribbon-horizontal" aria-hidden="true"></div>
        <div className="envelope-ribbon-vertical" aria-hidden="true"></div>

        <div className="unboxing-card-content">
          {/* Sacred Ganesha Invocation */}
          <div className="ganesha-crest-box">
            <GaneshaIcon size={64} className="ganesha-gold-emblem" />
            <span className="shloka-gold-text">॥ శ్రీ గణేశాయ నమః ॥</span>
          </div>

          {/* 3D Couture Wax Seal with Monogram */}
          <div
            className="royal-3d-wax-seal-wrapper"
            onClick={handleOpenInvitation}
            role="button"
            tabIndex={0}
            title="Tap to unseal the royal invitation"
          >
            <div className="wax-seal-halo-pulse" aria-hidden="true"></div>
            <div className="wax-seal-tassels" aria-hidden="true">
              <span className="tassel left"></span>
              <span className="tassel right"></span>
            </div>
            <div className="royal-3d-wax-seal">
              <span className="wax-seal-outer-rim" aria-hidden="true"></span>
              <span className="wax-monogram">PK</span>
            </div>
          </div>

          <span className="royal-invitation-kicker">ROYAL WEDDING INVITATION</span>

          <h2 className="unboxing-couple-names">
            <span className="couple-name-shimmer">{config.couple.bride.fullName}</span>
            <span className="unboxing-ampersand">&amp;</span>
            <span className="couple-name-shimmer">{config.couple.groom.fullName}</span>
          </h2>

          <p className="unboxing-telugu-script">
            పావని కల్యాణి &amp; కార్తీక్ రెడ్డి
          </p>

          <div className="unboxing-parents-box">
            <p className="unboxing-parents-lineage">
              D/o Smt. Gaddaguti Pushpa &amp; Sri Gaddaguti Veeraswamy
            </p>
            <small className="unboxing-parents-telugu">
              గడ్డగూటి వారి వివాహ ఆహ్వాన పత్రిక
            </small>
          </div>

          <div className="unboxing-date-badge">
            <p className="unboxing-date-string">{config.mainWedding.displayDate}</p>
            <p className="unboxing-venue-string">{config.mainWedding.venueName} • Nizamabad</p>
          </div>

          <button
            type="button"
            className="btn-royal-gold unboxing-action-btn"
            onClick={handleOpenInvitation}
            autoFocus
          >
            <MailOpen size={20} />
            <span>Open Wedding Invitation</span>
            <Sparkles size={18} />
          </button>

          <p className="unboxing-hint-text">✦ Tap the wax seal or button to unseal the celebration ✦</p>
        </div>
      </div>

      <style>{`
        .royal-unboxing-overlay {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 50% 35%, rgba(61, 8, 20, 0.97), rgba(20, 2, 6, 0.99));
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          backdrop-filter: blur(12px);
          animation: overlayFadeIn 0.4s ease-out;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .royal-unboxing-overlay.is-unfolding {
          opacity: 0;
          transform: scale(1.06);
          pointer-events: none;
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .royal-unboxing-card {
          position: relative;
          background: linear-gradient(145deg, #FFFDF9 0%, #FAF5EE 100%);
          border: 2px solid var(--gold-metallic);
          border-radius: var(--radius-lg);
          padding: clamp(2.4rem, 5vw, 3.6rem) clamp(1.6rem, 4.5vw, 3rem);
          max-width: 550px;
          width: 100%;
          text-align: center;
          box-shadow:
            0 32px 85px rgba(0, 0, 0, 0.8),
            0 0 60px rgba(212, 175, 55, 0.45),
            inset 0 0 40px rgba(212, 175, 55, 0.1);
          overflow: hidden;
          perspective: 1000px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .royal-unboxing-card.card-opening-motion {
          transform: scale(1.02) translateY(-10px);
        }
        .folio-top-flap {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 38px;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.22), transparent);
          border-bottom: 1.5px solid var(--hairline-gold);
          transform-origin: top center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }
        .card-opening-motion .folio-top-flap {
          transform: rotateX(160deg);
        }

        .envelope-ribbon-horizontal {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.35), transparent);
          pointer-events: none;
        }
        .envelope-ribbon-vertical {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(212, 175, 55, 0.35), transparent);
          pointer-events: none;
        }

        .unboxing-card-content {
          position: relative;
          z-index: 10;
        }
        .ganesha-crest-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 1rem;
        }
        .ganesha-gold-emblem {
          filter: drop-shadow(0 3px 10px rgba(212, 175, 55, 0.5));
        }
        .shloka-gold-text {
          font-family: var(--font-telugu);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--royal-wine);
          letter-spacing: 0.08em;
          text-shadow: 0 1px 3px rgba(212, 175, 55, 0.35);
        }
        .royal-3d-wax-seal-wrapper {
          position: relative;
          width: 92px;
          height: 92px;
          margin: 0 auto 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .wax-seal-halo-pulse {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.42), transparent 70%);
          animation: waxPulse 2.4s infinite ease-in-out;
        }
        @keyframes waxPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.6)); }
        }
        .wax-seal-tassels {
          position: absolute;
          bottom: -14px;
          display: flex;
          gap: 10px;
          z-index: 1;
        }
        .tassel {
          width: 3px;
          height: 22px;
          background: linear-gradient(180deg, var(--gold-metallic), var(--gold-dark));
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .tassel.left { transform: rotate(-14deg); }
        .tassel.right { transform: rotate(14deg); }

        .royal-3d-wax-seal {
          position: relative;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #A82442 0%, #6E122A 50%, #3D0814 100%);
          border: 3px solid var(--gold-metallic);
          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(212, 175, 55, 0.3),
            inset 0 3px 6px rgba(255, 255, 255, 0.4),
            inset 0 -4px 8px rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s var(--ease-royal);
          z-index: 2;
        }
        .royal-3d-wax-seal-wrapper:hover .royal-3d-wax-seal {
          transform: scale(1.08) rotate(3deg);
          border-color: var(--gold-bright);
        }
        .wax-seal-outer-rim {
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          border: 1px dashed rgba(247, 231, 180, 0.6);
          pointer-events: none;
        }
        .wax-monogram {
          color: #FFF2CC;
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7));
          user-select: none;
        }
        .royal-invitation-kicker {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: var(--gold-dark);
          font-weight: 800;
          display: block;
          margin-bottom: 0.5rem;
        }
        .unboxing-couple-names {
          font-family: var(--font-display);
          font-size: clamp(1.85rem, 4.5vw, 2.6rem);
          color: var(--royal-wine);
          line-height: 1.15;
          margin-bottom: 0.3rem;
        }
        .couple-name-shimmer {
          display: inline-block;
          background: linear-gradient(135deg, #7A1A32 0%, #B8860B 40%, #E5C378 50%, #B8860B 60%, #7A1A32 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .unboxing-ampersand {
          display: inline-block;
          font-family: var(--font-script);
          font-size: 2.2rem;
          color: var(--gold-dark);
          margin: 0 0.4rem;
          line-height: 1;
          vertical-align: middle;
        }
        .unboxing-telugu-script {
          font-family: var(--font-telugu);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--gold-dark);
          margin-bottom: 0.6rem;
          letter-spacing: 0.04em;
        }
        .unboxing-parents-box {
          margin-bottom: 1.3rem;
        }
        .unboxing-parents-lineage {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--ink-secondary);
          letter-spacing: 0.02em;
          margin: 0;
        }
        .unboxing-parents-telugu {
          font-family: var(--font-telugu);
          font-size: 0.82rem;
          color: var(--ink-muted);
          display: block;
          margin-top: 0.15rem;
        }
        .unboxing-date-badge {
          background: rgba(212, 175, 55, 0.12);
          border: 1px dashed var(--hairline-gold);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1.2rem;
          margin-bottom: 1.6rem;
        }
        .unboxing-date-string {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--royal-wine);
          font-size: 1.05rem;
        }
        .unboxing-venue-string {
          font-size: 0.88rem;
          color: var(--ink-muted);
          margin-top: 0.2rem;
        }
        .unboxing-action-btn {
          width: 100%;
          padding: 1rem 1.6rem;
          font-size: 1.08rem;
          letter-spacing: 0.04em;
        }
        .unboxing-hint-text {
          font-size: 0.82rem;
          color: var(--ink-muted);
          margin-top: 1rem;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
