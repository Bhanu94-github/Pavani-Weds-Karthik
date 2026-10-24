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

      {/* Ceremonial Wax Seal Entrance */}
      <CeremonialEnvelopeModal
        config={weddingConfig}
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(false)}
      />

      {/* Ultra-clean Luxury Royal Container without any blurry raster side images */}
      <div className="invitation-container" id="main-invitation">
        <main className="invitation-content">
          {/* 1. Opening Regal Invitation Hero */}
          <InvitationHero config={weddingConfig} />

          {/* 2. Muhūrtham Countdown & Save to Calendar */}
          <CountdownSection config={weddingConfig} />

          {/* 3. Ceremonies & Auspicious Itinerary */}
          <EventTimeline events={weddingConfig.events} />

          {/* 4. Wedding Venue & Google Maps Navigation */}
          <VenueSection config={weddingConfig} />

          {/* 5. Smart RSVP & WhatsApp Confirmation */}
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
          <ClosingSection config={weddingConfig} />
        </main>
      </div>

      {/* Falling Romantic Flower Petals */}
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
