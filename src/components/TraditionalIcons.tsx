import React from 'react';

export const GaneshaIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C5A059" />
        <stop offset="50%" stopColor="#F5E8C9" />
        <stop offset="100%" stopColor="#A67C33" />
      </linearGradient>
    </defs>
    {/* Stylized Lord Ganesha line art */}
    <path
      d="M50 12 C44 12, 38 18, 38 26 C38 34, 44 40, 50 42 C56 40, 62 34, 62 26 C62 18, 56 12, 50 12 Z"
      stroke="url(#ganeshaGold)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M50 18 L50 36 M46 24 L54 24"
      stroke="url(#ganeshaGold)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Ears */}
    <path
      d="M38 24 C28 20, 22 28, 26 38 C29 44, 38 42, 40 40"
      stroke="url(#ganeshaGold)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M62 24 C72 20, 78 28, 74 38 C71 44, 62 42, 60 40"
      stroke="url(#ganeshaGold)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Trunk */}
    <path
      d="M50 42 C48 52, 45 64, 49 72 C52 78, 60 78, 62 72 C64 68, 60 64, 56 65"
      stroke="url(#ganeshaGold)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Crown / Mukut */}
    <path
      d="M44 12 L50 4 L56 12 Z"
      fill="url(#ganeshaGold)"
    />
    {/* Tilak / Modak */}
    <circle cx="50" cy="22" r="2.5" fill="#C5A059" />
    <circle cx="68" cy="62" r="3.5" fill="url(#ganeshaGold)" />
  </svg>
);

export const HaldiBowlIcon: React.FC<{ size?: number; className?: string }> = ({ size = 56, className = '' }) => (
  <svg
    viewBox="0 0 80 80"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="haldiBrass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="60%" stopColor="#C5A059" />
        <stop offset="100%" stopColor="#8C6A2E" />
      </linearGradient>
      <radialGradient id="turmericPaste" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#FFF176" />
        <stop offset="40%" stopColor="#FBC02D" />
        <stop offset="100%" stopColor="#F57F17" />
      </radialGradient>
      <linearGradient id="mangoLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#66BB6A" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
    {/* Mango Leaves Behind */}
    <path d="M40 28 C30 15, 20 22, 16 35 C25 35, 34 32, 40 28 Z" fill="url(#mangoLeaf)" />
    <path d="M40 28 C50 15, 60 22, 64 35 C55 35, 46 32, 40 28 Z" fill="url(#mangoLeaf)" />
    <path d="M40 25 C36 10, 44 10, 40 25 Z" fill="url(#mangoLeaf)" />

    {/* Turmeric Mound */}
    <ellipse cx="40" cy="42" rx="22" ry="12" fill="url(#turmericPaste)" />
    <path d="M26 42 Q40 28 54 42 Z" fill="url(#turmericPaste)" />

    {/* Brass Urli / Bowl */}
    <path
      d="M18 42 C18 60, 62 60, 62 42 Z"
      fill="url(#haldiBrass)"
      stroke="#8C6A2E"
      strokeWidth="1.5"
    />
    <ellipse cx="40" cy="42" rx="22" ry="4" stroke="#8C6A2E" strokeWidth="1.5" />
    {/* Base Stand */}
    <path d="M30 60 L28 65 L52 65 L50 60 Z" fill="url(#haldiBrass)" />
    {/* Kumkum dots */}
    <circle cx="40" cy="36" r="2.5" fill="#C2185B" />
  </svg>
);

export const BanglesIcon: React.FC<{ size?: number; className?: string }> = ({ size = 56, className = '' }) => (
  <svg
    viewBox="0 0 80 80"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="greenGlass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" />
        <stop offset="50%" stopColor="#81C784" />
        <stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
      <linearGradient id="goldZari" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E8C9" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#98765B" />
      </linearGradient>
    </defs>
    {/* Green Wedding Bangles (Gajulu) */}
    <ellipse cx="36" cy="42" rx="18" ry="24" stroke="url(#greenGlass)" strokeWidth="4.5" transform="rotate(-15 36 42)" />
    <ellipse cx="42" cy="40" rx="18" ry="24" stroke="url(#goldZari)" strokeWidth="3.5" transform="rotate(-10 42 40)" />
    <ellipse cx="48" cy="38" rx="18" ry="24" stroke="url(#greenGlass)" strokeWidth="4.5" transform="rotate(-5 48 38)" />
    
    {/* Jasmine & Rose Floral Garland (Gaja Malla) */}
    <circle cx="26" cy="56" r="5" fill="#FFFDE7" stroke="#F57F17" strokeWidth="1" />
    <circle cx="35" cy="62" r="5" fill="#E91E63" />
    <circle cx="45" cy="63" r="5" fill="#FFFDE7" stroke="#F57F17" strokeWidth="1" />
    <circle cx="55" cy="58" r="5" fill="#E91E63" />
    <circle cx="62" cy="50" r="5" fill="#FFFDE7" stroke="#F57F17" strokeWidth="1" />
  </svg>
);

export const HomaKundamIcon: React.FC<{ size?: number; className?: string }> = ({ size = 56, className = '' }) => (
  <svg
    viewBox="0 0 80 80"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="altarCopper" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#C5A059" />
        <stop offset="100%" stopColor="#8C6A2E" />
      </linearGradient>
      <linearGradient id="sacredFire" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#D50000" />
        <stop offset="40%" stopColor="#FF6D00" />
        <stop offset="80%" stopColor="#FFD600" />
        <stop offset="100%" stopColor="#FFF9C4" />
      </linearGradient>
    </defs>
    {/* Sacred Fire (Agni Devata) */}
    <path
      d="M40 10 C36 22, 28 26, 32 38 C35 44, 45 44, 48 38 C52 26, 44 20, 40 10 Z"
      fill="url(#sacredFire)"
    />
    <path
      d="M40 22 C38 28, 35 32, 38 38 C42 38, 44 32, 40 22 Z"
      fill="#FFF9C4"
    />

    {/* Tiered Altar (Homa Kundam) */}
    {/* Top Rim */}
    <polygon points="22,42 58,42 66,48 14,48" fill="url(#altarCopper)" stroke="#8C6A2E" strokeWidth="1" />
    {/* Middle Step */}
    <polygon points="17,48 63,48 68,56 12,56" fill="url(#altarCopper)" stroke="#8C6A2E" strokeWidth="1" />
    {/* Bottom Base */}
    <polygon points="10,56 70,56 74,66 6,66" fill="url(#altarCopper)" stroke="#8C6A2E" strokeWidth="1.2" />
    {/* Brick / Geometric Carvings */}
    <line x1="28" y1="56" x2="26" y2="66" stroke="#8C6A2E" strokeWidth="1" />
    <line x1="40" y1="56" x2="40" y2="66" stroke="#8C6A2E" strokeWidth="1" />
    <line x1="52" y1="56" x2="54" y2="66" stroke="#8C6A2E" strokeWidth="1" />
  </svg>
);
