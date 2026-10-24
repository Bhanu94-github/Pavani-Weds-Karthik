import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';

interface Props {
  config: WeddingConfig;
}

export const InvitationHero: React.FC<Props> = ({ config }) => {
  const { couple, familyHeader, mainWedding } = config;

  return (
    <header className="hero-header" aria-labelledby="main-heading">
      <div className="auspicious-shloka" aria-label="Auspicious Invocation">
        <span className="shloka-text">॥ శ్రీ లక్ష్మీ ప్రసన్నా ॥</span>
        <span className="kicker-tag">{familyHeader.invitationKicker}</span>
      </div>

      <div className="botanical-divider" aria-hidden="true">
        <span>❧</span>
      </div>

      <p className="hero-eyebrow">{familyHeader.blessingWording}</p>

      {/* Bride & Groom Couple Typography */}
      <h1 className="hero-couple-names" id="main-heading">
        <span className="bride-name">{couple.bride.fullName}</span>
        <span className="weds-calligraphy">
          <span className="weds-line"></span>
          <span className="weds-text">weds</span>
          <span className="weds-line"></span>
        </span>
        <span className="groom-name">{couple.groom.fullName}</span>
      </h1>

      {couple.hashtag && (
        <div className="wedding-hashtag">
          <Sparkles size={14} className="gold-ornament" />
          <span>{couple.hashtag}</span>
          <Sparkles size={14} className="gold-ornament" />
        </div>
      )}

      {/* Key Metadata Pill Cards */}
      <div className="hero-meta-grid" role="region" aria-label="Wedding Date, Time and Venue">
        <div className="meta-card">
          <div className="meta-card-icon" aria-hidden="true">
            <Calendar size={20} />
          </div>
          <div className="meta-card-text">
            <span className="meta-card-label">Wedding Date</span>
            <span className="meta-card-value">{mainWedding.displayDate}</span>
          </div>
        </div>

        <div className="meta-card">
          <div className="meta-card-icon" aria-hidden="true">
            <Clock size={20} />
          </div>
          <div className="meta-card-text">
            <span className="meta-card-label">Sumuhūrtham</span>
            <span className="meta-card-value">{mainWedding.muhurthamTime}</span>
          </div>
        </div>

        <div className="meta-card">
          <div className="meta-card-icon" aria-hidden="true">
            <MapPin size={20} />
          </div>
          <div className="meta-card-text">
            <span className="meta-card-label">Main Venue</span>
            <span className="meta-card-value">{mainWedding.venueName}</span>
            <span className="meta-card-sub">{mainWedding.landmark}</span>
          </div>
        </div>
      </div>

      {/* Invitation Warm Message */}
      <div className="hero-welcome-box">
        <p className="welcome-text">{familyHeader.welcomeMessage}</p>
      </div>

      <div className="botanical-divider" aria-hidden="true">
        <span>✿</span>
      </div>

      <style>{`
        .hero-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .auspicious-shloka {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          margin-bottom: 0.8rem;
        }
        .shloka-text {
          font-family: var(--font-serif);
          color: var(--gold-dark);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .kicker-tag {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--wine);
          font-weight: 600;
        }
        .hero-eyebrow {
          font-family: var(--font-serif);
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-style: italic;
          color: var(--ink-light);
          margin-bottom: 0.8rem;
        }
        .hero-couple-names {
          margin: 0.5rem 0 1.2rem;
          color: var(--wine-dark);
          line-height: 1.05;
        }
        .bride-name, .groom-name {
          display: block;
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 6.5vw, 4.2rem);
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--wine);
          text-shadow: 0 2px 4px rgba(110, 29, 47, 0.08);
        }
        .weds-calligraphy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin: 0.4rem auto;
          max-width: 320px;
        }
        .weds-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .weds-text {
          font-family: var(--font-script);
          font-size: clamp(2.2rem, 4.5vw, 3rem);
          color: var(--gold-dark);
          line-height: 1;
        }
        .wedding-hashtag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1rem;
          background: var(--paper-cream);
          border: 1px solid var(--hairline);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--wine);
          margin-bottom: 1.8rem;
        }
        .hero-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 820px;
          margin: 1.5rem auto;
          text-align: left;
        }
        .meta-card {
          background: var(--paper-cream);
          border: 1px solid var(--hairline);
          border-radius: var(--radius-md);
          padding: 1rem 1.1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }
        .meta-card:hover {
          transform: translateY(-2px);
          border-color: var(--gold);
        }
        .meta-card-icon {
          color: var(--wine);
          background: var(--blush-soft);
          padding: 0.55rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .meta-card-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .meta-card-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          font-weight: 600;
        }
        .meta-card-value {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--wine-dark);
          line-height: 1.25;
        }
        .meta-card-sub {
          font-size: 0.8rem;
          color: var(--ink-light);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .hero-welcome-box {
          max-width: 680px;
          margin: 1.8rem auto 0;
          padding: 0 1rem;
        }
        .welcome-text {
          font-size: clamp(1.02rem, 1.8vw, 1.18rem);
          line-height: 1.7;
          color: var(--ink);
        }
        @media (max-width: 768px) {
          .hero-meta-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
          .meta-card {
            padding: 0.85rem 1rem;
          }
        }
      `}</style>
    </header>
  );
};
