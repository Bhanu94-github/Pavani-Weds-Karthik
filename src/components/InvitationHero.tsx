import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';
import { GaneshaIcon } from './TraditionalIcons';
import { LotusGarlandDivider } from './RoyalOrnaments';

interface Props {
  config: WeddingConfig;
}

export const InvitationHero: React.FC<Props> = ({ config }) => {
  const { couple, familyHeader, mainWedding } = config;

  return (
    <header className="royal-hero-pavilion" aria-labelledby="couple-heading">
      {/* Royal Pavilion Crest / Archway Top */}
      <div className="pavilion-archway-crest" aria-hidden="true">
        <div className="crest-halo-glow"></div>
        <div className="crest-ganesha-badge">
          <GaneshaIcon size={68} className="ganesha-foil-icon" />
        </div>
      </div>

      {/* Auspicious Shloka */}
      <div className="shloka-royal-title" aria-label="Auspicious Invocation">
        <span className="shloka-devanagari-gold">॥ శ్రీ గణేశాయ నమః ॥</span>
      </div>

      <p className="hero-blessing-phrase">{familyHeader.blessingWording}</p>

      {/* Wedding Celebrations Typography Calligraphy */}
      <div className="celebrations-calligraphy-wrap">
        <span className="celebrations-script-text">Wedding Celebrations</span>
        <span className="celebrations-of-text">of</span>
      </div>

      {/* Royal Arch Couple Presentation */}
      <div className="royal-couple-showcase">
        <h1 className="hero-couple-names" id="couple-heading">
          <span className="bride-name-luxury gold-shimmer-text">{couple.bride.fullName}</span>
          <span className="couple-calligraphy-connector">
            <span className="connector-line"></span>
            <span className="connector-symbol">&amp;</span>
            <span className="connector-line"></span>
          </span>
          <span className="groom-name-luxury gold-shimmer-text">{couple.groom.fullName}</span>
        </h1>

        {/* Authentic Telugu Scripture Sub-heading */}
        <div className="couple-telugu-sub-names" aria-label="Couple names in Telugu">
          <span className="telugu-couple-text">పావని కల్యాణి</span>
          <span className="telugu-couple-flower">𑁍</span>
          <span className="telugu-couple-text">కార్తీక్ రెడ్డి</span>
        </div>

        {/* Royal Lineage Cartouche */}
        <div className="parents-royal-cartouche">
          <span className="cartouche-lotus-ornament" aria-hidden="true">🪷</span>
          <div className="parents-cartouche-content">
            <p className="parents-lineage-text">
              D/o <strong>Smt. Gaddaguti Pushpa</strong> &amp; <strong>Sri Gaddaguti Veeraswamy</strong>
            </p>
            <p className="parents-lineage-telugu">
              శ్రీమతి గడ్డగూటి పుష్ప &amp; శ్రీ గడ్డగూటి వీరస్వామి దంపతుల సుపుత్రిక
            </p>
          </div>
          <span className="cartouche-lotus-ornament" aria-hidden="true">🪷</span>
        </div>
      </div>

      {couple.hashtag && (
        <div className="royal-hashtag-pill">
          <Sparkles size={14} className="hashtag-sparkle" />
          <span>{couple.hashtag}</span>
          <Sparkles size={14} className="hashtag-sparkle" />
        </div>
      )}

      {/* Sacred Invitation Message */}
      <div className="invitation-sacred-message-box">
        <p className="sacred-message-text">{familyHeader.welcomeMessage}</p>
      </div>

      <LotusGarlandDivider className="hero-bottom-garland" />

      {/* Key Dates & Venue Metadata Cards */}
      <div className="royal-meta-grid" role="region" aria-label="Wedding Date, Time and Venue Details">
        <div className="royal-meta-card">
          <div className="royal-meta-icon" aria-hidden="true">
            <Calendar size={22} />
          </div>
          <div className="royal-meta-info">
            <span className="meta-kicker">Wedding Date</span>
            <strong className="meta-value">{mainWedding.displayDate}</strong>
          </div>
        </div>

        <div className="royal-meta-card">
          <div className="royal-meta-icon" aria-hidden="true">
            <Clock size={22} />
          </div>
          <div className="royal-meta-info">
            <span className="meta-kicker">Sumuhūrtham</span>
            <strong className="meta-value">{mainWedding.muhurthamTime}</strong>
          </div>
        </div>

        <div className="royal-meta-card">
          <div className="royal-meta-icon" aria-hidden="true">
            <MapPin size={22} />
          </div>
          <div className="royal-meta-info">
            <span className="meta-kicker">Main Venue</span>
            <strong className="meta-value">{mainWedding.venueName}</strong>
            <span className="meta-subtext">{mainWedding.landmark}</span>
          </div>
        </div>
      </div>

      <style>{`
        .royal-hero-pavilion {
          text-align: center;
          margin-bottom: 2.8rem;
          position: relative;
        }
        .pavilion-archway-crest {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.6rem;
        }
        .crest-halo-glow {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, transparent 70%);
          filter: blur(8px);
          animation: haloBreath 3s infinite ease-in-out;
        }
        @keyframes haloBreath {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        .crest-ganesha-badge {
          position: relative;
          z-index: 2;
        }
        .ganesha-foil-icon {
          filter: drop-shadow(0 4px 12px rgba(212, 175, 55, 0.45));
        }
        .shloka-royal-title {
          margin-bottom: 0.6rem;
        }
        .shloka-devanagari-gold {
          font-family: var(--font-telugu);
          font-size: clamp(1.25rem, 2.6vw, 1.55rem);
          font-weight: 700;
          color: var(--royal-wine);
          letter-spacing: 0.08em;
          text-shadow: 0 1px 3px rgba(212, 175, 55, 0.45);
        }
        .hero-blessing-phrase {
          font-family: var(--font-serif);
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          font-style: italic;
          color: var(--ink-secondary);
          max-width: 620px;
          margin: 0.4rem auto;
          letter-spacing: 0.02em;
        }
        .celebrations-calligraphy-wrap {
          margin: 0.6rem 0 1rem;
        }
        .celebrations-script-text {
          display: block;
          font-family: var(--font-script);
          font-size: clamp(2.6rem, 6.5vw, 4rem);
          color: var(--royal-wine);
          line-height: 1.05;
          text-shadow: 0 2px 4px rgba(92, 18, 37, 0.08);
        }
        .celebrations-of-text {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-style: italic;
          color: var(--gold-dark);
          margin-top: -0.2rem;
        }
        .royal-couple-showcase {
          padding: 0.2rem 0;
        }
        .hero-couple-names {
          margin: 0;
          line-height: 1.1;
        }
        .bride-name-luxury, .groom-name-luxury {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 6.8vw, 4.4rem);
          font-weight: 800;
          letter-spacing: 0.03em;
          filter: drop-shadow(0 2px 4px rgba(61, 8, 20, 0.15));
        }
        .couple-calligraphy-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;
          max-width: 320px;
          margin: 0.3rem auto;
        }
        .connector-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-metallic), transparent);
        }
        .connector-symbol {
          font-family: var(--font-script);
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          color: var(--royal-wine);
          line-height: 0.9;
        }
        .couple-telugu-sub-names {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 0.5rem;
          margin-bottom: 0.8rem;
        }
        .telugu-couple-text {
          font-family: var(--font-telugu);
          font-size: clamp(1.1rem, 2.4vw, 1.35rem);
          font-weight: 700;
          color: var(--gold-dark);
          letter-spacing: 0.04em;
        }
        .telugu-couple-flower {
          color: var(--gold-metallic);
          font-size: 1.1rem;
        }
        .parents-royal-cartouche {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(212, 175, 55, 0.12);
          border: 1.5px solid var(--hairline-gold);
          border-radius: var(--radius-full);
          padding: 0.7rem 1.8rem;
          margin-top: 0.6rem;
          box-shadow: 0 4px 16px rgba(92, 18, 37, 0.06);
        }
        .cartouche-lotus-ornament {
          font-size: 1.2rem;
        }
        .parents-cartouche-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .parents-lineage-text {
          font-family: var(--font-sans);
          font-size: clamp(0.92rem, 1.7vw, 1.05rem);
          color: var(--royal-wine-deep);
          letter-spacing: 0.02em;
          margin: 0;
        }
        .parents-lineage-text strong {
          color: var(--royal-wine);
          font-weight: 700;
        }
        .parents-lineage-telugu {
          font-family: var(--font-telugu);
          font-size: clamp(0.78rem, 1.5vw, 0.88rem);
          color: var(--ink-secondary);
          margin: 0;
        }
        .royal-hashtag-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.3rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(247, 231, 180, 0.25));
          border: 1px solid var(--gold-metallic);
          border-radius: var(--radius-full);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--royal-wine);
          margin-top: 1.4rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 14px rgba(212, 175, 55, 0.15);
        }
        .hashtag-sparkle {
          color: var(--gold-metallic);
        }
        .invitation-sacred-message-box {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .sacred-message-text {
          font-family: var(--font-serif);
          font-size: clamp(1.02rem, 1.8vw, 1.2rem);
          line-height: 1.75;
          color: var(--ink-secondary);
        }
        .hero-bottom-garland {
          margin: 1.8rem auto 2.2rem;
        }
        .royal-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          max-width: 880px;
          margin: 0 auto;
          text-align: left;
        }
        .royal-meta-card {
          background: rgba(255, 255, 255, 0.94);
          border: 1.5px solid var(--hairline-gold);
          border-radius: var(--radius-md);
          padding: 1.2rem 1.3rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          box-shadow: 0 8px 24px rgba(92, 18, 37, 0.06), 0 0 15px rgba(212, 175, 55, 0.12);
          transition: transform 0.2s var(--ease-royal), box-shadow 0.2s var(--ease-royal), border-color 0.2s var(--ease-royal);
        }
        .royal-meta-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-royal);
          border-color: var(--gold-metallic);
        }
        .royal-meta-icon {
          color: var(--royal-wine);
          background: rgba(92, 18, 37, 0.08);
          border: 1.5px solid rgba(212, 175, 55, 0.35);
          padding: 0.65rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: inset 0 0 8px rgba(212, 175, 55, 0.15);
        }
        .royal-meta-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .meta-kicker {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--gold-dark);
          font-weight: 800;
        }
        .meta-value {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--royal-wine);
          line-height: 1.25;
          margin-top: 0.15rem;
        }
        .meta-subtext {
          font-size: 0.82rem;
          color: var(--ink-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 768px) {
          .royal-meta-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
          }
          .parents-royal-cartouche {
            padding: 0.45rem 1.1rem;
          }
        }
      `}</style>
    </header>
  );
};
