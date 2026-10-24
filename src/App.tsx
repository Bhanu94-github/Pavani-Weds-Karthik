import React, { useState } from 'react';
import { weddingConfig } from './config/weddingConfig';
import { InvitationHero } from './components/InvitationHero';
import { CountdownSection } from './components/CountdownSection';
import { EventTimeline } from './components/EventTimeline';
import { VenueSection } from './components/VenueSection';
import { RSVPForm } from './components/RSVPForm';
import { ShareInvitation } from './components/ShareInvitation';
import { ClosingSection } from './components/ClosingSection';
import { AudioPlayer } from './components/AudioPlayer';
import { CeremonialEnvelopeModal } from './components/CeremonialEnvelopeModal';
import { FallingFlowers } from './components/FallingFlowers';
import { RoyalCornerBracket } from './components/RoyalOrnaments';

export const App: React.FC = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <>
      <a className="skip-link" href="#main-invitation">
        Skip to wedding invitation content
      </a>

      {/* Ceremonial 3D Royal Wax Seal Envelope Unboxing */}
      <CeremonialEnvelopeModal
        config={weddingConfig}
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(false)}
      />

      {/* Ultra-luxury Royal Heritage Card Container */}
      <div className="invitation-container" id="main-invitation">
        {/* Four Authentic 24K Gold Zari Filigree Corner Brackets */}
        <RoyalCornerBracket position="top-left" size={72} />
        <RoyalCornerBracket position="top-right" size={72} />
        <RoyalCornerBracket position="bottom-left" size={72} />
        <RoyalCornerBracket position="bottom-right" size={72} />

        <main className="invitation-content">
          {/* 1. Opening Regal Invitation Hero with Royal Scalloped Arch */}
          <InvitationHero config={weddingConfig} />

          {/* 2. Muhūrtham Countdown Dials & Save to Calendar */}
          <CountdownSection config={weddingConfig} />

          {/* 3. WEDDING SCHEDULE (4 Uniform Luxury Event Cards) */}
          <EventTimeline events={weddingConfig.events} />

          {/* 4. Grand Palace Venue & Google Maps Navigation */}
          <VenueSection config={weddingConfig} />

          {/* 5. Royal RSVP Registry & Instant WhatsApp Confirmation */}
          {weddingConfig.rsvp.enabled && (
            <RSVPForm
              config={weddingConfig.rsvp}
              brideName={weddingConfig.couple.bride.displayName}
              groomName={weddingConfig.couple.groom.displayName}
            />
          )}

          {/* 6. Share Invitation & Copy Link */}
          <ShareInvitation config={weddingConfig.share} onToast={showToast} />

          {/* 7. Graceful Family Closing & Auspicious Blessings */}
          <ClosingSection
            config={weddingConfig}
            onReopenEnvelope={() => setIsEnvelopeOpen(true)}
          />
        </main>
      </div>

      {/* Reopen Royal Folio Floating Quick Trigger (shows once unboxed) */}
      {!isEnvelopeOpen && (
        <button
          type="button"
          className="reopen-folio-floating-btn"
          onClick={() => setIsEnvelopeOpen(true)}
          title="Reopen Ceremonial Wedding Folio"
          aria-label="Reopen Ceremonial Wedding Folio"
        >
          <span aria-hidden="true">✉️</span>
          <span>Royal Folio</span>
        </button>
      )}

      {/* Falling Romantic Rose & Jasmine Petals */}
      <FallingFlowers />

      {/* Floating Traditional Shehnai / Music Player */}
      <AudioPlayer config={weddingConfig.music} />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <aside className="toast-luxury-banner" role="status" aria-live="polite">
          <span>{toastMessage}</span>
        </aside>
      )}
    </>
  );
};

export default App;
