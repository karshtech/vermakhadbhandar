import React from 'react';

interface VermaKhadLogoProps {
  className?: string;
  size?: number;
  variant?: 'emblem' | 'full';
  showSubtitle?: boolean;
}

/**
 * Authentic Verma Khad Bhandar Brand Emblem
 * Faithfully vectorized from the official physical shop signboard:
 * - Circular golden sun & agricultural field with perspective furrow lines
 * - Tractor silhouette at the center of the field
 * - Golden wheat ear / stalk flanking the left curve
 * - Twin green sprout leaves at the top
 */
export const VermaKhadLogo: React.FC<VermaKhadLogoProps> = ({
  className = '',
  size = 48,
  variant = 'emblem',
  showSubtitle = true,
}) => {
  const emblem = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      aria-label="Verma Khad Bhandar Official Logo"
    >
      <defs>
        {/* Sun Golden Gradient */}
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDE59" />
          <stop offset="60%" stopColor="#FDB813" />
          <stop offset="100%" stopColor="#E29210" />
        </linearGradient>

        {/* Deep Green Field Gradient */}
        <linearGradient id="fieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#103D28" />
          <stop offset="100%" stopColor="#082B1C" />
        </linearGradient>

        {/* Fresh Lime Furrow Gradient */}
        <linearGradient id="furrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B5D957" />
          <stop offset="100%" stopColor="#83B83D" />
        </linearGradient>

        {/* Wheat Golden Gradient */}
        <linearGradient id="wheatGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E29210" />
          <stop offset="100%" stopColor="#FFE066" />
        </linearGradient>
      </defs>

      {/* Outer Border Glow Ring */}
      <circle cx="60" cy="60" r="56" stroke="url(#furrowGrad)" strokeWidth="3" opacity="0.85" />

      {/* Sun Circle (Upper Hemisphere) */}
      <circle cx="60" cy="60" r="52" fill="url(#sunGrad)" />

      {/* Green Field Hill (Lower Portion with Curved Horizon) */}
      <path
        d="M 12 70 Q 60 48 108 70 A 52 52 0 0 1 12 70 Z"
        fill="url(#fieldGrad)"
      />

      {/* Curved Furrow Lines across the Field */}
      <path
        d="M 20 86 Q 60 62 100 86"
        stroke="url(#furrowGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 32 99 Q 60 76 88 99"
        stroke="url(#furrowGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 44 107 Q 60 92 76 107"
        stroke="url(#furrowGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Radial Furrow Ridges Converging to Vanishing Point */}
      <line x1="28" y1="76" x2="60" y2="58" stroke="url(#furrowGrad)" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="44" y1="80" x2="60" y2="58" stroke="url(#furrowGrad)" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="60" y1="82" x2="60" y2="58" stroke="url(#furrowGrad)" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="76" y1="80" x2="60" y2="58" stroke="url(#furrowGrad)" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="92" y1="76" x2="60" y2="58" stroke="url(#furrowGrad)" strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Tractor Silhouette on the Horizon */}
      <g transform="translate(38, 38) scale(0.9)">
        {/* Rear Large Wheel */}
        <circle cx="13" cy="18" r="9" fill="#082B1C" stroke="#FFDE59" strokeWidth="2" />
        <circle cx="13" cy="18" r="4.5" fill="#FFDE59" />
        {/* Front Small Wheel */}
        <circle cx="36" cy="20" r="5.5" fill="#082B1C" stroke="#FFDE59" strokeWidth="1.8" />
        <circle cx="36" cy="20" r="2.5" fill="#FFDE59" />
        {/* Hood Engine Block */}
        <path d="M 21 16 L 37 16 L 37 20 L 21 20 Z" fill="#082B1C" />
        {/* Cabin / Rollover Protection Frame */}
        <path
          d="M 10 16 L 10 6 L 22 6 L 24 16 Z"
          fill="none"
          stroke="#082B1C"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Exhaust Pipe / Chimney */}
        <line x1="33" y1="16" x2="33" y2="9" stroke="#082B1C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="33" y1="9" x2="35" y2="8" stroke="#082B1C" strokeWidth="2.2" strokeLinecap="round" />
        {/* Seat & Steering */}
        <path d="M 12 13 L 16 13 L 16 16" stroke="#082B1C" strokeWidth="2" fill="none" />
        <line x1="22" y1="12" x2="19" y2="10" stroke="#082B1C" strokeWidth="1.8" />
      </g>

      {/* Golden Wheat Stalk flanking the Left Side */}
      <g transform="translate(6, 40) rotate(-18)">
        <path d="M 16 65 Q 12 35 15 10" stroke="url(#wheatGrad)" strokeWidth="2.2" fill="none" />
        {/* Grains / Husks */}
        <ellipse cx="14" cy="14" rx="4" ry="2" fill="url(#wheatGrad)" transform="rotate(-30 14 14)" />
        <ellipse cx="18" cy="17" rx="4" ry="2" fill="url(#wheatGrad)" transform="rotate(25 18 17)" />
        <ellipse cx="12" cy="24" rx="4.5" ry="2.2" fill="url(#wheatGrad)" transform="rotate(-30 12 24)" />
        <ellipse cx="18" cy="27" rx="4.5" ry="2.2" fill="url(#wheatGrad)" transform="rotate(25 18 27)" />
        <ellipse cx="11" cy="35" rx="5" ry="2.4" fill="url(#wheatGrad)" transform="rotate(-30 11 35)" />
        <ellipse cx="18" cy="38" rx="5" ry="2.4" fill="url(#wheatGrad)" transform="rotate(25 18 38)" />
        <ellipse cx="11" cy="46" rx="5" ry="2.4" fill="url(#wheatGrad)" transform="rotate(-30 11 46)" />
        <ellipse cx="18" cy="49" rx="5" ry="2.4" fill="url(#wheatGrad)" transform="rotate(25 18 49)" />
      </g>

      {/* Twin Sprout Leaves at Top Center */}
      <g transform="translate(60, 4)">
        <path
          d="M 0 10 C -4 4 -12 2 -14 7 C -15 12 -8 16 0 10 Z"
          fill="url(#furrowGrad)"
        />
        <path
          d="M 0 10 C 4 4 12 2 14 7 C 15 12 8 16 0 10 Z"
          fill="url(#furrowGrad)"
        />
      </g>
    </svg>
  );

  if (variant === 'emblem') {
    return <div className={`inline-flex items-center ${className}`}>{emblem}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {emblem}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-extrabold text-white tracking-tight text-lg sm:text-xl font-sans">
            VERMA
          </span>
          <span className="font-extrabold text-[#FDB813] tracking-tight text-lg sm:text-xl font-sans">
            KHAD BHANDAR
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1 mt-1 text-[#FDB813] font-hindi text-xs sm:text-sm font-bold tracking-wide">
            <span className="text-white/60 text-[10px]">—</span>
            <span>वर्मा खाद भंडार</span>
            <span className="text-white/60 text-[10px]">—</span>
          </div>
        )}
      </div>
    </div>
  );
};
