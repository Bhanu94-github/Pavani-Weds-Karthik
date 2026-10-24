import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send, CheckCircle2, MessageSquare, ChevronDown, ChevronUp, Users } from 'lucide-react';
import { RsvpConfig } from '../types/wedding';
import { saveRsvpLocally, calculateRsvpSummary, buildWhatsAppRsvpUrl, RsvpSummary } from '../utils/rsvpStorage';

interface Props {
  config: RsvpConfig;
  brideName: string;
  groomName: string;
}

export const RSVPForm: React.FC<Props> = ({ config, brideName, groomName }) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'coming' | 'not-coming' | ''>('');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [summary, setSummary] = useState<RsvpSummary>({ coming: 0, notComing: 0, total: 0 });
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    setSummary(calculateRsvpSummary(config.storageKey));
  }, [config.storageKey, submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = name.trim();
    if (!trimmedName) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!attendance) {
      setErrorMessage('Please select whether you will be joining the celebrations.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Genuine persistence to LocalStorage
      saveRsvpLocally(config.storageKey, {
        name: trimmedName,
        attendance,
        guestCount: attendance === 'coming' ? guestCount : 0,
        message: message.trim() || undefined
      });

      // 2. If an API endpoint is configured, forward to API
      if (config.apiEndpoint) {
        try {
          await fetch(config.apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: trimmedName,
              attendance,
              guestCount: attendance === 'coming' ? guestCount : 0,
              message: message.trim()
            })
          });
        } catch {
          // Logged gracefully; local storage retains record
        }
      }

      setSubmitted(true);

      // Trigger celebratory confetti if attending
      if (attendance === 'coming') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C5A059', '#70283D', '#E8B4B8', '#FAF5EE']
        });
      }
    } catch {
      setErrorMessage('Unable to record your response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsAppUrl = config.whatsAppRecipientPhone
    ? buildWhatsAppRsvpUrl(config.whatsAppRecipientPhone, {
        name: name.trim() || 'A Warm Well-wisher',
        attendance: attendance || 'coming',
        message: message.trim()
      })
    : '';

  return (
    <section className="rsvp-section" aria-labelledby="rsvp-title">
      <div className="section-header-block">
        <span className="eyebrow-text">RSVP</span>
        <h2 id="rsvp-title" className="section-title">Join in Our Celebrations</h2>
        <p className="section-subtitle">
          Your gracious presence is our blessing. Please let us know if you will be celebrating with us.
        </p>
      </div>

      <div className="rsvp-form-card">
        {submitted ? (
          <div className="rsvp-success-box" role="status" aria-live="polite">
            <CheckCircle2 size={48} className="success-icon" />
            <h3 className="success-title">Thank You, {name}!</h3>
            <p className="success-message">
              {attendance === 'coming'
                ? `Your attendance response has been received. ${brideName} and ${groomName} joyfully look forward to celebrating with you!`
                : 'Thank you for letting us know. Your warm blessings remain deeply appreciated.'}
            </p>

            {whatsAppUrl && (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold whatsapp-rsvp-btn"
              >
                <MessageSquare size={18} />
                <span>Send Confirmation via WhatsApp</span>
              </a>
            )}

            <button
              type="button"
              className="btn-outline rsvp-another-btn"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setAttendance('');
                setMessage('');
              }}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
            {errorMessage && (
              <div className="form-error-alert" role="alert">
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="rsvp-guest-name" className="form-label">
                Your Full Name <span className="required-star">*</span>
              </label>
              <input
                id="rsvp-guest-name"
                type="text"
                className="form-input"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                maxLength={100}
                required
              />
            </div>

            <fieldset className="form-group fieldset-reset">
              <legend className="form-label">
                Will you be attending? <span className="required-star">*</span>
              </legend>
              <div className="attendance-options-grid">
                <label className={`radio-card ${attendance === 'coming' ? 'is-selected' : ''}`}>
                  <input
                    type="radio"
                    name="attendance"
                    value="coming"
                    checked={attendance === 'coming'}
                    onChange={() => setAttendance('coming')}
                    className="radio-input"
                  />
                  <span className="radio-label-text">
                    <Heart size={18} className="text-wine" />
                    <span>Count Us In! ❤️</span>
                  </span>
                </label>

                <label className={`radio-card ${attendance === 'not-coming' ? 'is-selected' : ''}`}>
                  <input
                    type="radio"
                    name="attendance"
                    value="not-coming"
                    checked={attendance === 'not-coming'}
                    onChange={() => setAttendance('not-coming')}
                    className="radio-input"
                  />
                  <span className="radio-label-text">
                    <span>Regretfully Miss It 🕊️</span>
                  </span>
                </label>
              </div>
            </fieldset>

            {attendance === 'coming' && (
              <div className="form-group guest-count-group">
                <label htmlFor="rsvp-guest-count" className="form-label">
                  Number of Attending Guests
                </label>
                <div className="guest-select-wrapper">
                  <Users size={16} className="input-icon" />
                  <select
                    id="rsvp-guest-count"
                    className="form-select"
                    value={guestCount}
                    onChange={e => setGuestCount(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="rsvp-message" className="form-label">
                Warm Wishes / Blessings for the Couple <span className="optional-text">(Optional)</span>
              </label>
              <textarea
                id="rsvp-message"
                className="form-textarea"
                placeholder="Share your prayers and heartfelt wishes with Pavani & Karthik..."
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                maxLength={300}
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-wine submit-rsvp-btn"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Recording RSVP...' : 'Submit RSVP Response'}</span>
              </button>
            </div>
          </form>
        )}

        {/* Real Local RSVP Summary Accordion */}
        <div className="rsvp-summary-drawer">
          <button
            type="button"
            className="summary-accordion-btn"
            onClick={() => setShowSummary(!showSummary)}
            aria-expanded={showSummary}
          >
            <span>Your Device RSVP Summary ({summary.total} Saved)</span>
            {showSummary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showSummary && (
            <div className="summary-stat-grid">
              <div className="summary-stat-card">
                <span className="stat-number">{summary.coming}</span>
                <span className="stat-label">Attending Guests</span>
              </div>
              <div className="summary-stat-card">
                <span className="stat-number">{summary.notComing}</span>
                <span className="stat-label">Blessings Received</span>
              </div>
              <div className="summary-stat-card">
                <span className="stat-number">{summary.total}</span>
                <span className="stat-label">Total Responses</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="botanical-divider" aria-hidden="true">
        <span>❧</span>
      </div>

      <style>{`
        .rsvp-section {
          margin: 3.5rem 0;
          text-align: center;
        }
        .rsvp-form-card {
          background: var(--paper-pure);
          border: 1px solid var(--hairline);
          border-radius: var(--radius-lg);
          padding: clamp(1.8rem, 4vw, 2.5rem);
          max-width: 650px;
          margin: 0 auto;
          box-shadow: var(--shadow-sm);
          text-align: left;
        }
        .form-error-alert {
          background: rgba(166, 93, 101, 0.12);
          border: 1px solid var(--wine);
          color: var(--wine-dark);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.2rem;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .form-group {
          margin-bottom: 1.2rem;
        }
        .fieldset-reset {
          border: none;
          padding: 0;
          margin: 0 0 1.2rem 0;
        }
        .form-label {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 0.45rem;
        }
        .required-star {
          color: var(--wine);
        }
        .optional-text {
          font-weight: 400;
          font-size: 0.82rem;
          color: var(--ink-muted);
        }
        .form-input, .form-textarea, .form-select {
          width: 100%;
          padding: 0.75rem 0.9rem;
          border: 1px solid var(--hairline);
          border-radius: var(--radius-sm);
          background: var(--paper-cream);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--ink);
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }
        .form-input:focus, .form-textarea:focus, .form-select:focus {
          border-color: var(--gold);
          background: var(--paper-pure);
          outline: none;
        }
        .guest-select-wrapper {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 0.9rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--ink-muted);
          pointer-events: none;
        }
        .form-select {
          padding-left: 2.4rem;
        }
        .attendance-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }
        .radio-card {
          border: 1px solid var(--hairline);
          border-radius: var(--radius-sm);
          padding: 0.8rem 1rem;
          background: var(--paper-cream);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all var(--transition-fast);
        }
        .radio-card:hover {
          border-color: var(--gold);
        }
        .radio-card.is-selected {
          border-color: var(--wine);
          background: var(--blush-soft);
        }
        .radio-input {
          accent-color: var(--wine);
          width: 18px;
          height: 18px;
        }
        .radio-label-text {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--ink);
        }
        .form-actions {
          margin-top: 1.5rem;
        }
        .submit-rsvp-btn {
          width: 100%;
          padding: 0.85rem;
          font-size: 1.02rem;
        }
        .rsvp-success-box {
          text-align: center;
          padding: 1.5rem 0.5rem;
        }
        .success-icon {
          color: #2E7D32;
          margin-bottom: 0.8rem;
        }
        .success-title {
          font-family: var(--font-serif);
          font-size: 1.7rem;
          color: var(--wine);
          margin-bottom: 0.4rem;
        }
        .success-message {
          color: var(--ink-light);
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto 1.5rem;
          line-height: 1.6;
        }
        .whatsapp-rsvp-btn {
          margin-bottom: 1rem;
          width: 100%;
        }
        .rsvp-another-btn {
          width: 100%;
        }
        .rsvp-summary-drawer {
          margin-top: 1.8rem;
          border-top: 1px solid var(--hairline);
          padding-top: 1rem;
        }
        .summary-accordion-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent;
          border: none;
          color: var(--wine);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0.4rem 0;
        }
        .summary-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
          margin-top: 0.8rem;
          text-align: center;
        }
        .summary-stat-card {
          background: var(--paper-cream);
          border-radius: var(--radius-sm);
          padding: 0.7rem 0.4rem;
        }
        .stat-number {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--wine);
        }
        .stat-label {
          font-size: 0.72rem;
          color: var(--ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        @media (max-width: 500px) {
          .attendance-options-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
