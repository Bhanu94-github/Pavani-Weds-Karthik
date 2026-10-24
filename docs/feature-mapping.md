# Feature Mapping Matrix: Reference Website vs New Bride-Side Invitation

| Feature Area | Reference Website (`karthik-wedding-invitation`) | New Redesigned Bride-Side Invitation | Enhancement & Rationale |
|---|---|---|---|
| **Architecture & Stack** | Static HTML + Vanilla JS + CSS (on Render) | React 19 + TypeScript + Vite + Modular Vanilla CSS & Design Tokens | Type safety, maintainability, reusable component hierarchy, dynamic state handling |
| **Perspective** | Groom-side ("A Celebration by the GADE’s") | **Bride-side ("Pavani Kalyani & Karthik Reddy")** | Configurable host family name, respectful bride-first hierarchy |
| **Hero / Entrance** | Static layout, standard scroll | **Ceremonial Invitation Envelope / Hero Opening** with auspicious floral motifs | Creates a regal, celebratory first impression |
| **Countdown Timer** | Vanilla JS `setInterval` to hardcoded ISO string | **Timezone-Aware Countdown (`Asia/Kolkata`)** with live second tick & elapsed state | Handles all timezones accurately, displays elegant gold cards |
| **Ceremony Timeline** | 3 static text cards | **Interactive Visual Timeline** with event cards, ceremonial icons, timings, dress notes, and map triggers | Richer contextual storytelling for Mehendi, Haldi, and Wedding |
| **Google Maps Integration** | External short links only | **Direct Verified Maps Links + Route Guidance + Modal/Coordinates** | Prevents broken shortlink redirects, provides direct driving route button |
| **Add to Calendar** | None | **One-Click Google Calendar & Apple/Outlook (.ics) Export** | Allows guests to save the 10:57 AM muhurtham directly to their devices |
| **Photo Gallery** | Absent | **Responsive Photo Gallery Grid with Lightbox Preview** | Graceful placeholders ready for bride/couple photographs |
| **Background Music** | Absent | **Auspicious Shehnai / Traditional Music Player** with discrete floating audio toggle | User-initiated, accessible, compliant with mobile audio autoplay policies |
| **RSVP System** | Broken backend (HTTP 500 error on Render) | **Dual-Engine RSVP:** LocalStorage persistence + WhatsApp RSVP generator + optional Webhook/API hook | Never fails silently; guarantees guest responses are captured without fake counts |
| **Share Functionality** | None | **Native Web Share API + One-Click Clipboard Copy with Toast Feedback** | Effortless sharing via WhatsApp, Telegram, SMS, and Instagram |
| **Accessibility & Motion** | Basic `skip-link`, minimal contrast checks | **WCAG 2.1 AA Compliant:** ARIA labels, semantic landmark elements, keyboard tab indices, `prefers-reduced-motion` | Inclusive for all family elders and guests across devices |
| **Mobile Experience** | Compressed side borders on narrow viewports (<360px) | **Mobile-First Responsive Design:** Tested for 320px to 4K displays | Zero horizontal overflow, comfortable 48px touch targets |
