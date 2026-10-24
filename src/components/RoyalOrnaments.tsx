import React from 'react';

/**
 * Ultra-crisp traditional Indian royal vector ornaments in metallic 24K gold foil styling.
 */

export const RoyalCornerBracket: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  className?: string;
}> = ({ position, size = 68, className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      default:
        return 'none';
    }
  };

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`royal-corner-bracket ${position} ${className}`}
      style={{ transform: getTransform() }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cornerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" />
          <stop offset="45%" stopColor="#F7E7B4" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6A23" />
        </linearGradient>
      </defs>
      {/* Outer corner rim */}
      <path
        d="M 6 92 L 6 24 C 6 14, 14 6, 24 6 L 92 6"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Inner fine border */}
      <path
        d="M 14 86 L 14 26 C 14 19, 19 14, 26 14 L 86 14"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.2"
        strokeDasharray="4 2"
        opacity="0.85"
      />
      {/* Ornate corner flourish & lotus leaf */}
      <path
        d="M 14 14 C 28 28, 48 20, 52 8 M 14 14 C 28 28, 20 48, 8 52"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="28" cy="28" r="4" fill="url(#cornerGoldGrad)" />
      <circle cx="48" cy="18" r="2.5" fill="url(#cornerGoldGrad)" />
      <circle cx="18" cy="48" r="2.5" fill="url(#cornerGoldGrad)" />
      <circle cx="8" cy="8" r="3" fill="#D4AF37" />
    </svg>
  );
};

export const RoyalPeacockMotif: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = ''
}) => (
  <svg
    viewBox="0 0 120 40"
    width={size * 3}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="peacockGold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8C6A23" />
        <stop offset="25%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#FFF2CC" />
        <stop offset="75%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8C6A23" />
      </linearGradient>
    </defs>
    {/* Center Sacred Lotus */}
    <g transform="translate(60, 20)">
      {/* Center petal */}
      <path d="M 0 -14 C -5 -6, -4 0, 0 8 C 4 0, 5 -6, 0 -14 Z" fill="url(#peacockGold)" />
      {/* Left petals */}
      <path d="M -4 -8 C -12 -2, -10 6, -3 8 C -3 2, -1 -4, -4 -8 Z" fill="url(#peacockGold)" />
      <path d="M -8 -2 C -18 6, -14 12, -6 10 C -4 6, -4 2, -8 -2 Z" fill="url(#peacockGold)" />
      {/* Right petals */}
      <path d="M 4 -8 C 12 -2, 10 6, 3 8 C 3 2, 1 -4, 4 -8 Z" fill="url(#peacockGold)" />
      <path d="M 8 -2 C 18 6, 14 12, 6 10 C 4 6, 4 2, 8 -2 Z" fill="url(#peacockGold)" />
      <circle cx="0" cy="11" r="2.5" fill="#D4AF37" />
    </g>
    {/* Left Flourish wing */}
    <path
      d="M 42 22 C 30 16, 16 26, 4 20 C 18 20, 26 26, 36 28"
      stroke="url(#peacockGold)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="16" cy="20" r="2" fill="url(#peacockGold)" />
    <circle cx="28" cy="18" r="2" fill="url(#peacockGold)" />
    {/* Right Flourish wing */}
    <path
      d="M 78 22 C 90 16, 104 26, 116 20 C 102 20, 94 26, 84 28"
      stroke="url(#peacockGold)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="104" cy="20" r="2" fill="url(#peacockGold)" />
    <circle cx="92" cy="18" r="2" fill="url(#peacockGold)" />
  </svg>
);

export const LotusGarlandDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`lotus-garland-divider-wrap ${className}`} aria-hidden="true">
    <span className="garland-line left"></span>
    <RoyalPeacockMotif size={28} />
    <span className="garland-line right"></span>
  </div>
);
