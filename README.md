# Pavani Kalyani & Karthik Reddy — Premium Wedding Invitation Website
> **Designed & Architected for the Bride’s Family**

A mobile-first, high-performance wedding invitation web application crafted for **Pavani Kalyani & Karthik Reddy’s** wedding on **20 November 2026** at **Sravya Gardens, Nizamabad, Telangana**.

---

## 🌟 Key Features & Design Highlights

1. **Bride-First Heritage Design System:**
   - Luxurious South Indian / Telugu wedding palette: Blush Pink (`#E8B4B8`), Warm Cream Silk (`#FAF5EE`), Antique Gold (`#C5A059`), Dusty Rose (`#A65D65`), and Royal Burgundy Wine (`#6B1D2F`).
   - Cormorant Garamond serif headings, Great Vibes calligraphic couple signatures, and clean Outfit sans-serif body typography.
   - Traditional auspicious shloka invocation: *॥ శ్రీ లక్ష్మీ ప్రసన్నా ॥*.
2. **Ceremonial Wax Seal Entrance (`CeremonialEnvelopeModal`):**
   - Interactive ceremonial entrance envelope with a custom gold-embossed **PK** wax seal.
   - Smooth opening transition accompanied by celebratory confetti animation.
3. **Timezone-Aware Muhūrtham Countdown (`CountdownSection`):**
   - Live Days, Hours, Minutes, and Seconds countdown to **20 November 2026, 10:57 AM IST (`Asia/Kolkata`)**.
   - Graceful post-wedding completion status card.
   - **One-Click Calendar Integration:** Export directly to **Google Calendar** or download an **Apple / Outlook (`.ics`)** calendar event.
4. **Chronological Ceremonies Timeline (`EventTimeline` & `EventCard`):**
   - Detailed ritual cards for:
     - **Mehendi Ceremony** (18 Nov 2026, 7:00 PM onwards)
     - **Haldi & Pellikuthuru** (19 Nov 2026, 11:00 AM)
     - **Sumuhūrtham & Wedding Ceremony** (20 Nov 2026, 10:57 AM)
   - Distinct confirmation badges ensuring unconfirmed bride residence addresses are never misrepresented as the groom's residence.
5. **Verified Wedding Venue Section (`VenueSection`):**
   - Prominent spotlight for **Sravya Gardens**, Nizamabad, Telangana.
   - One-tap *"Open in Google Maps"* direct routing link and amenity highlights (AC banquet hall, dining hall, spacious parking).
6. **Responsive Visual Photo Gallery (`PhotoGallery`):**
   - Cultural motif placeholders (`wedding-art-1.jpg`, etc.) that load instantly.
   - Built-in full-screen Lightbox modal zoom.
   - Simple drop-in replacement workflow for official bride & couple photographs.
7. **Dual-Engine RSVP System (`RSVPForm`):**
   - **Client-Side Persistence:** Submissions are saved immediately into `localStorage`.
   - **1-Tap WhatsApp RSVP:** Auto-formats a respectful Telugu/English WhatsApp message sent directly to the bride family’s coordinator.
   - Real-time attendance counters without fake stats or broken server errors.
8. **Sharing & Clipboard Integration (`ShareInvitation`):**
   - Native Web Share API trigger on mobile devices.
   - Copy-to-clipboard link fallback with toast notifications.
   - Direct WhatsApp share link with pre-composed invitation text.
9. **Celebratory Auspicious Music (`AudioPlayer`):**
   - Traditional Shehnai & Nadaswaram instrumental melody.
   - Complies strictly with mobile autoplay policies (muted by default until user tap).
   - Floating audio badge with pulsing rhythm indicator.
10. **Accessibility & Responsive Standards:**
    - WCAG 2.1 AA compliant colors and contrast.
    - Semantic HTML landmarks, keyboard navigation, and `skip-link`.
    - Support for `prefers-reduced-motion`.
    - Tested from 320px mobile viewports up to 4K displays with zero horizontal scroll.

---

## 📁 Project Architecture & Directory Layout

