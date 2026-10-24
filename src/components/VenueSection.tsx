import React from 'react';
import { MapPin, Navigation, Car, Sparkles, Building2 } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';

interface Props {
  config: WeddingConfig;
}

export const VenueSection: React.FC<Props> = ({ config }) => {
  const { mainWedding } = config;

  return (
    <section className="venue-grand-section" aria-labelledby="venue-heading">
      <div className="section-header-block">
        <span className="eyebrow-text">Sacred Destination</span>
        <h2 id="venue-heading" className="section-title">The Wedding Venue</h2>
        <p className="section-subtitle">
          Where sacred vows will be solemnized amidst the fragrance of flowers and loved ones.
        </p>
      </div>

      <div className="venue-feature-card">
        <div className="venue-header-banner">
          <div className="venue-badge">
            <Building2 size={24} />
          </div>
          <div>
            <h3 className="venue-card-title">{mainWedding.venueName}</h3>
            <p className="venue-card-address">{mainWedding.venueAddress}</p>
          </div>
        </div>

        <div className="venue-amenities-row">
          <div className="amenity-chip">
            <Sparkles size={16} className="text-gold" />
            <span>Air Conditioned Hall</span>
          </div>
          <div className="amenity-chip">
            <Car size={16} className="text-gold" />
            <span>Spacious Car &amp; Bike Parking</span>
          </div>
          <div className="amenity-chip">
            <MapPin size={16} className="text-gold" />
            <span>Near Nizamabad Bypass Road</span>
          </div>
        </div>

        <div className="venue-actions">
          <a
            href={mainWedding.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold venue-directions-btn"
          >
            <Navigation size={18} />
            <span>Open in Google Maps ↗</span>
          </a>
        </div>
      </div>

      <div className="botanical-divider" aria-hidden="true">
        <span>❧</span>
      </div>

      <style>{`
        .venue-grand-section {
          margin: 3.5rem 0;
          text-align: center;
        }
        .venue-feature-card {
          background: linear-gradient(145deg, var(--paper-pure), var(--paper-cream));
          border: 1px solid var(--gold);
          border-radius: var(--radius-lg);
          padding: clamp(1.8rem, 4vw, 2.5rem);
          max-width: 780px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(110, 29, 47, 0.08);
          position: relative;
        }
        .venue-header-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }
        .venue-badge {
          background: var(--wine);
          color: var(--paper-pure);
          border: 2px solid var(--gold);
          border-radius: 50%;
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(110, 29, 47, 0.2);
        }
        .venue-card-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: var(--wine);
          line-height: 1.1;
        }
        .venue-card-address {
          font-size: 0.95rem;
          color: var(--ink-light);
          margin-top: 0.2rem;
        }
        .venue-amenities-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 1.8rem;
        }
        .amenity-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--paper-pure);
          border: 1px solid var(--hairline);
          border-radius: var(--radius-full);
          padding: 0.4rem 0.9rem;
          font-size: 0.86rem;
          font-weight: 500;
          color: var(--ink);
        }
        .venue-actions {
          display: flex;
          justify-content: center;
        }
        .venue-directions-btn {
          font-size: 1.05rem;
          padding: 0.85rem 2rem;
        }
        .text-gold {
          color: var(--gold-dark);
        }
        @media (max-width: 600px) {
          .venue-header-banner {
            flex-direction: column;
            text-align: center;
          }
          .venue-directions-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
