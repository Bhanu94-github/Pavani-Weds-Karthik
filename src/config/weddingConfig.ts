import { WeddingConfig } from '../types/wedding';

/**
 * Single Source of Truth for Pavani Kalyani & Karthik Reddy's Wedding Invitation
 * (Bride's Family Perspective)
 */
export const weddingConfig: WeddingConfig = {
  couple: {
    bride: {
      fullName: 'Pavani Kalyani',
      displayName: 'Pavani',
      role: 'Bride',
      parents: 'Sri & Smt. Palivela' // Bride's family
    },
    groom: {
      fullName: 'Karthik Reddy',
      displayName: 'Karthik',
      role: 'Groom',
      parents: 'Sri & Smt. Gade' // Groom's family
    },
    hashtag: '#PavaniWedsKarthik'
  },

  familyHeader: {
    invitationKicker: 'Śrī Lakṣmī Prasannā • Wedding Invitation',
    invitationHeading: 'A Joyous Celebration of Love & Heritage',
    blessingWording: 'With the blessings of our elders and family',
    welcomeMessage:
      'Together with their families, we cordially invite you to celebrate the wedding ceremonies of Pavani Kalyani and Karthik Reddy. Your gracious presence, prayers, and blessings are our most cherished gifts as we embark upon this sacred journey.'
  },

  mainWedding: {
    date: '2026-11-20',
    displayDate: 'Friday, 20 November 2026',
    muhurthamTime: '10:57 AM IST',
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
      id: 'event-mehendi',
      title: 'Mehendi Ceremony',
      teluguTitle: 'మెహందీ వేడుక',
      date: '2026-11-18',
      displayDate: 'Wednesday, 18 November 2026',
      startTime: '7:00 PM onwards',
      venueName: 'Bride’s Residence / Family Venue',
      displayAddress: 'Nizamabad, Telangana (Awaiting Bride Residence Confirmation)',
      mapUrl: 'https://maps.google.com/?q=Nizamabad+Telangana',
      description:
        'An evening adorned with intricate henna designs, fragrant blossoms, laughter, music, and celebratory folk melodies.',
      attireNote: 'Suggested Attire: Festive Florals / Vibrant Green or Yellow',
      displayOrder: 1,
      isConfirmedForBrideSide: false,
      isAwaitingConfirmation: true,
      statusNote: 'Exact venue address to be updated upon bride family confirmation',
      iconName: 'sparkles'
    },
    {
      id: 'event-haldi',
      title: 'Haldi & Pellikuthuru',
      teluguTitle: 'పసుపు & పెళ్లికూతురు వేడుక',
      date: '2026-11-19',
      displayDate: 'Thursday, 19 November 2026',
      startTime: '11:00 AM',
      venueName: 'Bride’s Residence / Family Venue',
      displayAddress: 'Nizamabad, Telangana (Awaiting Bride Residence Confirmation)',
      mapUrl: 'https://maps.google.com/?q=Nizamabad+Telangana',
      description:
        'A sacred turmeric ceremony blessing the bride with auspicious radiance, prosperity, love, and joyful rituals with close family.',
      attireNote: 'Suggested Attire: Traditional Yellow, Mustard, or Bright Ochre',
      displayOrder: 2,
      isConfirmedForBrideSide: false,
      isAwaitingConfirmation: true,
      statusNote: 'Exact venue address to be updated upon bride family confirmation',
      iconName: 'sun'
    },
    {
      id: 'event-wedding',
      title: 'Sumuhūrtham & Wedding Ceremony',
      teluguTitle: 'కల్యాణ మహోత్సవం (సుముహూర్తం)',
      date: '2026-11-20',
      displayDate: 'Friday, 20 November 2026',
      startTime: '10:57 AM (Lagna Muhurtham)',
      endTime: 'Lunch & Reception following ceremony',
      venueName: 'Sravya Gardens',
      displayAddress: 'Near Bypass Road, Nizamabad, Telangana 503002',
      mapUrl: 'https://maps.app.goo.gl/Sk1w4BNFZi8VtTjXA',
      description:
        'The sacred vows, Jeelakarra Bellam, Mangalasutra Dharana, and Saptapadi solemnized in the auspicious Dhanur Lagna.',
      attireNote: 'Suggested Attire: Traditional Indian Formal / Silk Sarees & Kurtas',
      displayOrder: 3,
      isConfirmedForBrideSide: true,
      isAwaitingConfirmation: false,
      iconName: 'heart'
    }
  ],

  gallery: {
    enabled: true,
    sectionTitle: 'Moments of Love & Joy',
    sectionSubtitle: 'Treasured memories leading up to our most sacred milestone',
    noticeIfEmpty:
      'Official family and wedding photographs will be uploaded here shortly as our celebrations unfold.',
    photos: [
      {
        id: 'photo-1',
        title: 'Sacred Celebrations',
        caption: 'Traditional moments & auspicious blessings',
        url: '/photos/wedding-art-1.jpg',
        alt: 'Decorative Indian wedding aesthetics and floral elegance',
        aspectRatio: 'landscape',
        isPlaceholder: true
      },
      {
        id: 'photo-2',
        title: 'Auspicious Rituals',
        caption: 'Sacred traditions and family heritage',
        url: '/photos/wedding-art-2.jpg',
        alt: 'Traditional bridal jewelry and festive decor',
        aspectRatio: 'portrait',
        isPlaceholder: true
      },
      {
        id: 'photo-3',
        title: 'Floral Grandeur',
        caption: 'Blossoms of marigold and jasmine',
        url: '/photos/wedding-art-3.jpg',
        alt: 'Fresh floral decorations and wedding ambiance',
        aspectRatio: 'landscape',
        isPlaceholder: true
      }
    ]
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
    storageKey: 'pavani_wedding_rsvp_v1',
    whatsAppRecipientPhone: '919876543210', // Easily configurable phone number for instant WhatsApp RSVP
    deadlineDate: '10 November 2026'
  },

  share: {
    title: 'Wedding Invitation: Pavani Kalyani & Karthik Reddy',
    text: 'You are cordially invited to celebrate the wedding of Pavani Kalyani & Karthik Reddy on 20 November 2026 at Sravya Gardens, Nizamabad.',
    url: typeof window !== 'undefined' ? window.location.href : 'https://pavani-karthik-wedding.pages.dev'
  },

  closing: {
    title: 'With Warmest Regards & Blessings',
    message:
      'We look forward to welcoming you with folded hands and open hearts. Your presence and affectionate blessings will forever illuminate our home and hearts on this blessed day.',
    signOff: 'Pavani Kalyani & Karthik Reddy',
    gratitudeNote: 'Palivela & Gade Families • Nizamabad, Telangana'
  }
};
