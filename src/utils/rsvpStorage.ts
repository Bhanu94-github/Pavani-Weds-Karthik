/**
 * RSVP Persistence and WhatsApp Generator
 */

export interface RsvpRecord {
  id: string;
  name: string;
  attendance: 'coming' | 'not-coming';
  guestCount?: number;
  message?: string;
  timestamp: string;
}

export interface RsvpSummary {
  coming: number;
  notComing: number;
  total: number;
}

export function getStoredRsvps(storageKey: string): RsvpRecord[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveRsvpLocally(storageKey: string, record: Omit<RsvpRecord, 'id' | 'timestamp'>): RsvpRecord {
  const existing = getStoredRsvps(storageKey);
  const newRecord: RsvpRecord = {
    ...record,
    id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString()
  };

  const updated = [newRecord, ...existing];
  try {
    localStorage.setItem(storageKey, JSON.stringify(updated));
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }

  return newRecord;
}

export function calculateRsvpSummary(storageKey: string): RsvpSummary {
  const records = getStoredRsvps(storageKey);
  let coming = 0;
  let notComing = 0;

  for (const r of records) {
    if (r.attendance === 'coming') {
      coming += r.guestCount || 1;
    } else {
      notComing += 1;
    }
  }

  return {
    coming,
    notComing,
    total: records.length
  };
}

/**
 * Builds a direct WhatsApp RSVP message link for mobile guests
 */
export function buildWhatsAppRsvpUrl(phone: string, record: { name: string; attendance: string; message?: string }): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const attendanceText = record.attendance === 'coming' ? 'Joyfully Attending! ❤️' : 'Sorry, will be unable to attend in person';
  const text = `Namaste! Here is my RSVP for Pavani Kalyani & Karthik Reddy's Wedding:\n\n*Name:* ${record.name}\n*Response:* ${attendanceText}${record.message ? `\n*Wishes:* ${record.message}` : ''}\n\nLooking forward to celebrating with your family!`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
