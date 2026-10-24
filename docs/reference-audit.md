# Comprehensive Audit of Reference Wedding Website

**Audited URL:** [https://karthik-wedding-invitation.onrender.com/](https://karthik-wedding-invitation.onrender.com/)  
**Audit Date:** 24 October 2026  
**Auditor:** Senior Full-Stack Engineer, UI/UX Designer, QA & Accessibility Engineer  

---

## 1. Executive Summary

The reference website is a single-page wedding invitation hosted on Render, built with plain semantic HTML5, CSS3, and vanilla JavaScript (`app.js`). It is designed for Karthik Reddy and Pavani Kalyani's wedding scheduled for **20 November 2026 at 10:57 AM IST** at **Sravya Gardens, Nizamabad, Telangana**.

The site establishes a clean classical tone with Cormorant Garamond serif typography, decorative botanical ornaments (❧, ✿), and a burgundy/wine color palette (`#70283D`). However, technical and UX auditing reveals significant gaps:
1. **Groom-Centric Framing:** The eyebrow heading states *"A Celebration by the GADE’s"* and couple order is *"Karthik Reddy weds Pavani Kalyani"*, indicating it was published by or for the groom's family.
2. **Backend Non-Functionality:** Both RSVP submission (`POST /api/rsvp`) and summary (`GET /api/rsvp/summary`) fail with **HTTP 500 Internal Server Error** (`{"ok":false,"message":"The RSVP summary is temporarily unavailable. Please check the server configuration."}`). The database/server configuration on Render is disconnected.
3. **Missing Essential Modern Features:** There is no invitation opening/envelope interaction, no native share API, no copy-to-clipboard, no calendar integration (.ics / Google Calendar), no photo gallery, and no background celebratory audio/music controls.
4. **Venue vs. Residence Ambiguity:** Mehendi and Haldi specify *"At our residence, Srinagar, Nizamabad"*, which corresponds to the groom's residence. This must not be reused without confirmation for the bride's invitation.

---

## 2. Complete Section-by-Section Structural Audit

### A. Meta & Document Head
- **Title:** `Karthik Reddy & Pavani Kalyani | Wedding Invitation`
- **Theme Color:** `#f7f0e7` (warm paper/cream)
- **Viewport:** `width=device-width, initial-scale=1`
- **Fonts Loaded:**
  - `Cormorant Garamond` (weights: 400, 500, 600, 700)
  - `Great Vibes` (cursive script for couple names & signature)
- **CSS:** `/styles.css` (249 lines)
- **JS:** `/app.js` (169 lines, deferred)

### B. Header / Hero Section
- **Skip Link:** `<a class="skip-link" href="#main-invitation">Skip to invitation</a>` (Accessible)
- **Framing Elements:** Left and right botanical floral png frames (`/assets/floral-left.png`, `/assets/floral-right.png`).
- **Eyebrow:** *"A Celebration by the GADE’s"* (Explicit groom-family surname).
- **Couple Names:**
  - Groom: *Karthik Reddy*
  - Separator: *weds* (italic Cormorant Garamond)
  - Bride: *Pavani Kalyani*
  - Font: *Great Vibes* script
- **Wedding Metadata Row:**
  - Date: `20 November 2026` (with SVG calendar icon)
  - Time: `10:57 AM` (with SVG clock icon)
  - Venue: `Sravya Gardens, Nizamabad, Telangana` (with SVG map pin icon)
- **Welcome Invitation Text:**
  > *"With the blessings of our families, we joyfully invite you to join us as we begin a beautiful new chapter of our lives. Your presence and blessings will make our wedding celebrations truly special."*
- **Ornamental Divider:** Botanical leaf character `❧`.

### C. Wedding Venue Section
- **Heading:** `Wedding Venue`
- **Venue Name:** `Sravya Gardens`
- **Address:** `Nizamabad, Telangana`
- **Action Link:** `View venue location ↗`
  - URL: `https://maps.app.goo.gl/Sk1w4BNFZi8VtTjXA`
  - Target: `_blank`, `rel="noopener noreferrer"`

### D. Countdown Section
- **Heading:** `Countdown to Our Wedding`
- **Target Timestamp:** `2026-11-20T10:57:00+05:30` (parsed via `Date.parse`)
- **Display Units:** Days, Hours, Minutes, Seconds.
- **Finished State:** Hidden text `<p class="countdown-complete" id="countdown-complete" hidden>The wedding day is here. With love, we look forward to celebrating together.</p>` shown once `remaining <= 0`.
- **Implementation:** `window.setInterval(updateCountdown, 1000)`.

### E. Wedding Events Section
- **Heading:** `Wedding Events`
- **Event Layout:** 3-column CSS grid on desktop, single column stacked on mobile (`@media (max-width: 760px)`).
- **Event 1 — Mehendi:**
  - Date: `18 November 2026`
  - Time: `7:00 PM onwards`
  - Location: `At our residence, Srinagar, Nizamabad`
  - Button: `View residence location ↗` -> `https://maps.app.goo.gl/Yj1qwNNJtdE3b1Pp7`
- **Event 2 — Haldi:**
  - Date: `19 November 2026`
  - Time: `11:00 AM`
  - Location: `At our residence, Srinagar, Nizamabad`
  - Button: `View residence location ↗` -> `https://maps.app.goo.gl/Yj1qwNNJtdE3b1Pp7`
- **Event 3 — Wedding Ceremony:**
  - Date: `20 November 2026`
  - Time: `10:57 AM`
  - Location: `Sravya Gardens, Nizamabad, Telangana`
  - Button: `View venue location ↗` -> `https://maps.app.goo.gl/Sk1w4BNFZi8VtTjXA`

### F. RSVP Section & Functionality Analysis
- **Heading:** `RSVP`
- **Subtitle:** `Please let us know whether you’ll be joining us.`
- **Fields:**
  - `name`: `<input id="guest-name" name="name" type="text" placeholder="Enter your name" maxlength="120" required>`
  - `attendance`: Radio group with 2 options:
    - `coming`: `"Count Us In! ❤️"`
    - `not-coming`: `"Sorry to Miss It [sad emoji]"`
- **Button:** `Submit RSVP` with loading spinner.
- **Live Test Results:**
  - `GET /api/rsvp/summary` -> **Status 500** (`{"ok":false,"message":"The RSVP summary is temporarily unavailable. Please check the server configuration."}`)
  - `POST /api/rsvp` -> **Status 500** (`{"ok":false,"message":"Your response could not be saved. Please try again."}`)
- **Summary Toggle UI:**
  - Accordion dropdown button `RSVP summary ⌃`
  - Displays: `Counting`, `Missing`, `Total responses`
  - Due to server failure, displays `—` and message: *"RSVP summary is unavailable because the server is not connected."*

### G. Closing Section & Footer
- **Closing Message:**
  > *"We look forward to welcoming you to our celebrations. Your presence would mean a great deal to us. We cannot wait to celebrate this memorable occasion with you."*
- **Signature:** `Karthik Reddy & Pavani Kalyani` (in script font with ampersand)
- **Footer Rule:** Fine rule with botanical ornament `❧`.

---

## 3. Responsive & Mobile Assessment of Reference Site
- **Desktop (1024px+):** Centered max-width card (1180px outer, 1050px inner), floral borders on extreme left and right.
- **Tablet (768px):** Event cards collapse to single column. RSVP changes from 2-column inline to stacked.
- **Mobile (<420px):** Floral frames compress to 34px width. Metadata separators hide. Font sizes reduce to prevent breakage.
- **Usability Issues Identified:**
  - On very narrow phones, floral side borders crowd text margins.
  - Script font (*Great Vibes*) is slightly cramped on mobile viewports.
  - No interactive map preview (only external Google Maps links).
  - No "Add to Calendar" button, requiring guests to manually create calendar reminders.
