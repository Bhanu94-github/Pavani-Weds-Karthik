import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send, CheckCircle2, MessageSquare, ChevronDown, ChevronUp, Users, Sparkles } from 'lucide-react';
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
      setErrorMessage('Please indicate whether you will be celebrating with us.');
      return;
    }

    setIsSubmitting(true);

    try {
      saveRsvpLocally(config.storageKey, {
        name: trimmedName,
        attendance,
        guestCount: attendance === 'coming' ? guestCount : 0,
        message: message.trim() || undefined
      });

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
          // Graceful fallback
        }
      }

      setSubmitted(true);

      if (attendance === 'coming') {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#7A1A32', '#FFFDF9', '#E5C378']
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
    <section className="rsvp-luxury-section" aria-labelledby="rsvp-title">
      <div className="rsvp-header-block">
        <span className="eyebrow-tag">Celebrate With Us</span>
        <h2 id="rsvp-title" className="section-heading-luxury">
          RSVP &amp; Attendance
        </h2>
        <p className="section-intro-luxury">
          Your gracious presence and divine blessings will make our wedding celebrations truly unforgettable.
        </p>
      </div>

      <div className="rsvp-luxury-card">
        {submitted ? (
          <div className="rsvp-success-state" role="status" aria-live="polite">
            <CheckCircle2 size={52} className="success-check-icon" />
            <h3 className="success-guest-title">Thank You, {name}!</h3>
            <p className="success-narrative">
              {attendance === 'coming'
                ? `Your attendance response has been received with joy. ${brideName} and ${groomName} look forward to welcoming you!`
                : 'Thank you for letting us know. Your heartfelt prayers and blessings are deeply cherished.'}
            </p>

            {whatsAppUrl && (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-gold whatsapp-confirm-btn"
              >
                <MessageSquare size={18} />
                <span>Confirm Instantly via WhatsApp</span>
              </a>
            )}

            <button
              type="button"
              className="btn-royal-outline rsvp-reset-btn"
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
          <form className="rsvp-luxury-form" onSubmit={handleSubmit} noValidate>
            {errorMessage && (
              <div className="rsvp-error-banner" role="alert">
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="input-field-group">
              <label htmlFor="rsvp-guest-name" className="field-label">
                Your Full Name <span className="gold-star">*</span>
              </label>
              <input
                id="rsvp-guest-name"
                type="text"
                className="luxury-text-input"
                placeholder="Enter your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                maxLength={100}
                required
              />
            </div>

            <fieldset className="input-field-group attendance-fieldset">
              <legend className="field-label">
                Will you be attending the celebrations? <span className="gold-star">*</span>
              </legend>
              <div className="attendance-pill-grid">
                <label className={`attendance-option-pill ${attendance === 'coming' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="attendance"
                    value="coming"
                    checked={attendance === 'coming'}
                    onChange={() => setAttendance('coming')}
                    className="radio-hidden"
                  />
                  <Heart size={18} className="option-icon" />
                  <span>Joyfully Attending! ❤️</span>
                </label>

                <label className={`attendance-option-pill ${attendance === 'not-coming' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="attendance"
                    value="not-coming"
                    checked={attendance === 'not-coming'}
                    onChange={() => setAttendance('not-coming')}
                    className="radio-hidden"
                  />
                  <span>Regretfully Miss It 🕊️</span>
                </label>
              </div>
            </fieldset>

            {attendance === 'coming' && (
              <div className="input-field-group guest-selector-group">
                <label htmlFor="rsvp-guest-count" className="field-label">
                  Number of Attending Guests
                </label>
                <div className="select-with-icon">
                  <Users size={18} className="select-icon" />
                  <select
                    id="rsvp-guest-count"
                    className="luxury-select-input"
                    value={guestCount}
                    onChange={e => setGuestCount(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="input-field-group">
              <label htmlFor="rsvp-message" className="field-label">
                Wishes &amp; Blessings for Pavani &amp; Karthik <span className="optional-tag">(Optional)</span>
              </label>
              <textarea
                id="rsvp-message"
                className="luxury-textarea-input"
                placeholder="Share your affectionate blessings..."
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                maxLength={300}
              />
            </div>

            <div className="form-submit-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-royal-wine submit-action-btn"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Recording RSVP...' : 'Submit RSVP Response'}</span>
                <Sparkles size={16} />
              </button>
            </div>
          </form>
        )}

        {/* Real Device RSVP Summary */}
        <div className="rsvp-drawer-container">
          <button
            type="button"
            className="drawer-toggle-btn"
            onClick={() => setShowSummary(!showSummary)}
            aria-expanded={showSummary}
          >
            <span>Saved Responses on This Device ({summary.total})</span>
            {showSummary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showSummary && (
            <div className="summary-stat-row">
              <div className="stat-box">
                <span className="stat-count">{summary.coming}</span>
                <span className="stat-caption">Attending Guests</span>
              </div>
              <div className="stat-box">
                <span className="stat-count">{summary.notComing}</span>
                <span className="stat-caption">Regrets</span>
              </div>
              <div className="stat-box">
                <span className="stat-count">{summary.total}</span>
                <span className="stat-caption">Total Responses</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="royal-divider" aria-hidden="true">
        <span className="royal-divider-symbol">❖</span>
      </div>

      <style>{`
        .rsvp-luxury-section {
          margin: 3.5rem 0;
          text-align: center;
        }
        .rsvp-luxury-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1.5px solid var(--gold-metallic);
          border-radius: var(--radius-lg);
          padding: clamp(2rem, 5vw, 2.8rem);
          max-width: 680px;
          margin: 0 auto;
          box-shadow: var(--shadow-royal);
          text-align: left;
        }
        .rsvp-error-banner {
          background: rgba(92, 18, 37, 0.1);
          border: 1px solid var(--royal-wine);
          color: var(--royal-wine-deep);
          padding: 0.8rem 1.1rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.4rem;
          font-size: 0.92rem;
          font-weight: 600;
        }
        .input-field-group {
          margin-bottom: 1.4rem;
        }
        .attendance-fieldset {
          border: none;
          padding: 0;
          margin: 0 0 1.4rem 0;
        }
        .field-label {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink-primary);
          margin-bottom: 0.5rem;
        }
        .gold-star {
          color: var(--royal-wine);
        }
        .optional-tag {
          font-weight: 400;
          font-size: 0.84rem;
          color: var(--ink-muted);
        }
        .luxury-text-input, .luxury-textarea-input, .luxury-select-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1.5px solid var(--hairline-gold);
          border-radius: var(--radius-sm);
          background: var(--silk-cream);
          font-family: var(--font-sans);
          font-size: 0.96rem;
          color: var(--ink-primary);
          transition: all 0.2s ease;
        }
        .luxury-text-input:focus, .luxury-textarea-input:focus, .luxury-select-input:focus {
          border-color: var(--gold-metallic);
          background: var(--silk-pure);
          box-shadow: 0 0 12px rgba(212, 175, 55, 0.25);
          outline: none;
        }
        .select-with-icon {
          position: relative;
        }
        .select-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gold-dark);
          pointer-events: none;
        }
        .luxury-select-input {
          padding-left: 2.8rem;
        }
        .attendance-pill-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .attendance-option-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          padding: 0.9rem 1rem;
          border: 1.5px solid var(--hairline-gold);
          border-radius: var(--radius-sm);
          background: var(--silk-cream);
          cursor: pointer;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--ink-primary);
          transition: all 0.2s ease;
        }
        .attendance-option-pill:hover {
          border-color: var(--gold-metallic);
        }
        .attendance-option-pill.selected {
          border-color: var(--royal-wine);
          background: rgba(92, 18, 37, 0.08);
          color: var(--royal-wine-deep);
          box-shadow: 0 0 10px rgba(92, 18, 37, 0.12);
        }
        .radio-hidden {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .option-icon {
          color: var(--royal-wine);
        }
        .form-submit-row {
          margin-top: 1.8rem;
        }
        .submit-action-btn {
          width: 100%;
          padding: 0.95rem;
          font-size: 1.05rem;
        }
        .rsvp-success-state {
          text-align: center;
          padding: 1.8rem 1rem;
        }
        .success-check-icon {
          color: #2E7D32;
          margin-bottom: 0.8rem;
        }
        .success-guest-title {
          font-family: var(--font-display);
          font-size: 1.8rem;
          color: var(--royal-wine);
        }
        .success-narrative {
          color: var(--ink-secondary);
          font-size: 1.02rem;
          max-width: 500px;
          margin: 0.5rem auto 1.8rem;
          line-height: 1.6;
        }
        .whatsapp-confirm-btn {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.95rem;
        }
        .rsvp-reset-btn {
          width: 100%;
        }
        .rsvp-drawer-container {
          margin-top: 2rem;
          border-top: 1px dashed var(--hairline-gold);
          padding-top: 1.2rem;
        }
        .drawer-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent;
          border: none;
          color: var(--gold-dark);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
        }
        .summary-stat-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.9rem;
          margin-top: 1rem;
          text-align: center;
        }
        .stat-box {
          background: var(--silk-cream);
          border: 1px solid var(--hairline-gold);
          border-radius: var(--radius-sm);
          padding: 0.85rem 0.5rem;
        }
        .stat-count {
          display: block;
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--royal-wine);
        }
        .stat-caption {
          font-size: 0.74rem;
          color: var(--ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
        @media (max-width: 550px) {
          .attendance-pill-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
