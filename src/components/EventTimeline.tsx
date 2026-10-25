import React from 'react';
import { WeddingEvent } from '../types/wedding';
import { EventCard } from './EventCard';
import { LotusGarlandDivider } from './RoyalOrnaments';

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
        <p className="schedule-sub-description">
          Please join us in celebrating each sacred milestone of traditional rituals, music, and divine blessings.
        </p>
      </div>

      <div className="events-uniform-grid">
        {sortedEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <LotusGarlandDivider className="schedule-bottom-garland" />

      <style>{`
        .timeline-luxury-section {
          margin: 3.5rem 0;
        }
        .schedule-header-box {
          text-align: center;
          margin-bottom: 2.4rem;
        }
        .schedule-main-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.8vw, 2.4rem);
          font-weight: 700;
          color: #2D5A43; /* Deep festive emerald matching traditional invitation */
          letter-spacing: 0.16em;
          margin: 0;
        }
        .schedule-ornament-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          max-width: 300px;
          margin: 0.6rem auto 0;
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
        .schedule-sub-description {
          font-family: var(--font-serif);
          font-size: clamp(0.96rem, 1.6vw, 1.08rem);
          color: var(--ink-secondary);
          max-width: 620px;
          margin: 0.8rem auto 0;
          line-height: 1.6;
        }
        .events-uniform-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          align-items: stretch;
          width: 100%;
        }
        @media (max-width: 820px) {
          .events-uniform-grid {
            grid-template-columns: 1fr;
            max-width: 540px;
            margin: 0 auto;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
