export interface WeddingEvent {
  id: string;
  title: string;
  teluguTitle?: string;
  date: string; // YYYY-MM-DD
  displayDate: string; // e.g., "Wednesday, 18 November 2026"
  startTime: string; // e.g., "7:00 PM onwards"
  endTime?: string;
  venueName: string;
  displayAddress: string;
  mapUrl?: string;
  directionsQuery?: string;
  description: string;
  attireNote?: string;
  displayOrder: number;
  isConfirmedForBrideSide: boolean;
  isAwaitingConfirmation: boolean;
  statusNote?: string;
  iconName?: 'sparkles' | 'sun' | 'heart' | 'ring' | 'flower';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption?: string;
  url: string;
  alt: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  isPlaceholder: boolean;
}

export interface MusicTrackConfig {
  enabled: boolean;
  title: string;
  artist: string;
  audioSrc: string; // path to audio file
  defaultAutoplay: boolean; // Must be false per UX and browser policy
}

export interface RsvpConfig {
  enabled: boolean;
  storageKey: string;
  whatsAppRecipientPhone?: string; // If provided, enables instant 1-tap WhatsApp RSVP
  apiEndpoint?: string; // Optional backend POST endpoint if configured
  deadlineDate?: string;
}

export interface ShareConfig {
  title: string;
  text: string;
  url?: string;
}

export interface WeddingConfig {
  couple: {
    bride: {
      fullName: string;
      displayName: string;
      role: 'Bride';
      parents?: string;
    };
    groom: {
      fullName: string;
      displayName: string;
      role: 'Groom';
      parents?: string;
    };
    hashtag?: string;
  };
  familyHeader: {
    invitationKicker: string;
    invitationHeading: string;
    blessingWording: string;
    welcomeMessage: string;
  };
  mainWedding: {
    date: string; // 2026-11-20
    displayDate: string; // Friday, 20 November 2026
    muhurthamTime: string; // 10:57 AM IST
    isoTimestamp: string; // 2026-11-20T10:57:00+05:30
    timezone: string; // Asia/Kolkata
    venueName: string;
    venueAddress: string;
    landmark: string;
    mapUrl: string;
    embedMapQuery: string;
  };
  events: WeddingEvent[];
  gallery: {
    enabled: boolean;
    sectionTitle: string;
    sectionSubtitle: string;
    photos: GalleryPhoto[];
    noticeIfEmpty: string;
  };
  music: MusicTrackConfig;
  rsvp: RsvpConfig;
  share: ShareConfig;
  closing: {
    title: string;
    message: string;
    signOff: string;
    gratitudeNote: string;
  };
}
