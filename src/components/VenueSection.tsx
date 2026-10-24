import React, { useState } from 'react';
import { MapPin, Navigation, Car, Sparkles, Building2, Copy, Check } from 'lucide-react';
import { WeddingConfig } from '../types/wedding';

interface Props {
  config: WeddingConfig;
}

export const VenueSection: React.FC<Props> = ({ config }) => {
  const { mainWedding } = config;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${mainWedding.venueName}, ${mainWedding.venueAddress}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="venue-grand-section" aria-labelledby="venue-heading">
      <div className="venue-header-block">
        <span className="eyebrow-tag">Sacred Pavilion</span>
        <h2 id="venue-heading" className="section-heading-luxury">
          The Wedding Venue
        </h2>
        <p className="section-intro-luxury">
          Where sacred vows will be solemnized amidst the fragrance of fresh blossoms and the divine presence of elders.
        </p>
      </div>

      <div className="venue-pavilion-card">
        <div className="pavilion-header">
          <div className="pavilion-emblem" aria-hidden="true">
            <Building2 size={28} />
          </div>
          <div>
            <span className="venue-kicker">Sumuhūrtham &amp; Reception Venue</span>
            <h3 className="venue-name-luxury">{mainWedding.venueName}</h3>
            <p className="venue-address-luxury">{mainWedding.venueAddress}</p>
          </div>
        </div>

        <div className="amenities-badge-row">
          <div className="amenity-badge">
            <Sparkles size={16} className="badge-gold-icon" />
            <span>Air Conditioned Hall</span>
          </div>
          <div className="amenity-badge">
            <Car size={16} className="badge-gold-icon" />
            <span>Spacious Car &amp; Bike Parking</span>
          </div>
          <div className="amenity-badge">
            <MapPin size={16} className="badge-gold-icon" />
            <span>Near Nizamabad Bypass Road</span>
          </div>
        </div>

        <div className="venue-actions-row">
          <a
            href={mainWedding.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal-gold venue-maps-btn"
          >
            <Navigation size={18} />
            <span>Get Directions in Google Maps ↗</span>
          </a>

          <button
            type="button"
            className="btn-royal-outline copy-address-btn"
            onClick={handleCopyAddress}
          >
            {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
            <span>{copied ? 'Address Copied!' : 'Copy Venue Address'}</span>
          </button>
        </div>
      </div>

      <div className="royal-divider" aria-hidden="true">
        <span className="royal-divider-symbol">❖</span>
      </div>

      <style>{`
        .venue-grand-section {
          margin: 3.5rem 0;
          text-align: center;
        }
        .venue-pavilion-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1.5px solid var(--gold-metallic);
          border-radius: var(--radius-lg);
          padding: clamp(2rem, 5vw, 2.8rem);
          max-width: 820px;
          margin: 0 auto;
          box-shadow: var(--shadow-royal);
          position: relative;
        }
        .pavilion-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;
          margin-bottom: 1.8rem;
          text-align: left;
        }
        .pavilion-emblem {
          background: var(--royal-wine);
          color: var(--gold-bright);
          border: 2px solid var(--gold-metallic);
          border-radius: 50%;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 20px rgba(92, 18, 37, 0.25);
        }
        .venue-kicker {
          font-family: var(--font-sans);
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--gold-dark);
          font-weight: 700;
          display: block;
        }
        .venue-name-luxury {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          font-weight: 700;
          color: var(--royal-wine);
          line-height: 1.15;
          margin-top: 0.2rem;
        }
        .venue-address-luxury {
          font-size: 0.96rem;
          color: var(--ink-secondary);
          margin-top: 0.3rem;
          line-height: 1.45;
        }
        .amenities-badge-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }
        .amenity-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--hairline-gold);
          border-radius: var(--radius-full);
          padding: 0.45rem 1rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--ink-primary);
        }
        .badge-gold-icon {
          color: var(--gold-dark);
        }
        .venue-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .venue-maps-btn, .copy-address-btn {
          font-size: 0.98rem;
        }
        .text-green {
          color: #2E7D32;
        }
        @media (max-width: 650px) {
          .pavilion-header {
            flex-direction: column;
            text-align: center;
          }
          .venue-actions-row {
            flex-direction: column;
          }
          .venue-maps-btn, .copy-address-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
