# Data Validation and Verification Report

**Validation Date:** 24 October 2026  
**Subject:** Wedding Invitation Verification for Pavani Kalyani & Karthik Reddy  

---

## 1. Verified Core Data Points

| Item | Reference Value | Verification Result | Action in Bride-Side Build |
|---|---|---|---|
| **Bride's Full Name** | Pavani Kalyani | Verified from reference and user request | Configured as primary bride name |
| **Groom's Full Name** | Karthik Reddy | Verified from reference and user request | Configured as groom name |
| **Wedding Date** | 20 November 2026 | Verified across all headers, cards, and metadata | Target date configured in `weddingConfig.ts` |
| **Wedding Muhurtham / Time** | 10:57 AM IST | Verified in hero meta, timeline card, and countdown | ISO timestamp: `2026-11-20T10:57:00+05:30` |
| **Timezone** | `+05:30` (IST) | Verified in reference `app.js` | Enforced explicitly across countdown and calendar generation |
| **Main Wedding Venue** | Sravya Gardens | Verified via Google Search & local directories | Confirmed AC Banquet Hall, Bypass Road, Nizamabad, Telangana 503002 |
| **Main Wedding Venue Link** | `https://maps.app.goo.gl/Sk1w4BNFZi8VtTjXA` | Verified in reference site HTML | Verified link preserved + coordinate fallback `https://maps.google.com/?q=Sravya+Gardens+Nizamabad` |
| **Mehendi Date & Time** | 18 Nov 2026, 7:00 PM onwards | Found on reference site | Listed under schedule with note that bride's venue can be specified |
| **Haldi Date & Time** | 19 Nov 2026, 11:00 AM | Found on reference site | Listed under schedule with note that bride's venue can be specified |
| **Reference Residence Link** | `https://maps.app.goo.gl/Yj1qwNNJtdE3b1Pp7` | Points to Groom's Srinagar residence | **DO NOT ASSUME FOR BRIDE.** Configured with explicit toggle and customizable field |

---

## 2. Reference Endpoint Live Audit

Live HTTP testing was conducted on `https://karthik-wedding-invitation.onrender.com`:

```
POST /api/rsvp -> HTTP 500
Response: {"ok":false,"message":"Your response could not be saved. Please try again."}

GET /api/rsvp/summary -> HTTP 500
Response: {"ok":false,"message":"The RSVP summary is temporarily unavailable. Please check the server configuration."}
```

### Analysis & Mitigation:
1. The reference app is deployed on Render without a configured database or persistent store.
2. In the new bride-side invitation, we do **NOT** display fake RSVP counts or claim a broken backend works.
3. Instead, we implement a robust client-side storage engine (`localStorage`), provide a direct **"RSVP via WhatsApp"** button (which pre-populates a polite attendance message directly to the family's WhatsApp), and allow an optional backend/webhook URL in `weddingConfig.ts` when the family sets up a form backend (e.g., Formspree, Google Sheets, or custom API).

---

## 3. SEO & OpenGraph Audit

The reference website has basic meta tags:
```html
<meta name="description" content="A wedding invitation for Karthik Reddy and Pavani Kalyani, 20 November 2026.">
<title>Karthik Reddy &amp; Pavani Kalyani | Wedding Invitation</title>
```

### New Enhanced SEO & Social Sharing:
- OpenGraph image preview (`og:image`, `twitter:image`).
- Rich preview cards for WhatsApp, iMessage, and social media.
- Title: `Pavani Kalyani & Karthik Reddy | Wedding Invitation`
- Canonical URL configuration.
- Rich snippet schema `Event` / `WeddingEvent` JSON-LD structured data for Google search crawlers.
