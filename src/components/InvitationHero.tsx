import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';

interface Props {
  config: WeddingConfig;
}

export const InvitationHero: React.FC<Props> = ({ config }) => {
  const { couple, familyHeader, mainWedding } = config;

  return (
    <header className="royal-hero-header" aria-labelledby="couple-heading">
      {/* Auspicious Shloka & Invocation */}
      <div className="shloka-banner" aria-label="Auspicious Invocation">
        <span className="shloka-gold">॥ శ్రీ లక్ష్మీ ప్రసన్నా ॥</span>
        <span className="eyebrow-tag">{familyHeader.invitationKicker}</span>
      </div>

      {/* Royal Arch Frame Motifs */}
      <div className="royal-divider" aria-hidden="true">
        <span className="royal-divider-symbol">❖</span>
      </div>

      <p className="hero-blessing-text">{familyHeader.blessingWording}</p>

      {/* Royal Couple Typography */}
      <div className="couple-names-wrapper">
        <h1 className="hero-couple-names" id="couple-heading">
          <span className="bride-title gold-shimmer-text">{couple.bride.fullName}</span>
          <span className="weds-flourish">
            <span className="flourish-line"></span>
            <span className="weds-calligraphy">weds</span>
            <span className="flourish-line"></span>
          </span>
          <span className="groom-title gold-shimmer-text">{couple.groom.fullName}</span>
        </h1>
      </div>

      {couple.hashtag && (
        <div className="wedding-badge">
          <Sparkles size={14} className="badge-sparkle" />
          <span>{couple.hashtag}</span>
          <Sparkles size={14} className="badge-sparkle" />
        </div>
      )}

      {/* Luxury Metallic Metadata Cards */}
      <div className="royal-meta-grid" role="region" aria-label="Wedding Date, Time and Venue Details">
        <div className="royal-meta-card">
          <div className="royal-meta-icon" aria-hidden="true">
            <Calendar size={22} />
          </div>
          <div className="royal-meta-info">
            <span className="meta-kicker">Auspicious Date</span>
            <strong className="meta-value">{mainWedding.displayDate}</strong>
          </div>
        </div>

        <div className="royal-meta-card">
          <div className="royal-meta-icon" aria-hidden="true">
            <Clock size={22} />
          </div>
          <div className="royal-meta-info">
            <span className="meta-kicker">Lagna Muhūrtham</span>
            <strong className="meta-value">{mainWedding.muhurthamTime}</strong>
          </div>
        </div>

        <div className="royal-meta-card">
          <div className="royal-meta-icon" aria-hidden="true">
            <MapPin size={22} />
          </div>
          <div className="royal-meta-info">
            <span className="meta-kicker">Sacred Venue</span>
            <strong className="meta-value">{mainWedding.venueName}</strong>
            <span className="meta-subtext">{mainWedding.landmark}</span>
          </div>
        </div>
      </div>

      {/* Illuminated Welcome Box */}
      <div className="welcome-parchment-box">
        <p className="welcome-narrative">{familyHeader.welcomeMessage}</p>
      </div>

      <div className="royal-divider" aria-hidden="true">
        <span className="royal-divider-symbol">❦</span>
      </div>

      <style>{`
        .royal-hero-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .shloka-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.6rem;
        }
        .shloka-gold {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gold-dark);
          letter-spacing: 0.1em;
          text-shadow: 0 1px 2px rgba(212, 175, 55, 0.3);
        }
        .hero-blessing-text {
          font-family: var(--font-serif);
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          font-style: italic;
          color: var(--ink-secondary);
          margin-bottom: 0.6rem;
          letter-spacing: 0.02em;
        }
        .couple-names-wrapper {
          padding: 0.5rem 0;
        }
        .hero-couple-names {
          margin: 0;
          line-height: 1.1;
        }
        .bride-title, .groom-title {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(2.3rem, 6.2vw, 4.4rem);
          font-weight: 700;
          letter-spacing: 0.03em;
          filter: drop-shadow(0 2px 4px rgba(61, 8, 20, 0.15));
        }
        .weds-flourish {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;
          max-width: 340px;
          margin: 0.35rem auto;
        }
        .flourish-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-metallic), transparent);
        }
        .weds-calligraphy {
          font-family: var(--font-script);
          font-size: clamp(2.4rem, 5.5vw, 3.4rem);
          color: var(--royal-wine);
          line-height: 0.9;
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
          margin-bottom: 2.2rem;
        }
        .badge-sparkle {
          color: var(--gold-metallic);
        }
        .royal-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          max-width: 860px;
          margin: 0 auto 2.2rem;
          text-align: left;
        }
        .royal-meta-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid var(--hairline-gold);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.2rem;
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          box-shadow: 0 6px 20px rgba(92, 18, 37, 0.05);
          transition: transform 0.2s var(--ease-royal), box-shadow 0.2s var(--ease-royal), border-color 0.2s var(--ease-royal);
        }
        .royal-meta-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-royal);
          border-color: var(--gold-metallic);
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
        .welcome-parchment-box {
          max-width: 720px;
          margin: 0 auto;
          background: rgba(255, 253, 249, 0.95);
          border: 1px dashed var(--hairline-gold);
          border-radius: var(--radius-md);
          padding: 1.4rem 1.8rem;
          box-shadow: inset 0 0 20px rgba(212, 175, 55, 0.05);
        }
        .welcome-narrative {
          font-size: clamp(1.02rem, 1.8vw, 1.18rem);
          line-height: 1.75;
          color: var(--ink-primary);
        }
        @media (max-width: 768px) {
          .royal-meta-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
          }
          .welcome-parchment-box {
            padding: 1.2rem 1.2rem;
          }
        }
      `}</style>
    </header>
  );
};
