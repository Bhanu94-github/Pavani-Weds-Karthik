import React, { useState } from 'react';
import { weddingConfig } from './config/weddingConfig';
import { InvitationHero } from './components/InvitationHero';
import { CountdownSection } from './components/CountdownSection';
import { EventTimeline } from './components/EventTimeline';
import { VenueSection } from './components/VenueSection';
import { PhotoGallery } from './components/PhotoGallery';
import { RSVPForm } from './components/RSVPForm';
import { ShareInvitation } from './components/ShareInvitation';
import { ClosingSection } from './components/ClosingSection';
import { AudioPlayer } from './components/AudioPlayer';
import { CeremonialEnvelopeModal } from './components/CeremonialEnvelopeModal';

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

      <div className="invitation-container" id="main-invitation">
        {/* Left & Right Heritage Floral Border Frames */}
        <img
          className="floral-frame floral-frame--left"
          src="/assets/floral-left.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="floral-frame floral-frame--right"
          src="/assets/floral-right.png"
          alt=""
          aria-hidden="true"
        />

        <main className="invitation-content">
          {/* 1. Opening Invitation Hero */}
          <InvitationHero config={weddingConfig} />

          {/* 2. Muhurtham Countdown & Calendar Integration */}
          <CountdownSection config={weddingConfig} />

          {/* 3. Ceremonies & Events Timeline */}
          <EventTimeline events={weddingConfig.events} />

          {/* 4. Main Wedding Venue & Directions */}
          <VenueSection config={weddingConfig} />

          {/* 5. Photo Gallery & Moments */}
          {weddingConfig.gallery.enabled && (
            <PhotoGallery
              photos={weddingConfig.gallery.photos}
              title={weddingConfig.gallery.sectionTitle}
              subtitle={weddingConfig.gallery.sectionSubtitle}
              noticeIfEmpty={weddingConfig.gallery.noticeIfEmpty}
            />
          )}

          {/* 6. RSVP Form */}
          {weddingConfig.rsvp.enabled && (
            <RSVPForm
              config={weddingConfig.rsvp}
              brideName={weddingConfig.couple.bride.displayName}
              groomName={weddingConfig.couple.groom.displayName}
            />
          )}

          {/* 7. Share Invitation */}
          <ShareInvitation config={weddingConfig.share} onToast={showToast} />

          {/* 8. Graceful Closing */}
          <ClosingSection config={weddingConfig} />
        </main>
      </div>

      {/* Floating Celebratory Audio Player */}
      <AudioPlayer config={weddingConfig.music} />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <aside className="toast-banner" role="status" aria-live="polite">
          <span>{toastMessage}</span>
        </aside>
      )}
    </>
  );
};

export default App;
