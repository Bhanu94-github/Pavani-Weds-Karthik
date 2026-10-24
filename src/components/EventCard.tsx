import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Sun, Heart, Navigation, AlertCircle } from 'lucide-react';
import { WeddingEvent } from '../types/wedding';

interface Props {
  event: WeddingEvent;
}

export const EventCard: React.FC<Props> = ({ event }) => {
  const getIcon = () => {
    switch (event.iconName) {
      case 'sparkles':
        return <Sparkles size={22} />;
      case 'sun':
        return <Sun size={22} />;
      case 'heart':
      default:
        return <Heart size={22} />;
    }
  };

  return (
    <article className={`event-card ${event.isConfirmedForBrideSide ? 'is-confirmed' : 'is-pending'}`}>
      <div className="event-card-header">
        <div className="event-icon-badge" aria-hidden="true">
          {getIcon()}
        </div>
        <div>
          <span className="event-order-tag">Ceremony #{event.displayOrder}</span>
          <h3 className="event-title">{event.title}</h3>
          {event.teluguTitle && <span className="event-telugu-title">{event.teluguTitle}</span>}
        </div>
      </div>

      <div className="event-details-body">
        <div className="event-detail-row">
          <Calendar size={17} className="detail-icon" aria-hidden="true" />
          <span className="detail-text font-bold">{event.displayDate}</span>
        </div>

        <div className="event-detail-row">
          <Clock size={17} className="detail-icon" aria-hidden="true" />
          <span className="detail-text">{event.startTime}</span>
        </div>

        <div className="event-detail-row place-row">
          <MapPin size={17} className="detail-icon" aria-hidden="true" />
          <div className="detail-text">
            <strong className="venue-name">{event.venueName}</strong>
            <p className="venue-address">{event.displayAddress}</p>
          </div>
        </div>

        {event.description && <p className="event-description">{event.description}</p>}

        {event.attireNote && (
          <div className="event-attire-pill">
            <span>✨ {event.attireNote}</span>
          </div>
        )}

        {/* Clear transparency on confirmation status */}
        {event.isAwaitingConfirmation && (
          <div className="pending-status-notice" role="note">
            <AlertCircle size={15} />
            <span>{event.statusNote || 'Awaiting bride family confirmation of venue address'}</span>
          </div>
        )}
      </div>

      <div className="event-card-footer">
        {event.mapUrl ? (
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wine event-map-btn"
          >
            <Navigation size={16} />
            <span>{event.isConfirmedForBrideSide ? 'Get Directions ↗' : 'View Location Area ↗'}</span>
          </a>
        ) : (
          <span className="location-tba">Directions will be updated upon confirmation</span>
        )}
      </div>

      <style>{`
        .event-card {
          background: var(--paper-pure);
          border: 1px solid var(--hairline);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          position: relative;
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-smooth);
        }
        .event-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--gold);
        }
        .event-card.is-confirmed {
          border-top: 4px solid var(--gold);
        }
        .event-card.is-pending {
          border-top: 4px solid var(--rosewood);
        }
        .event-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }
        .event-icon-badge {
          background: linear-gradient(135deg, var(--blush-soft), var(--paper-cream));
          color: var(--wine);
          border: 1px solid var(--hairline);
          border-radius: var(--radius-sm);
          padding: 0.65rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .event-order-tag {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--gold-dark);
          font-weight: 700;
          display: block;
        }
        .event-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--wine-dark);
          line-height: 1.2;
        }
        .event-telugu-title {
          font-size: 0.85rem;
          color: var(--rosewood);
          font-weight: 600;
          display: block;
          margin-top: 0.15rem;
        }
        .event-details-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.2rem;
        }
        .event-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.94rem;
          color: var(--ink);
        }
        .detail-icon {
          color: var(--gold-dark);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .place-row {
          align-items: flex-start;
        }
        .venue-name {
          color: var(--wine);
          font-weight: 600;
          display: block;
        }
        .venue-address {
          font-size: 0.85rem;
          color: var(--ink-light);
          line-height: 1.35;
        }
        .event-description {
          font-size: 0.88rem;
          color: var(--ink-light);
          line-height: 1.5;
          margin-top: 0.4rem;
          border-top: 1px dashed var(--hairline);
          padding-top: 0.6rem;
        }
        .event-attire-pill {
          background: var(--paper-cream);
          border-left: 3px solid var(--gold);
          padding: 0.45rem 0.7rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--ink);
          font-weight: 500;
          margin-top: 0.3rem;
        }
        .pending-status-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(166, 93, 101, 0.08);
          border: 1px solid var(--hairline-rose);
          border-radius: var(--radius-sm);
          padding: 0.4rem 0.65rem;
          font-size: 0.78rem;
          color: var(--rosewood);
          font-weight: 600;
          margin-top: 0.3rem;
        }
        .event-card-footer {
          margin-top: auto;
          padding-top: 0.8rem;
        }
        .event-map-btn {
          width: 100%;
          font-size: 0.9rem;
          padding: 0.65rem;
        }
        .location-tba {
          font-size: 0.82rem;
          color: var(--ink-muted);
          font-style: italic;
          display: block;
          text-align: center;
        }
      `}</style>
    </article>
  );
};
