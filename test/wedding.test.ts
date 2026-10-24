import assert from 'assert';
import { calculateTimeRemaining, generateGoogleCalendarUrl } from '../src/utils/dateTime';
import { weddingConfig } from '../src/config/weddingConfig';
import { calculateRsvpSummary, saveRsvpLocally, getStoredRsvps } from '../src/utils/rsvpStorage';

console.log('==============================================');
console.log('RUNNING AUTOMATED TEST SUITE FOR WEDDING APP');
console.log('==============================================\n');

let passed = 0;
let failed = 0;

function it(desc: string, fn: () => void) {
  try {
    fn();
    console.log(`  ✓ PASS: ${desc}`);
    passed++;
  } catch (err: any) {
    console.error(`  ✗ FAIL: ${desc}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

// Mock localStorage for Node environment testing
const storageMap = new Map<string, string>();
(global as any).localStorage = {
  getItem: (k: string) => storageMap.get(k) || null,
  setItem: (k: string, v: string) => storageMap.set(k, String(v)),
  removeItem: (k: string) => storageMap.delete(k),
  clear: () => storageMap.clear()
};

// 1. Configuration tests
it('weddingConfig contains correct bride and groom details', () => {
  assert.strictEqual(weddingConfig.couple.bride.fullName, 'Pavani Kalyani');
  assert.strictEqual(weddingConfig.couple.groom.fullName, 'Karthik Reddy');
  assert.strictEqual(weddingConfig.mainWedding.date, '2026-11-20');
  assert.strictEqual(weddingConfig.mainWedding.muhurthamTime, '10:57 AM IST');
  assert.strictEqual(weddingConfig.mainWedding.venueName, 'Sravya Gardens');
});

it('weddingConfig contains 3 events in proper chronological sequence', () => {
  assert.strictEqual(weddingConfig.events.length, 3);
  assert.strictEqual(weddingConfig.events[0].title, 'Mehendi Ceremony');
  assert.strictEqual(weddingConfig.events[0].date, '2026-11-18');
  assert.strictEqual(weddingConfig.events[1].title, 'Haldi & Pellikuthuru');
  assert.strictEqual(weddingConfig.events[1].date, '2026-11-19');
  assert.strictEqual(weddingConfig.events[2].title, 'Sumuhūrtham & Wedding Ceremony');
  assert.strictEqual(weddingConfig.events[2].date, '2026-11-20');
});

it('weddingConfig safeguards unconfirmed bride residence addresses', () => {
  const mehendi = weddingConfig.events.find(e => e.id === 'event-mehendi')!;
  const haldi = weddingConfig.events.find(e => e.id === 'event-haldi')!;
  const wedding = weddingConfig.events.find(e => e.id === 'event-wedding')!;

  assert.strictEqual(mehendi.isAwaitingConfirmation, true, 'Mehendi must be awaiting bride confirmation');
  assert.strictEqual(haldi.isAwaitingConfirmation, true, 'Haldi must be awaiting bride confirmation');
  assert.strictEqual(wedding.isAwaitingConfirmation, false, 'Main wedding at Sravya Gardens is confirmed');
});

// 2. Countdown and Time calculations
it('calculateTimeRemaining returns positive countdown for 20 Nov 2026', () => {
  const time = calculateTimeRemaining(weddingConfig.mainWedding.isoTimestamp);
  assert.strictEqual(time.isPast, false);
  assert.ok(time.totalSecondsRemaining > 0, 'Seconds remaining should be positive');
  assert.ok(time.days >= 0, 'Days should be >= 0');
  assert.ok(time.hours >= 0 && time.hours < 24);
  assert.ok(time.minutes >= 0 && time.minutes < 60);
  assert.ok(time.seconds >= 0 && time.seconds < 60);
});

it('calculateTimeRemaining detects past events correctly', () => {
  const pastTime = calculateTimeRemaining('2020-01-01T10:00:00+05:30');
  assert.strictEqual(pastTime.isPast, true);
  assert.strictEqual(pastTime.totalSecondsRemaining, 0);
  assert.strictEqual(pastTime.days, 0);
});

// 3. Calendar integration tests
it('generateGoogleCalendarUrl formats template URL properly', () => {
  const url = generateGoogleCalendarUrl({
    title: 'Pavani & Karthik Wedding',
    details: 'Ceremony details',
    location: 'Sravya Gardens',
    startIso: '2026-11-20T10:57:00+05:30',
    durationHours: 4
  });

  assert.ok(url.startsWith('https://calendar.google.com/calendar/render?'));
  assert.ok(url.includes('Pavani') || url.includes('Wedding'));
  assert.ok(url.includes('Sravya'));
});

// 4. RSVP Storage tests
it('RSVP saves locally and summary reflects actual response counts accurately', () => {
  const testKey = 'test_rsvp_key_' + Date.now();
  
  // Initial empty check
  assert.strictEqual(getStoredRsvps(testKey).length, 0);
  const initialSummary = calculateRsvpSummary(testKey);
  assert.strictEqual(initialSummary.total, 0);

  // Save 1 attending guest with 3 count
  saveRsvpLocally(testKey, {
    name: 'Ananya Sharma',
    attendance: 'coming',
    guestCount: 3,
    message: 'Congratulations!'
  });

  // Save 1 declining response
  saveRsvpLocally(testKey, {
    name: 'Rahul Varma',
    attendance: 'not-coming',
    guestCount: 0
  });

  const updatedSummary = calculateRsvpSummary(testKey);
  assert.strictEqual(updatedSummary.total, 2, 'Total RSVP submissions should be 2');
  assert.strictEqual(updatedSummary.coming, 3, 'Attending guests count should be 3');
  assert.strictEqual(updatedSummary.notComing, 1, 'Declining count should be 1');
});

console.log(`\n==============================================`);
console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log(`==============================================\n`);

if (failed > 0) {
  process.exit(1);
}
