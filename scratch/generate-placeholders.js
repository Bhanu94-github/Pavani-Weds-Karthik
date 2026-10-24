const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../../public/photos');
fs.mkdirSync(dir, { recursive: true });

function createSvgPlaceholder(title, subtitle, iconSvg, bgColor, accentColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFF8F2" />
      <stop offset="70%" stop-color="${bgColor}" />
      <stop offset="100%" stop-color="#EEDAC8" />
    </radialGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A059" />
      <stop offset="50%" stop-color="#EAD6A8" />
      <stop offset="100%" stop-color="#98765B" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#70283D" flood-opacity="0.15" />
    </filter>
  </defs>

  <rect width="800" height="600" fill="url(#bg)" />
  
  <!-- Outer Decorative Border -->
  <rect x="25" y="25" width="750" height="550" rx="16" fill="none" stroke="url(#gold)" stroke-width="2" stroke-dasharray="12 6" opacity="0.65" />
  <rect x="40" y="40" width="720" height="520" rx="12" fill="none" stroke="${accentColor}" stroke-width="1.2" opacity="0.4" />
  
  <!-- Corner Ornaments -->
  <path d="M 50 80 Q 50 50 80 50" fill="none" stroke="url(#gold)" stroke-width="3" />
  <circle cx="80" cy="50" r="4" fill="#C5A059" />
  <circle cx="50" cy="80" r="4" fill="#C5A059" />
  
  <path d="M 750 80 Q 750 50 720 50" fill="none" stroke="url(#gold)" stroke-width="3" />
  <circle cx="720" cy="50" r="4" fill="#C5A059" />
  <circle cx="750" cy="80" r="4" fill="#C5A059" />
  
  <path d="M 50 520 Q 50 550 80 550" fill="none" stroke="url(#gold)" stroke-width="3" />
  <circle cx="80" cy="550" r="4" fill="#C5A059" />
  <circle cx="50" cy="520" r="4" fill="#C5A059" />
  
  <path d="M 750 520 Q 750 550 720 550" fill="none" stroke="url(#gold)" stroke-width="3" />
  <circle cx="720" cy="550" r="4" fill="#C5A059" />
  <circle cx="750" cy="520" r="4" fill="#C5A059" />

  <!-- Center Card -->
  <g transform="translate(400, 260)" filter="url(#shadow)">
    <circle r="75" fill="#FAF4ED" stroke="url(#gold)" stroke-width="2.5" />
    <g transform="translate(-40, -40) scale(3.3)" stroke="${accentColor}" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      ${iconSvg}
    </g>
  </g>

  <!-- Typography -->
  <text x="400" y="390" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="32" font-weight="600" fill="${accentColor}" letter-spacing="1">
    ${title}
  </text>
  <text x="400" y="425" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="16" font-weight="400" fill="#6E5648" letter-spacing="0.5">
    ${subtitle}
  </text>
  <text x="400" y="465" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="13" font-weight="500" fill="#98765B" opacity="0.85" letter-spacing="1.5">
    [ PHOTOGRAPH PLACEHOLDER • REPLACED VIA WEDDINGCONFIG ]
  </text>
</svg>`;
}

// Kalash / Lotus / Flower icons
const lotusIcon = `<path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12Z"/><path d="M12 6c-2 3-3 5-3 8a3 3 0 0 0 6 0c0-3-1-5-3-8Z"/><path d="M12 18v3m-4-2c2-1 4-1 8 0"/>`;
const ringIcon = `<circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/><path d="M12 7l1.5-2.5h-3L12 7z"/>`;
const sparkleIcon = `<path d="M12 3v18m9-9H3m15.5 6.5l-13-13m13 0l-13 13"/>`;

fs.writeFileSync(path.join(dir, 'wedding-art-1.jpg'), createSvgPlaceholder('Sacred Celebrations', 'Traditional Vows & Auspicious Muhurtham', lotusIcon, '#FBF0E4', '#70283D'));
fs.writeFileSync(path.join(dir, 'wedding-art-2.jpg'), createSvgPlaceholder('Auspicious Rituals', 'Haldi, Mehendi & Vibrant Heritage', sparkleIcon, '#FFF5EA', '#8E2840'));
fs.writeFileSync(path.join(dir, 'wedding-art-3.jpg'), createSvgPlaceholder('Floral Grandeur', 'Blossoms of Marigold & Jasmine', ringIcon, '#F8EFE6', '#70283D'));

console.log('Generated placeholder artworks in public/photos/');
