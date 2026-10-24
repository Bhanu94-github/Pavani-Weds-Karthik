/**
 * Date, Time, and Calendar helpers for Asia/Kolkata timezone
 */

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  totalSecondsRemaining: number;
}

export function calculateTimeRemaining(targetIsoString: string): TimeRemaining {
  const targetTime = new Date(targetIsoString).getTime();
  const now = Date.now();
  const diff = targetTime - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPast: true,
      totalSecondsRemaining: 0
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isPast: false,
    totalSecondsRemaining: totalSeconds
  };
}

/**
 * Generates an Add to Google Calendar link
 */
export function generateGoogleCalendarUrl(params: {
  title: string;
  details: string;
  location: string;
  startIso: string; // e.g. 2026-11-20T10:57:00+05:30
  durationHours?: number;
}): string {
  const startDate = new Date(params.startIso);
  const durationMs = (params.durationHours || 4) * 60 * 60 * 1000;
  const endDate = new Date(startDate.getTime() + durationMs);

  const formatGCalDate = (d: Date) =>
    d.toISOString().replace(/-|:|\.\d+/g, '');

  const datesParam = `${formatGCalDate(startDate)}/${formatGCalDate(endDate)}`;

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', params.title);
  url.searchParams.set('details', params.details);
  url.searchParams.set('location', params.location);
  url.searchParams.set('dates', datesParam);

  return url.toString();
}

/**
 * Generates an .ics file data URL for Apple Calendar / Outlook
 */
export function generateIcsBlob(params: {
  title: string;
  details: string;
  location: string;
  startIso: string;
  durationHours?: number;
}): Blob {
  const startDate = new Date(params.startIso);
  const durationMs = (params.durationHours || 4) * 60 * 60 * 1000;
  const endDate = new Date(startDate.getTime() + durationMs);

  const formatIcs = (d: Date) =>
    d.toISOString().replace(/-|:|\.\d+/g, '');

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Pavani & Karthik Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${startDate.getTime()}@pavani-karthik`,
    `DTSTAMP:${formatIcs(new Date())}`,
    `DTSTART:${formatIcs(startDate)}`,
    `DTEND:${formatIcs(endDate)}`,
    `SUMMARY:${params.title}`,
    `DESCRIPTION:${params.details.replace(/\n/g, '\\n')}`,
    `LOCATION:${params.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ];

  return new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
}
