import React, { useState, useEffect } from 'react';
import { Calendar, CalendarPlus, Download, Check } from 'lucide-react';
import { calculateTimeRemaining, generateGoogleCalendarUrl, generateIcsBlob } from '../utils/dateTime';
import { WeddingConfig } from '../types/wedding';
import { LotusGarlandDivider } from './RoyalOrnaments';

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
    <section className="countdown-royal-section" aria-labelledby="countdown-title">
      <div className="countdown-header-block">
        <span className="eyebrow-tag">Sacred Timeline</span>
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
        <div className="royal-dials-showcase" role="timer" aria-label="Time remaining until wedding">
          {/* Days Dial */}
          <div className="royal-arch-dial">
            <div className="arch-dial-inner">
              <span className="arch-dial-number">{time.days}</span>
              <span className="arch-dial-unit">Days</span>
            </div>
            <div className="dial-base-accent"></div>
          </div>

          <span className="dial-flourish-separator" aria-hidden="true">✦</span>

          {/* Hours Dial */}
          <div className="royal-arch-dial">
            <div className="arch-dial-inner">
              <span className="arch-dial-number">{String(time.hours).padStart(2, '0')}</span>
              <span className="arch-dial-unit">Hours</span>
            </div>
            <div className="dial-base-accent"></div>
          </div>

          <span className="dial-flourish-separator" aria-hidden="true">✦</span>

          {/* Minutes Dial */}
          <div className="royal-arch-dial">
            <div className="arch-dial-inner">
              <span className="arch-dial-number">{String(time.minutes).padStart(2, '0')}</span>
              <span className="arch-dial-unit">Minutes</span>
            </div>
            <div className="dial-base-accent"></div>
          </div>

          <span className="dial-flourish-separator" aria-hidden="true">✦</span>

          {/* Seconds Dial */}
          <div className="royal-arch-dial seconds-dial">
            <div className="arch-dial-inner">
              <span className="arch-dial-number">{String(time.seconds).padStart(2, '0')}</span>
              <span className="arch-dial-unit">Seconds</span>
            </div>
            <div className="dial-base-accent"></div>
          </div>
        </div>
      )}

      {/* Save the Date Action Plaque */}
      <div className="calendar-action-container">
        <button
          type="button"
          className="btn-royal-gold calendar-plaque-btn"
          onClick={() => setShowCalendarMenu(!showCalendarMenu)}
          aria-expanded={showCalendarMenu}
          aria-haspopup="true"
        >
          <CalendarPlus size={19} />
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

      <LotusGarlandDivider className="countdown-bottom-garland" />

      <style>{`
        .countdown-royal-section {
          text-align: center;
          margin: 3.5rem 0;
        }
        .countdown-timing-note {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.98rem;
          color: var(--gold-dark);
          letter-spacing: 0.08em;
          margin-top: 0.3rem;
        }
        .royal-dials-showcase {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 2.5vw, 1.5rem);
          max-width: 680px;
          margin: 2.2rem auto;
        }
        .royal-arch-dial {
          position: relative;
          background: linear-gradient(180deg, #5C1225 0%, #3D0814 100%);
          border: 2px solid var(--gold-metallic);
          border-radius: 36px 36px 12px 12px;
          padding: 3px;
          box-shadow:
            0 12px 28px rgba(61, 8, 20, 0.25),
            0 0 20px rgba(212, 175, 55, 0.25),
            inset 0 2px 4px rgba(255, 255, 255, 0.2);
          transition: transform 0.25s var(--ease-royal);
        }
        .royal-arch-dial:hover {
          transform: translateY(-4px);
        }
        .arch-dial-inner {
          border: 1px dashed rgba(212, 175, 55, 0.45);
          border-radius: 32px 32px 8px 8px;
          padding: clamp(1rem, 2.8vw, 1.6rem) clamp(0.8rem, 2vw, 1.4rem);
          min-width: clamp(68px, 18vw, 112px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .arch-dial-number {
          font-family: var(--font-display);
          font-size: clamp(2.3rem, 5.8vw, 3.6rem);
          font-weight: 800;
          color: #FFF4D4;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 12px rgba(212, 175, 55, 0.4);
        }
        .arch-dial-unit {
          font-family: var(--font-sans);
          font-size: clamp(0.72rem, 1.4vw, 0.84rem);
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: var(--gold-light);
          font-weight: 700;
          margin-top: 0.45rem;
          opacity: 0.95;
        }
        .dial-base-accent {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold-bright), transparent);
          border-radius: 0 0 8px 8px;
        }
        .dial-flourish-separator {
          font-size: 1.1rem;
          color: var(--gold-metallic);
          filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.5));
        }
        .calendar-action-container {
          position: relative;
          display: inline-block;
          margin-top: 1rem;
        }
        .calendar-plaque-btn {
          padding: 0.95rem 2.2rem;
          font-size: 1.02rem;
          letter-spacing: 0.05em;
        }
        .calendar-flyout {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--silk-pure);
          border: 1.5px solid var(--gold-metallic);
          border-radius: var(--radius-md);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
          padding: 0.55rem;
          min-width: 230px;
          z-index: 50;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .calendar-flyout-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.7rem 1.1rem;
          border-radius: var(--radius-sm);
          color: var(--royal-wine-deep);
          text-decoration: none;
          background: transparent;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.94rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background-color 0.15s ease;
        }
        .calendar-flyout-item:hover {
          background: rgba(212, 175, 55, 0.14);
          color: var(--royal-wine);
        }
        .countdown-bottom-garland {
          margin: 2.2rem auto 1rem;
        }
        .completed-ceremony-card {
          background: var(--silk-pure);
          border: 2px solid var(--gold-metallic);
          border-radius: var(--radius-md);
          padding: 2.4rem 2rem;
          max-width: 520px;
          margin: 1.5rem auto;
          box-shadow: var(--shadow-royal);
        }
        .ceremony-icon {
          font-size: 2.8rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .completed-title {
          font-family: var(--font-display);
          font-size: 1.65rem;
          font-weight: 700;
          color: var(--royal-wine);
        }
        .completed-text {
          color: var(--ink-secondary);
          margin-top: 0.5rem;
          font-size: 1.02rem;
        }
        .text-green {
          color: #2E7D32;
        }
        @media (max-width: 550px) {
          .royal-dials-showcase {
            gap: 0.35rem;
          }
          .dial-flourish-separator {
            display: none;
          }
          .arch-dial-inner {
            min-width: 64px;
            padding: 0.8rem 0.35rem;
          }
          .calendar-plaque-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
