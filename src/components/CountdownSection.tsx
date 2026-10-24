import React, { useState, useEffect } from 'react';
import { Calendar, CalendarPlus, Download, Check } from 'lucide-react';
import { calculateTimeRemaining, generateGoogleCalendarUrl, generateIcsBlob } from '../utils/dateTime';
import { WeddingConfig } from '../types/wedding';

interface Props {
  config: WeddingConfig;
}

export const CountdownSection: React.FC<Props> = ({ config }) => {
  const { mainWedding, couple } = config;
  const [time, setTime] = useState(() => calculateTimeRemaining(mainWedding.isoTimestamp));
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [icsDownloaded, setIcsDownloaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining(mainWedding.isoTimestamp));
    }, 1000);
    return () => clearInterval(timer);
  }, [mainWedding.isoTimestamp]);

  const gCalUrl = generateGoogleCalendarUrl({
    title: `Wedding Ceremony: ${couple.bride.displayName} & ${couple.groom.displayName}`,
    details: `Sumuhūrtham & Wedding celebrations of ${couple.bride.fullName} and ${couple.groom.fullName}.\nVenue: ${mainWedding.venueName}, ${mainWedding.venueAddress}`,
    location: `${mainWedding.venueName}, ${mainWedding.venueAddress}`,
    startIso: mainWedding.isoTimestamp,
    durationHours: 5
  });

  const handleDownloadIcs = () => {
    const blob = generateIcsBlob({
      title: `Wedding Ceremony: ${couple.bride.displayName} & ${couple.groom.displayName}`,
      details: `Sumuhūrtham & Wedding celebrations of ${couple.bride.fullName} and ${couple.groom.fullName}.\nVenue: ${mainWedding.venueName}, ${mainWedding.venueAddress}`,
      location: `${mainWedding.venueName}, ${mainWedding.venueAddress}`,
      startIso: mainWedding.isoTimestamp,
      durationHours: 5
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Wedding-${couple.bride.displayName}-and-${couple.groom.displayName}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setIcsDownloaded(true);
    setTimeout(() => setIcsDownloaded(false), 3000);
  };

  return (
    <section className="countdown-luxury-section" aria-labelledby="countdown-title">
      <div className="countdown-header-block">
        <span className="eyebrow-tag">Auspicious Countdown</span>
        <h2 id="countdown-title" className="section-heading-luxury">
          Moments Until the Sacred Muhūrtham
        </h2>
        <p className="countdown-timing-note">
          {mainWedding.displayDate} • {mainWedding.muhurthamTime} (India Standard Time)
        </p>
      </div>

      {time.isPast ? (
        <div className="completed-ceremony-card" role="status">
          <span className="ceremony-icon" aria-hidden="true">🕊️</span>
          <h3 className="completed-title">The Auspicious Muhūrtham Has Commenced</h3>
          <p className="completed-text">
            With folded hands, we express our heartfelt gratitude for your divine blessings and love.
          </p>
        </div>
      ) : (
        <div className="countdown-dials-row" role="timer" aria-label="Time remaining until wedding">
          <div className="countdown-dial">
            <div className="dial-inner">
              <span className="dial-value">{time.days}</span>
              <span className="dial-label">Days</span>
            </div>
          </div>

          <span className="dial-divider" aria-hidden="true">❖</span>

          <div className="countdown-dial">
            <div className="dial-inner">
              <span className="dial-value">{String(time.hours).padStart(2, '0')}</span>
              <span className="dial-label">Hours</span>
            </div>
          </div>

          <span className="dial-divider" aria-hidden="true">❖</span>

          <div className="countdown-dial">
            <div className="dial-inner">
              <span className="dial-value">{String(time.minutes).padStart(2, '0')}</span>
              <span className="dial-label">Minutes</span>
            </div>
          </div>

          <span className="dial-divider" aria-hidden="true">❖</span>

          <div className="countdown-dial">
            <div className="dial-inner">
              <span className="dial-value">{String(time.seconds).padStart(2, '0')}</span>
              <span className="dial-label">Seconds</span>
            </div>
          </div>
        </div>
      )}

      {/* Save the Date Action */}
      <div className="calendar-action-container">
        <button
          type="button"
          className="btn-royal-gold"
          onClick={() => setShowCalendarMenu(!showCalendarMenu)}
          aria-expanded={showCalendarMenu}
          aria-haspopup="true"
        >
          <CalendarPlus size={18} />
          <span>Save the Date to Calendar</span>
        </button>

        {showCalendarMenu && (
          <div className="calendar-flyout" role="menu">
            <a
              href={gCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="calendar-flyout-item"
              role="menuitem"
              onClick={() => setShowCalendarMenu(false)}
            >
              <Calendar size={17} />
              <span>Google Calendar</span>
            </a>
            <button
              type="button"
              className="calendar-flyout-item"
              role="menuitem"
              onClick={handleDownloadIcs}
            >
              {icsDownloaded ? <Check size={17} className="text-green" /> : <Download size={17} />}
              <span>{icsDownloaded ? 'Downloaded (.ics)' : 'Apple / Outlook (.ics)'}</span>
            </button>
          </div>
        )}
      </div>

      <div className="royal-divider" aria-hidden="true">
        <span className="royal-divider-symbol">❖</span>
      </div>

      <style>{`
        .countdown-luxury-section {
          text-align: center;
          margin: 3.5rem 0;
        }
        .countdown-timing-note {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--gold-dark);
          letter-spacing: 0.06em;
          margin-top: 0.2rem;
        }
        .countdown-dials-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 2.5vw, 1.4rem);
          max-width: 650px;
          margin: 2.2rem auto;
        }
        .countdown-dial {
          background: linear-gradient(145deg, #FFFFFF, var(--silk-cream));
          border: 1.5px solid var(--gold-metallic);
          border-radius: var(--radius-md);
          padding: 3px;
          box-shadow: 0 10px 24px rgba(92, 18, 37, 0.08), 0 0 15px rgba(212, 175, 55, 0.15);
          transition: transform 0.2s var(--ease-royal);
        }
        .countdown-dial:hover {
          transform: translateY(-4px);
        }
        .dial-inner {
          border: 1px dashed rgba(212, 175, 55, 0.4);
          border-radius: calc(var(--radius-md) - 3px);
          padding: clamp(0.9rem, 2.5vw, 1.4rem) clamp(0.7rem, 2vw, 1.3rem);
          min-width: clamp(65px, 17vw, 105px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dial-value {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5.5vw, 3.4rem);
          font-weight: 700;
          color: var(--royal-wine);
          line-height: 1;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 1px 2px rgba(92, 18, 37, 0.1);
        }
        .dial-label {
          font-family: var(--font-sans);
          font-size: clamp(0.74rem, 1.4vw, 0.86rem);
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--gold-dark);
          font-weight: 700;
          margin-top: 0.4rem;
        }
        .dial-divider {
          font-size: 0.9rem;
          color: var(--gold-metallic);
          opacity: 0.8;
        }
        .calendar-action-container {
          position: relative;
          display: inline-block;
          margin-top: 0.8rem;
        }
        .calendar-flyout {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--silk-pure);
          border: 1.5px solid var(--gold-metallic);
          border-radius: var(--radius-md);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
          padding: 0.5rem;
          min-width: 220px;
          z-index: 50;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .calendar-flyout-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
          color: var(--royal-wine-deep);
          text-decoration: none;
          background: transparent;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background-color 0.15s ease;
        }
        .calendar-flyout-item:hover {
          background: rgba(212, 175, 55, 0.12);
          color: var(--royal-wine);
        }
        .completed-ceremony-card {
          background: var(--silk-pure);
          border: 1.5px solid var(--gold-metallic);
          border-radius: var(--radius-md);
          padding: 2.2rem 1.8rem;
          max-width: 520px;
          margin: 1.5rem auto;
          box-shadow: var(--shadow-royal);
        }
        .ceremony-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .completed-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--royal-wine);
        }
        .completed-text {
          color: var(--ink-secondary);
          margin-top: 0.5rem;
          font-size: 1rem;
        }
        .text-green {
          color: #2E7D32;
        }
        @media (max-width: 500px) {
          .countdown-dials-row {
            gap: 0.35rem;
          }
          .dial-divider {
            display: none;
          }
          .dial-inner {
            min-width: 60px;
            padding: 0.7rem 0.35rem;
          }
        }
      `}</style>
    </section>
  );
};
