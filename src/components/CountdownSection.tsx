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
    title: `Wedding: ${couple.bride.displayName} & ${couple.groom.displayName}`,
    details: `Sumuhūrtham & Wedding celebrations of ${couple.bride.fullName} and ${couple.groom.fullName}.\nVenue: ${mainWedding.venueName}, ${mainWedding.venueAddress}`,
    location: `${mainWedding.venueName}, ${mainWedding.venueAddress}`,
    startIso: mainWedding.isoTimestamp,
    durationHours: 5
  });

  const handleDownloadIcs = () => {
    const blob = generateIcsBlob({
      title: `Wedding: ${couple.bride.displayName} & ${couple.groom.displayName}`,
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
    <section className="countdown-section" aria-labelledby="countdown-title">
      <div className="countdown-header">
        <h2 id="countdown-title" className="section-title">Counting Down to the Sacred Muhūrtham</h2>
        <p className="countdown-target-note">
          {mainWedding.displayDate} • {mainWedding.muhurthamTime} (India Standard Time)
        </p>
      </div>

      {time.isPast ? (
        <div className="wedding-completed-card" role="status">
          <span className="celebration-emoji" aria-hidden="true">🕊️</span>
          <p className="completed-title">The Wedding Day is Here!</p>
          <p className="completed-subtitle">
            With boundless gratitude, we thank you for your presence and heartfelt blessings.
          </p>
        </div>
      ) : (
        <div className="countdown-grid" role="timer" aria-label="Time remaining until wedding">
          <div className="countdown-box">
            <span className="countdown-num">{time.days}</span>
            <span className="countdown-unit">Days</span>
          </div>

          <span className="countdown-separator" aria-hidden="true">:</span>

          <div className="countdown-box">
            <span className="countdown-num">{String(time.hours).padStart(2, '0')}</span>
            <span className="countdown-unit">Hours</span>
          </div>

          <span className="countdown-separator" aria-hidden="true">:</span>

          <div className="countdown-box">
            <span className="countdown-num">{String(time.minutes).padStart(2, '0')}</span>
            <span className="countdown-unit">Minutes</span>
          </div>

          <span className="countdown-separator" aria-hidden="true">:</span>

          <div className="countdown-box">
            <span className="countdown-num">{String(time.seconds).padStart(2, '0')}</span>
            <span className="countdown-unit">Seconds</span>
          </div>
        </div>
      )}

      {/* Add to Calendar Action Button */}
      <div className="calendar-actions-wrapper">
        <button
          type="button"
          className="btn-gold calendar-main-btn"
          onClick={() => setShowCalendarMenu(!showCalendarMenu)}
          aria-expanded={showCalendarMenu}
          aria-haspopup="true"
        >
          <CalendarPlus size={18} />
          <span>Save the Date to Calendar</span>
        </button>

        {showCalendarMenu && (
          <div className="calendar-menu" role="menu">
            <a
              href={gCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="calendar-menu-item"
              role="menuitem"
              onClick={() => setShowCalendarMenu(false)}
            >
              <Calendar size={16} />
              <span>Google Calendar</span>
            </a>
            <button
              type="button"
              className="calendar-menu-item"
              role="menuitem"
              onClick={handleDownloadIcs}
            >
              {icsDownloaded ? <Check size={16} className="text-green" /> : <Download size={16} />}
              <span>{icsDownloaded ? 'Downloaded (.ics)' : 'Apple / Outlook (.ics)'}</span>
            </button>
          </div>
        )}
      </div>

      <div className="botanical-divider" aria-hidden="true">
        <span>❧</span>
      </div>

      <style>{`
        .countdown-section {
          text-align: center;
          margin: 3rem 0;
        }
        .countdown-target-note {
          color: var(--gold-dark);
          font-weight: 600;
          font-size: 0.95rem;
          margin-top: 0.2rem;
          letter-spacing: 0.05em;
        }
        .countdown-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.4rem, 2vw, 1.2rem);
          max-width: 600px;
          margin: 2rem auto;
        }
        .countdown-box {
          background: linear-gradient(145deg, #FFFFFF, var(--paper-cream));
          border: 1px solid var(--gold);
          border-radius: var(--radius-md);
          padding: clamp(0.8rem, 2.5vw, 1.4rem) clamp(0.6rem, 2vw, 1.2rem);
          min-width: clamp(64px, 18vw, 105px);
          box-shadow: 0 6px 18px rgba(110, 29, 47, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform var(--transition-fast);
        }
        .countdown-box:hover {
          transform: translateY(-3px);
        }
        .countdown-num {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 5.5vw, 3.6rem);
          font-weight: 700;
          color: var(--wine);
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .countdown-unit {
          font-size: clamp(0.75rem, 1.5vw, 0.9rem);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--ink-light);
          font-weight: 600;
          margin-top: 0.3rem;
        }
        .countdown-separator {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          color: var(--gold);
          margin-top: -1.2rem;
        }
        .calendar-actions-wrapper {
          position: relative;
          display: inline-block;
          margin-top: 0.8rem;
        }
        .calendar-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--paper-pure);
          border: 1px solid var(--gold);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.5rem;
          min-width: 220px;
          z-index: 50;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .calendar-menu-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius-sm);
          color: var(--wine-dark);
          text-decoration: none;
          background: transparent;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 500;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background-color var(--transition-fast);
        }
        .calendar-menu-item:hover {
          background: var(--blush-soft);
          color: var(--wine);
        }
        .wedding-completed-card {
          background: var(--paper-cream);
          border: 1px solid var(--gold);
          border-radius: var(--radius-md);
          padding: 2rem;
          max-width: 500px;
          margin: 1.5rem auto;
        }
        .celebration-emoji {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .completed-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--wine);
        }
        .completed-subtitle {
          color: var(--ink-light);
          margin-top: 0.4rem;
        }
        .text-green {
          color: #2E7D32;
        }
        @media (max-width: 480px) {
          .countdown-grid {
            gap: 0.25rem;
          }
          .countdown-box {
            min-width: 58px;
            padding: 0.6rem 0.3rem;
          }
        }
      `}</style>
    </section>
  );
};
