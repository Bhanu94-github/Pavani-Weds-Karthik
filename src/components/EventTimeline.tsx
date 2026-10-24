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
    <section className="timeline-luxury-section" aria-labelledby="events-heading">
      <div className="timeline-header-block">
        <span className="eyebrow-tag">Sacred Traditions</span>
        <h2 id="events-heading" className="section-heading-luxury">
          Wedding Celebrations &amp; Ceremonies
        </h2>
        <p className="section-intro-luxury">
          We warmly invite you to join us in each cherished milestone of laughter, song, traditional vows, and auspicious blessings.
        </p>
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
          margin: 3.5rem 0;
        }
        .timeline-header-block {
          text-align: center;
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
