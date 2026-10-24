import React from 'react';
import { WeddingEvent } from '../types/wedding';
import { EventCard } from './EventCard';

interface Props {
  events: WeddingEvent[];
}

export const EventTimeline: React.FC<Props> = ({ events }) => {
  const sortedEvents = [...events].sort((a, b) => {
    if (a.date !== b.date) {
      return a.date.localeCompare(b.date);
    }
    return a.displayOrder - b.displayOrder;
  });

  return (
    <section className="timeline-luxury-section" aria-labelledby="schedule-heading">
      <div className="schedule-header-box">
        <h2 id="schedule-heading" className="schedule-main-title">
          WEDDING SCHEDULE
        </h2>
        <div className="schedule-ornament-line" aria-hidden="true">
          <span className="line-part"></span>
          <span className="ornament-leaf">❦</span>
          <span className="line-part"></span>
        </div>
      </div>

      <div className="events-luxury-grid">
        {sortedEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="royal-divider" aria-hidden="true">
        <span className="royal-divider-symbol">❖</span>
      </div>

      <style>{`
        .timeline-luxury-section {
          margin: 3rem 0;
        }
        .schedule-header-box {
          text-align: center;
          margin-bottom: 2.2rem;
        }
        .schedule-main-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: #2D5A43; /* Deep celebratory emerald matching user card */
          letter-spacing: 0.15em;
          margin: 0;
        }
        .schedule-ornament-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          max-width: 300px;
          margin: 0.5rem auto 0;
        }
        .line-part {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-metallic), transparent);
        }
        .ornament-leaf {
          color: var(--gold-dark);
          font-size: 1.2rem;
        }
        .events-luxury-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .events-luxury-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};
