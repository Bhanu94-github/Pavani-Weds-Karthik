# Bride-Side Wedding Invitation Requirements & Configuration Analysis

**Project:** Premium Wedding Invitation Website for the Bride’s Family  
**Bride:** Pavani Kalyani  
**Groom:** Karthik Reddy  
**Wedding Date & Muhurtham:** 20 November 2026, 10:57 AM IST  
**Main Wedding Venue:** Sravya Gardens, Nizamabad, Telangana  

---

## 1. Distinction Between Reference (Groom Side) and Bride Side

The reference website at `https://karthik-wedding-invitation.onrender.com/` was clearly created from the **groom's family perspective**. For our bride-side invitation, the following crucial shifts and verifications are required:

| Dimension | Reference Site (Groom Perspective) | New Bride-Side Invitation |
|---|---|---|
| **Eyebrow / Host Header** | *"A Celebration by the GADE’s"* | Bride's Family celebration (e.g., *"The Family of Pavani Kalyani"* or *"With blessings of the Palivela Family"*, controlled via config) |
| **Couple Names Hierarchy** | Karthik Reddy weds Pavani Kalyani (Groom first) | **Pavani Kalyani & Karthik Reddy** (Bride first, honoring bride family invitation tradition) |
| **Main Wedding Ceremony** | Sravya Gardens, Nizamabad (10:57 AM, 20 Nov 2026) | **Confirmed Common Venue & Muhurtham:** Sravya Gardens, Nizamabad (10:57 AM, 20 Nov 2026) |
| **Mehendi Ceremony** | 18 Nov 2026, 7:00 PM onwards at *"our residence, Srinagar, Nizamabad"* | **Bride's Mehendi:** Awaiting specific bride-residence address / venue confirmation; controlled with configurable venue & map link |
| **Haldi Ceremony** | 19 Nov 2026, 11:00 AM at *"our residence, Srinagar, Nizamabad"* | **Bride's Haldi / Pellikuthuru:** Awaiting specific bride-residence address / venue confirmation; controlled with configurable venue & map link |
| **Sign-off / Signature** | Karthik Reddy & Pavani Kalyani | **Pavani Kalyani & Karthik Reddy & Family** |

> [!WARNING]
> **Strict Privacy & Accuracy Guardrail:**  
> Never assume the bride resides at Srinagar, Nizamabad. The groom's residence in Srinagar must **NOT** be displayed as the bride's home. The new invitation configuration explicitly flags unconfirmed locations with `isAwaitingConfirmation: true` or customizable placeholder descriptions until the bride's family provides the final residence address.

---

## 2. Information Required from the User (Bride's Family)

To customize the invitation with 100% bride-family details, only the following optional items are needed:

1. **Bride's Parents' & Family Names:**
   - *e.g.,* Smt. & Sri [Parents' Names] / "Palivela Family".
2. **Bride's Mehendi & Haldi Venues:**
   - Confirm whether the bride's ceremonies take place at the bride's residence or a banquet venue, with address and Google Maps link.
3. **Official Couple / Bride Photographs:**
   - When ready, gallery image files or couple portraits can be placed into `/public/photos/` or configured in `weddingConfig.ts`.
4. **RSVP Receiving Preferences:**
   - Choose whether RSVPs should be stored locally, sent via WhatsApp message ("RSVP via WhatsApp"), or hooked to a Google Sheet / backend API endpoint.
5. **Background Music:**
   - Selection of an auspicious traditional nadaswaram / shehnai instrumental or celebratory track (royalty-free fallback included).

---

## 3. Bride-Side Visual & Design System

The bride's invitation embraces an exquisite, high-end South Indian / Telugu wedding aesthetic:

- **Color Palette:**
  - **Royal Wine / Deep Crimson:** `#6B1D2F` & `#8B263E` (Auspicious bridal contrast)
  - **Antique Gold / Zari:** `#C5A059` & `#D4AF37` (Ornaments, borders, buttons, accents)
  - **Blush & Rose Silk:** `#E8B4B8` & `#F4DCD6` (Soft floral layers, romantic warmth)
  - **Warm Ivory / Raw Silk Paper:** `#FAF6F0` & `#FDFBF7` (Background radiance)
  - **Forest Jade / Marigold Gold:** Subtle botanical flourishes
- **Typography:**
  - **Headings & Titles:** `Cinzel Decorative`, `Playfair Display`, or `Cormorant Garamond`
  - **Couple Names & Accent Calligraphy:** `Alex Brush` or `Great Vibes`
  - **Body & Information:** `Outfit` / `Inter` (crisp, modern readability for mobile dates and times)
- **Motifs & Flourishes:**
  - Traditional Indian wedding elements: Kalash, paisley, lotus, temple bells, and gold zari ornamental dividers.
- **Key Interactions:**
  - Ceremonial Wax Seal / Envelope opening animation.
  - Interactive "Add to Google Calendar / Apple Calendar (.ics)".
  - One-tap "Get Directions in Google Maps".
  - Native Web Share API + Copy Invitation Link toast.
  - Celebration Music Player (Shehnai/Flute) with auto-play policy compliance (muted by default until user tap).
