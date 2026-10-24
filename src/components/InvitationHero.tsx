import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';
import { GaneshaIcon } from './TraditionalIcons';

interface Props {
  config: WeddingConfig;
}

export const InvitationHero: React.FC<Props> = ({ config }) => {
  const { couple, familyHeader, mainWedding } = config;

  return (
    <header className="royal-hero-header" aria-labelledby="couple-heading">
      {/* Sacred Lord Ganesha Emblem & Invocation */}
      <div className="ganesha-invocation-block" aria-label="Auspicious Invocation">
        <GaneshaIcon size={64} className="ganesha-emblem-svg" />
        <span className="shloka-gold">॥ శ్రీ గణేశాయ నమః ॥</span>
      </div>

      <p className="hero-blessing-intro">{familyHeader.blessingWording}</p>

      {/* "Wedding Celebrations of" typography from user card */}
      <div className="wedding-celebrations-banner">
        <span className="celebrations-script">Wedding Celebrations</span>
        <span className="celebrations-of">of</span>
      </div>

      {/* Couple Names */}
      <div className="couple-names-wrapper">
        <h1 className="hero-couple-names" id="couple-heading">
          <span className="bride-title gold-shimmer-text">{couple.bride.fullName}</span>
          <span className="weds-flourish">
            <span className="flourish-line"></span>
            <span className="weds-calligraphy">&amp;</span>
            <span className="flourish-line"></span>
          </span>
          <span className="groom-title gold-shimmer-text">{couple.groom.fullName}</span>
        </h1>

        {/* Bride Parents' Lineage */}
        <div className="parents-lineage-box">
          <p className="parents-names-text">
            D/o <strong>Smt. Gaddaguti Pushpa</strong> &amp; <strong>Sri Gaddaguti Veeraswamy</strong>
          </p>
        </div>
      </div>

      {couple.hashtag && (
        <div className="wedding-badge">
          <Sparkles size={14} className="badge-sparkle" />
          <span>{couple.hashtag}</span>
          <Sparkles size={14} className="badge-sparkle" />
        </div>
      )}

      {/* Warm Presence Invitation Line */}
      <div className="presence-welcome-box">
        <p className="presence-welcome-text">{familyHeader.welcomeMessage}</p>
      </div>

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

      <div className="royal-divider" aria-hidden="true">
        <span className="royal-divider-symbol">❦</span>
      </div>

      <style>{`
        .royal-hero-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .ganesha-invocation-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.8rem;
        }
        .ganesha-emblem-svg {
          filter: drop-shadow(0 2px 8px rgba(212, 175, 55, 0.4));
        }
        .shloka-gold {
          font-family: var(--font-display);
          font-size: 1.28rem;
          font-weight: 700;
          color: var(--royal-wine);
          letter-spacing: 0.08em;
          text-shadow: 0 1px 2px rgba(212, 175, 55, 0.35);
        }
        .hero-blessing-intro {
          font-family: var(--font-serif);
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          font-style: italic;
          color: var(--ink-secondary);
          max-width: 620px;
          margin: 0.6rem auto 0.4rem;
          letter-spacing: 0.02em;
        }
        .wedding-celebrations-banner {
          margin: 0.4rem 0 0.8rem;
        }
        .celebrations-script {
          display: block;
          font-family: var(--font-script);
          font-size: clamp(2.4rem, 5.5vw, 3.6rem);
          color: var(--royal-wine);
          line-height: 1.1;
        }
        .celebrations-of {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--gold-dark);
          margin-top: -0.3rem;
        }
        .couple-names-wrapper {
          padding: 0.3rem 0;
        }
        .hero-couple-names {
          margin: 0;
          line-height: 1.1;
        }
        .bride-title, .groom-title {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(2.3rem, 6.2vw, 4.2rem);
          font-weight: 700;
          letter-spacing: 0.03em;
          filter: drop-shadow(0 2px 4px rgba(61, 8, 20, 0.15));
        }
        .weds-flourish {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;
          max-width: 280px;
          margin: 0.2rem auto;
        }
        .flourish-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-metallic), transparent);
        }
        .weds-calligraphy {
          font-family: var(--font-script);
          font-size: clamp(2.2rem, 5vw, 3rem);
          color: var(--royal-wine);
          line-height: 0.9;
        }
        .parents-lineage-box {
          margin: 0.8rem auto 0;
          background: rgba(212, 175, 55, 0.08);
          border: 1px dashed var(--hairline-gold);
          border-radius: var(--radius-full);
          display: inline-block;
          padding: 0.5rem 1.4rem;
        }
        .parents-names-text {
          font-family: var(--font-sans);
          font-size: clamp(0.92rem, 1.6vw, 1.05rem);
          color: var(--royal-wine-deep);
          letter-spacing: 0.03em;
        }
        .parents-names-text strong {
          color: var(--royal-wine);
        }
        .wedding-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.2rem;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid var(--hairline-gold);
          border-radius: var(--radius-full);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--royal-wine);
          margin-top: 1.2rem;
          margin-bottom: 1.5rem;
        }
        .badge-sparkle {
          color: var(--gold-metallic);
        }
        .presence-welcome-box {
          max-width: 680px;
          margin: 0 auto 2rem;
          padding: 0 1rem;
        }
        .presence-welcome-text {
          font-family: var(--font-serif);
          font-size: clamp(1rem, 1.8vw, 1.16rem);
          line-height: 1.7;
          color: var(--ink-secondary);
        }
        .royal-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          max-width: 860px;
          margin: 0 auto;
          text-align: left;
        }
        .royal-meta-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--hairline-gold);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.2rem;
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          box-shadow: 0 6px 20px rgba(92, 18, 37, 0.05);
          transition: transform 0.2s var(--ease-royal), box-shadow 0.2s var(--ease-royal);
        }
        .royal-meta-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-royal);
        }
        .royal-meta-icon {
          color: var(--royal-wine);
          background: rgba(92, 18, 37, 0.07);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 0.6rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .royal-meta-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .meta-kicker {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--gold-dark);
          font-weight: 700;
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
          .parents-lineage-box {
            padding: 0.4rem 1rem;
          }
        }
      `}</style>
    </header>
  );
};
