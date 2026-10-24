import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Navigation } from 'lucide-react';
import { WeddingEvent } from '../types/wedding';
import { HaldiBowlIcon, BanglesIcon, HomaKundamIcon } from './TraditionalIcons';

interface Props {
  event: WeddingEvent;
}

export const EventCard: React.FC<Props> = ({ event }) => {
  const getThemeClass = () => {
    if (event.id.includes('haldi')) return 'theme-haldi';
    if (event.id.includes('gajula')) return 'theme-gajula';
    return 'theme-marriage';
  };

  const getTraditionalIcon = () => {
    if (event.id.includes('haldi')) {
      return <HaldiBowlIcon size={48} className="trad-event-icon" />;
    }
    if (event.id.includes('gajula')) {
      return <BanglesIcon size={48} className="trad-event-icon" />;
    }
    return <HomaKundamIcon size={48} className="trad-event-icon" />;
  };

  return (
    <article className={`royal-event-card ${getThemeClass()}`}>
      <div className="card-top-decoration" aria-hidden="true"></div>

      <div className="event-card-header">
        <div className="event-icon-circle" aria-hidden="true">
          {getTraditionalIcon()}
        </div>
        <div className="event-heading-group">
          <span className="event-sequence-kicker">Ritual #{event.displayOrder}</span>
          <h3 className="event-ceremony-title">{event.title}</h3>
          {event.teluguTitle && <span className="event-telugu-name">{event.teluguTitle}</span>}
        </div>
      </div>

      <div className="event-body-specs">
        <div className="spec-item">
          <Calendar size={18} className="spec-icon" aria-hidden="true" />
          <span className="spec-text font-bold">{event.displayDate}</span>
        </div>

        <div className="spec-item">
          <Clock size={18} className="spec-icon" aria-hidden="true" />
          <span className="spec-text font-semibold">{event.startTime}</span>
        </div>

        <div className="spec-item place-spec">
          <MapPin size={18} className="spec-icon" aria-hidden="true" />
          <div className="spec-text">
            <strong className="place-name">{event.venueName}</strong>
            <p className="place-address">{event.displayAddress}</p>
          </div>
        </div>

        {event.description && <p className="event-narrative">{event.description}</p>}

        {event.attireNote && (
          <div className="event-attire-badge">
            <Sparkles size={14} className="attire-sparkle" />
            <span>{event.attireNote}</span>
          </div>
        )}
      </div>

      <div className="event-card-action">
        {event.mapUrl && (
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal-wine map-action-btn"
          >
            <Navigation size={16} />
            <span>Get Directions in Google Maps ↗</span>
          </a>
        )}
      </div>

      <style>{`
        .royal-event-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1.5px solid var(--hairline-gold);
          border-radius: var(--radius-md);
          padding: 1.8rem 1.6rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-royal);
          position: relative;
          overflow: hidden;
          transition: transform 0.25s var(--ease-royal), box-shadow 0.25s var(--ease-royal), border-color 0.25s var(--ease-royal);
        }
        .royal-event-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-elevated);
          border-color: var(--gold-metallic);
        }
        .card-top-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }
        .theme-haldi .card-top-decoration {
          background: linear-gradient(90deg, #B87814, #FFE082, #B87814);
        }
        .theme-gajula .card-top-decoration {
          background: linear-gradient(90deg, #133E2B, #D4AF37, #133E2B);
        }
        .theme-marriage .card-top-decoration {
          background: linear-gradient(90deg, #5C1225, #D4AF37, #5C1225);
        }
        .event-card-header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 1.4rem;
        }
        .event-icon-circle {
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
        .event-sequence-kicker {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--gold-dark);
          font-weight: 700;
          display: block;
        }
        .event-ceremony-title {
          font-family: var(--font-display);
          font-size: 1.42rem;
          font-weight: 700;
          color: var(--royal-wine-deep);
          line-height: 1.2;
          margin-top: 0.1rem;
        }
        .event-telugu-name {
          font-size: 0.88rem;
          color: var(--gold-dark);
          font-weight: 600;
          display: block;
          margin-top: 0.2rem;
        }
        .event-body-specs {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.4rem;
        }
        .spec-item {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          font-size: 0.95rem;
          color: var(--ink-primary);
        }
        .spec-icon {
          color: var(--gold-dark);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .font-semibold {
          font-weight: 600;
          color: var(--royal-wine);
        }
        .place-name {
          color: var(--royal-wine);
          font-weight: 700;
          display: block;
        }
        .place-address {
          font-size: 0.88rem;
          color: var(--ink-secondary);
          line-height: 1.4;
        }
        .event-narrative {
          font-size: 0.9rem;
          color: var(--ink-secondary);
          line-height: 1.55;
          margin-top: 0.3rem;
          border-top: 1px dashed var(--hairline-gold);
          padding-top: 0.75rem;
        }
        .event-attire-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(212, 175, 55, 0.1);
          border-left: 3px solid var(--gold-metallic);
          padding: 0.5rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--royal-wine-deep);
          font-weight: 600;
        }
        .attire-sparkle {
          color: var(--gold-metallic);
        }
        .event-card-action {
          margin-top: auto;
        }
        .map-action-btn {
          width: 100%;
          padding: 0.75rem;
          font-size: 0.92rem;
        }
      `}</style>
    </article>
  );
};