```
Pavani-Invitation/
├── docs/
│   ├── reference-audit.md          # Complete audit of https://karthik-wedding-invitation.onrender.com/
│   ├── reference-events.json        # Extracted structured event & venue JSON
│   ├── bride-side-requirements.md   # Groom vs bride family distinction & requirements
│   ├── feature-mapping.md           # Reference vs redesigned feature matrix
│   └── data-validation-report.md    # API, venue, timezone, and verification records
├── public/
│   ├── assets/
│   │   ├── floral-left.png          # Botanical floral border (left)
│   │   └── floral-right.png         # Botanical floral border (right)
│   ├── photos/
│   │   ├── wedding-art-1.jpg        # Sacred Celebrations placeholder artwork
│   │   ├── wedding-art-2.jpg        # Auspicious Rituals placeholder artwork
│   │   └── wedding-art-3.jpg        # Floral Grandeur placeholder artwork
│   └── _headers                     # Security and cache headers for Cloudflare Pages
├── src/
│   ├── components/
│   │   ├── CeremonialEnvelopeModal.tsx # Wax seal envelope opening modal
│   │   ├── InvitationHero.tsx          # Regal header & couple names
│   │   ├── CountdownSection.tsx        # Timezone countdown & calendar export
│   │   ├── EventTimeline.tsx           # Chronological ceremony list
│   │   ├── EventCard.tsx               # Individual ritual card
│   │   ├── VenueSection.tsx            # Sravya Gardens feature spotlight
│   │   ├── PhotoGallery.tsx            # Gallery grid with lightbox
│   │   ├── RSVPForm.tsx                # Dual-engine RSVP with WhatsApp & LocalStorage
│   │   ├── ShareInvitation.tsx         # Web Share API & Copy Link
│   │   ├── AudioPlayer.tsx             # Floating Shehnai music player
│   │   └── ClosingSection.tsx          # Family blessings & couple signatures
│   ├── config/
│   │   └── weddingConfig.ts            # SINGLE SOURCE OF TRUTH FOR ALL CONTENT
│   ├── types/
│   │   └── wedding.ts                  # TypeScript models and interfaces
│   ├── utils/
│   │   ├── dateTime.ts                 # Timezone and calendar export helpers
│   │   ├── rsvpStorage.ts              # LocalStorage and WhatsApp RSVP helpers
│   │   └── sharing.ts                  # Native share and clipboard helpers
│   ├── App.tsx                         # Main invitation application component
│   ├── index.css                       # Design tokens, themes, and CSS variables
│   └── main.tsx                        # React 18 DOM mount
├── test/
│   └── wedding.test.ts                 # Automated unit test suite
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json                         # Vercel deployment configuration
└── README.md
```

---

## 🛠️ Single Source of Truth Configuration

All text, dates, events, addresses, photos, phone numbers, and music are managed centrally in:
👉 [`src/config/weddingConfig.ts`](file:///c:/Users/BhanuPrakashPalivela/Downloads/Pavani-Invitation/src/config/weddingConfig.ts)

### How to update details:
- **Bride & Groom Names / Parents:** Edit `weddingConfig.couple`.
- **Venue & Google Maps Link:** Edit `weddingConfig.mainWedding`.
- **Mehendi & Haldi Venues:** Update the `venueName`, `displayAddress`, and `mapUrl` under `weddingConfig.events`. Set `isAwaitingConfirmation: false` once confirmed.
- **WhatsApp RSVP Phone Number:** Update `weddingConfig.rsvp.whatsAppRecipientPhone` with the family coordinator's 10-digit number.
- **Photos:** Drop your photos into `public/photos/` and configure their filenames in `weddingConfig.gallery.photos`.

---

## 🚀 Development & Build Commands

### Prerequisites
- Node.js `v18+` or `v20+` or `v24+`
- npm `v9+` or `v11+`

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live website.

### 3. Run Automated Tests
```bash
npm test
```
Executes the comprehensive TypeScript test suite in `test/wedding.test.ts`.

### 4. Build for Production
```bash
npm run build
```
Generates a minified, type-checked production bundle in `dist/`.

---

## 🌐 Deployment Instructions

### Option 1: Cloudflare Pages (Recommended - Fastest & Free)
1. Push this repository to GitHub or GitLab.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select this repository and configure:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Your custom live URL (e.g., `https://pavani-karthik-wedding.pages.dev`) will be generated.

### Option 2: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or import the repo at [vercel.com](https://vercel.com).
2. The included `vercel.json` automatically configures Vite build settings and clean SPA routing.
3. Run `vercel --prod` to deploy.

### Option 3: Netlify
1. Connect repo on [Netlify](https://www.netlify.com/).
2. Set build command to `npm run build` and publish directory to `dist`.
3. Deploy!

---

## 📋 Information Checklist for Bride’s Family (Optional Customizations)

The website is 100% production-ready. When available, the family can provide:
1. **Bride’s Parents’ Names:** (Currently defaulted in config to *Sri & Smt. Palivela*).
2. **Bride's Mehendi & Haldi Addresses:** (Currently defaulted with an *Awaiting Bride Confirmation* status pill).
3. **WhatsApp RSVP Phone Number:** (Currently set to placeholder coordinator number).
4. **Couple / Family Photographs:** (Currently displayed with culturally designed traditional motif placeholders).
