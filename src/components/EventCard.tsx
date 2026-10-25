import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Navigation } from 'lucide-react';
import { WeddingEvent } from '../types/wedding';
import { HaldiBowlIcon, MehendiHandIcon, BanglesIcon, HomaKundamIcon } from './TraditionalIcons';

interface Props {
  event: WeddingEvent;
}

export const EventCard: React.FC<Props> = ({ event }) => {
  const getThemeClass = () => {
    if (event.id.includes('haldi')) return 'theme-haldi';
    if (event.id.includes('mehendi')) return 'theme-mehendi';
    if (event.id.includes('gajula')) return 'theme-gajula';
    return 'theme-marriage';
  };

  const getTraditionalIcon = () => {
    if (event.id.includes('haldi')) {
      return <HaldiBowlIcon size={46} className="trad-event-icon" />;
    }
    if (event.id.includes('mehendi')) {
      return <MehendiHandIcon size={46} className="trad-event-icon" />;
    }
    if (event.id.includes('gajula')) {
      return <BanglesIcon size={46} className="trad-event-icon" />;
    }
    return <HomaKundamIcon size={46} className="trad-event-icon" />;
  };

  const isSharedEvening = event.id.includes('haldi') || event.id.includes('mehendi');
  const isMarriage = event.id.includes('marriage');

  return (
    <article className={`uniform-event-card ${getThemeClass()}`}>
      {/* Top Ornamental Zari Border */}
      <div className="card-top-accent" aria-hidden="true"></div>

      {/* Header Block with Uniform Heights */}
      <div className="card-header-uniform">
        <div className="card-kicker-row">
          <span className="ritual-sequence-pill">Ceremony 0{event.displayOrder}</span>
          {isMarriage && (
            <span className="marriage-highlight-pill">
              <Sparkles size={12} />
              <span>Grand Sumuhūrtham</span>
            </span>
          )}
          {isSharedEvening && (
            <span className="shared-time-pill">
              <Sparkles size={12} />
              <span>Same Evening Celebrations</span>
            </span>
          )}
        </div>

        <div className="icon-and-title-block">
          <div className="event-icon-circle-uniform" aria-hidden="true">
            {getTraditionalIcon()}
          </div>
          <div className="title-and-telugu-block">
            <h3 className="event-title-uniform">{event.title}</h3>
            {event.teluguTitle && (
              <span className="event-telugu-uniform">{event.teluguTitle}</span>
            )}
          </div>
        </div>
      </div>

      {/* Consistent Metadata Specifications Grid */}
      <div className="card-specs-body">
        {/* Date Row */}
        <div className="spec-row-uniform">
          <div className="spec-icon-box" aria-hidden="true">
            <Calendar size={17} />
          </div>
          <div className="spec-content">
            <span className="spec-micro-label">Date</span>
            <strong className="spec-primary-text">{event.displayDate}</strong>
          </div>
        </div>

        {/* Time Row */}
        <div className="spec-row-uniform">
          <div className="spec-icon-box" aria-hidden="true">
            <Clock size={17} />
          </div>
          <div className="spec-content">
            <span className="spec-micro-label">Muhūrtham / Time</span>
            <strong className="spec-primary-text highlight-time">{event.startTime}</strong>
          </div>
        </div>

        {/* Venue & Location Row */}
        <div className="spec-row-uniform venue-row-uniform">
          <div className="spec-icon-box" aria-hidden="true">
            <MapPin size={17} />
          </div>
          <div className="spec-content">
            <span className="spec-micro-label">Ceremonial Venue</span>
            <strong className="spec-primary-text">{event.venueName}</strong>
            <p className="spec-sub-address">{event.displayAddress}</p>
          </div>
        </div>
      </div>

      {/* Uniform Action Footer Aligned to the Bottom */}
      <div className="card-action-footer">
        {event.mapUrl ? (
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal-wine uniform-map-btn"
          >
            <Navigation size={16} />
            <span>Get Directions in Google Maps ↗</span>
          </a>
        ) : (
          <div className="placeholder-btn-spacer"></div>
        )}
      </div>

      <style>{`
        .uniform-event-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1.5px solid var(--hairline-gold);
          border-radius: var(--radius-md);
          padding: clamp(1.8rem, 2.5vw, 2.2rem) clamp(1.6rem, 2.8vw, 2.2rem);
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 330px;
          box-shadow: var(--shadow-royal);
          position: relative;
          overflow: hidden;
          transition: transform 0.25s var(--ease-royal), box-shadow 0.25s var(--ease-royal), border-color 0.25s var(--ease-royal);
        }
        .uniform-event-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-elevated);
          border-color: var(--gold-metallic);
        }
        .card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }
        .theme-haldi .card-top-accent {
          background: linear-gradient(90deg, #B87814, #FFE082, #B87814);
        }
        .theme-mehendi .card-top-accent {
          background: linear-gradient(90deg, #9C2738, #F5E8C9, #9C2738);
        }
        .theme-gajula .card-top-accent {
          background: linear-gradient(90deg, #133E2B, #D4AF37, #133E2B);
        }
        .theme-marriage .card-top-accent {
          background: linear-gradient(90deg, #5C1225, #D4AF37, #5C1225);
        }
        .card-header-uniform {
          margin-bottom: 1.2rem;
        }
        .card-kicker-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
          min-height: 24px;
        }
        .ritual-sequence-pill {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--gold-dark);
          font-weight: 700;
          background: rgba(212, 175, 55, 0.12);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }
        .marriage-highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          color: #FFF2CC;
          background: linear-gradient(135deg, #7A1A32, #4D0C1D);
          padding: 0.22rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--gold-metallic);
          box-shadow: 0 2px 8px rgba(92, 18, 37, 0.25);
        }
        .shared-time-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--royal-wine);
          background: rgba(92, 18, 37, 0.08);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(92, 18, 37, 0.15);
        }
        .icon-and-title-block {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }
        .event-icon-circle-uniform {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 1.5px solid var(--gold-metallic);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(92, 18, 37, 0.08);
          background: var(--silk-cream);
        }
        .trad-event-icon {
          display: block;
        }
        .title-and-telugu-block {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .event-title-uniform {
          font-family: var(--font-display);
          font-size: clamp(1.28rem, 2.8vw, 1.48rem);
          font-weight: 700;
          color: var(--royal-wine-deep);
          line-height: 1.2;
          margin: 0;
        }
        .event-telugu-uniform {
          font-family: var(--font-telugu);
          font-size: 0.92rem;
          color: var(--gold-dark);
          font-weight: 600;
          display: block;
          margin-top: 0.15rem;
          letter-spacing: 0.02em;
        }
        .card-specs-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }
        .spec-row-uniform {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          font-size: 0.94rem;
          color: var(--ink-primary);
        }
        .spec-icon-box {
          color: var(--gold-dark);
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--hairline-gold);
          border-radius: var(--radius-sm);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .spec-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .spec-micro-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--ink-muted);
          font-weight: 700;
        }
        .spec-primary-text {
          font-family: var(--font-sans);
          font-size: 0.96rem;
          color: var(--ink-primary);
          line-height: 1.35;
        }
        .highlight-time {
          color: var(--royal-wine);
          font-weight: 700;
        }
        .venue-row-uniform {
          min-height: 3.8rem;
        }
        .spec-sub-address {
          font-size: 0.86rem;
          color: var(--ink-secondary);
          line-height: 1.35;
          margin-top: 0.15rem;
        }
        .card-action-footer {
          margin-top: auto;
          padding-top: 1rem;
        }
        .uniform-map-btn {
          width: 100%;
          padding: 0.82rem;
          font-size: 0.92rem;
        }
        .placeholder-btn-spacer {
          height: 44px;
        }
        @media (max-width: 600px) {
          .uniform-event-card {
            min-height: auto;
            padding: 1.5rem 1.25rem;
          }
          .venue-row-uniform {
            min-height: auto;
          }
        }
      `}</style>
    </article>
  );
};
