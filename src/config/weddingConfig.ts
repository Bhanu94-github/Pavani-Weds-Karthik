import { WeddingConfig } from '../types/wedding';

/**
 * Single Source of Truth for Pavani Kalyani & Karthik Reddy's Wedding Invitation
 * (Bride's Family Perspective - Gaddaguti Family)
 */
export const weddingConfig: WeddingConfig = {
  couple: {
    bride: {
      fullName: 'Pavani Kalyani',
      displayName: 'Pavani',
      role: 'Bride',
      parents: 'D/o Smt. Gaddaguti Pushpa & Sri Gaddaguti Veeraswamy'
    },
    groom: {
      fullName: 'Karthik Reddy',
      displayName: 'Karthik',
      role: 'Groom',
      parents: 'S/o Sri & Smt. Gade'
    },
    hashtag: '#PavaniWedsKarthik'
  },

  familyHeader: {
    invitationKicker: '॥ శ్రీ గణేశాయ నమః ॥',
    invitationHeading: 'Wedding Celebrations',
    blessingWording: 'With the blessings of our beloved family, we cordially invite you to the',
    welcomeMessage:
      'Your gracious presence and heartfelt blessings will make our moments more special and memorable as we begin this sacred new chapter of our lives.'
  },

  mainWedding: {
    date: '2026-11-20',
    displayDate: '20th November 2026 (Friday)',
    muhurthamTime: '10:57 AM (Morning)',
    isoTimestamp: '2026-11-20T10:57:00+05:30',
    timezone: 'Asia/Kolkata',
    venueName: 'Sravya Gardens',
    venueAddress: 'Near Bypass Road, Armoor Road / Kanteshwar, Nizamabad, Telangana 503002',
    landmark: 'Bypass Road, Nizamabad',
    mapUrl: 'https://maps.app.goo.gl/Sk1w4BNFZi8VtTjXA',
    embedMapQuery: 'Sravya+Gardens+Nizamabad+Telangana'
  },

  events: [
    {
      id: 'event-haldi',
      title: 'Haldi Ceremony',
      teluguTitle: 'పసుపు వేడుక (హల్దీ)',
      date: '2026-11-18',
      displayDate: '18th November 2026 (Wednesday)',
      startTime: '6:00 PM (Evening)',
      venueName: 'Bride’s Residence',
      displayAddress: 'At our residence, Nizamabad, Telangana',
      mapUrl: 'https://maps.google.com/?q=Nizamabad+Telangana',
      description:
        'A sacred turmeric ceremony blessing the bride with radiant beauty, love, and auspicious rituals with near and dear ones.',
      attireNote: 'Suggested Attire: Traditional Yellow, Turmeric or Festive Floral Silk',
      displayOrder: 1,
      isConfirmedForBrideSide: true,
      isAwaitingConfirmation: false,
      iconName: 'sun'
    },
    {
      id: 'event-mehendi',
      title: 'Mehendi Ceremony',
      teluguTitle: 'మెహందీ వేడుక',
      date: '2026-11-18',
      displayDate: '18th November 2026 (Wednesday)',
      startTime: '6:00 PM (Evening)',
      venueName: 'Bride’s Residence',
      displayAddress: 'At our residence, Nizamabad, Telangana',
      mapUrl: 'https://maps.google.com/?q=Nizamabad+Telangana',
      description:
        'An enchanting celebration of intricate henna artistry, music, joy, and festive melodies shared with close family.',
      attireNote: 'Suggested Attire: Festive Greens, Vibrant Florals or Silk Kurtas',
      displayOrder: 2,
      isConfirmedForBrideSide: true,
      isAwaitingConfirmation: false,
      iconName: 'sparkles'
    },
    {
      id: 'event-gajula',
      title: 'Gajula Function & Pathanam',
      teluguTitle: 'గాజుల వేడుక & పఠనం',
      date: '2026-11-19',
      displayDate: '19th November 2026 (Thursday)',
      startTime: '11:00 AM (Morning)',
      venueName: 'Bride’s Residence',
      displayAddress: 'At our residence, Nizamabad, Telangana',
      mapUrl: 'https://maps.google.com/?q=Nizamabad+Telangana',
      description:
        'Traditional bangling ceremony (Gajula Function) and auspicious Pathanam prayers adorning the bride with green bangles, floral garlands, and divine blessings.',
      attireNote: 'Suggested Attire: Auspicious Green or Traditional Silk Saree',
      displayOrder: 3,
      isConfirmedForBrideSide: true,
      isAwaitingConfirmation: false,
      iconName: 'flower'
    },
    {
      id: 'event-marriage',
      title: 'Marriage (Sumuhūrtham)',
      teluguTitle: 'కల్యాణ మహోత్సవం (సుముహూర్తం)',
      date: '2026-11-20',
      displayDate: '20th November 2026 (Friday)',
      startTime: '10:57 AM (Morning)',
      endTime: 'Lunch & Reception following ceremony',
      venueName: 'Sravya Gardens',
      displayAddress: 'Near Bypass Road, Nizamabad, Telangana 503002',
      mapUrl: 'https://maps.app.goo.gl/Sk1w4BNFZi8VtTjXA',
      description:
        'The solemn wedding rituals, Jeelakarra Bellam, Mangalasutra Dharana, and Saptapadi solemnized in the sacred presence of family and elders.',
      attireNote: 'Suggested Attire: Traditional Indian Festive / Kanjeevaram Silks & Kurtas',
      displayOrder: 4,
      isConfirmedForBrideSide: true,
      isAwaitingConfirmation: false,
      iconName: 'heart'
    }
  ],

  gallery: {
    enabled: false,
    sectionTitle: 'Moments of Love & Joy',
    sectionSubtitle: 'Treasured memories leading up to our most sacred milestone',
    noticeIfEmpty: '',
    photos: []
  },

  music: {
    enabled: true,
    title: 'Mangala Vādyam (Traditional Shehnai & Flute Harmony)',
    artist: 'Traditional Indian Wedding Melody',
    audioSrc: 'https://assets.mixkit.co/music/preview/mixkit-traditional-indian-wedding-celebration-1076.mp3',
    defaultAutoplay: false
  },

  rsvp: {
    enabled: true,
    storageKey: 'pavani_wedding_rsvp_v2',
    whatsAppRecipientPhone: '919876543210',
    deadlineDate: '10 November 2026'
  },

  share: {
    title: 'Wedding Invitation: Pavani Kalyani & Karthik Reddy',
    text: 'With the blessings of our beloved family, you are cordially invited to the wedding celebrations of Pavani Kalyani & Karthik Reddy on 20 November 2026 at Sravya Gardens, Nizamabad.',
    url: typeof window !== 'undefined' ? window.location.href : 'https://pavani-karthik-wedding.pages.dev'
  },

  closing: {
    title: 'With Grateful Hearts',
    message:
      'We look forward to welcoming you with warmth, affection, and folded hands. Your gracious presence and prayers will forever illuminate this sacred union.',
    signOff: 'With Love, The Families',
    gratitudeNote: 'Gaddaguti & Gade Families • Nizamabad, Telangana'
  }
};
