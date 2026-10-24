import React from 'react';
import { WeddingEvent } from '../types/wedding';
import { EventCard } from './EventCard';

interface Props {
  events: WeddingEvent[];
}

export const EventTimeline: React.FC<Props> = ({ events }) => {
  // Sort chronologically by date and displayOrder
  const sortedEvents = [...events].sort((a, b) => {
    if (a.date !== b.date) {
      return a.date.localeCompare(b.date);
    }
    return a.displayOrder - b.displayOrder;
  });

  return (
    <section className="events-timeline-section" aria-labelledby="events-heading">
      <div className="section-header-block">
        <span className="eyebrow-text">Ceremonial Itinerary</span>
        <h2 id="events-heading" className="section-title">Wedding Celebrations &amp; Rituals</h2>
        <p className="section-subtitle">
          Join us in each auspicious milestone of laughter, song, traditional rituals, and blessings.
        </p>
      </div>

      <div className="events-cards-grid">
        {sortedEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="botanical-divider" aria-hidden="true">
        <span>✿</span>
      </div>

      <style>{`
        .events-timeline-section {
          margin: 3.5rem 0;
        }
        .section-header-block {
          text-align: center;
          margin-bottom: 2rem;
        }
        .events-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        @media (max-width: 992px) {
          .events-cards-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};
