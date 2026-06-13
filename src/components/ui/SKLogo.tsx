/**
 * <SK/> logo — inline SVG, zero external deps.
 * Matches the brand image exactly:
 *   - cyan angle-brackets  < … />
 *   - white bold "SK" text
 *   - subtle cyan glow
 *
 * Sizes:
 *   sm  → 28px tall  (navbar compact)
 *   md  → 40px tall  (navbar default / footer)
 *   lg  → 64px tall  (hero / about card)
 *   xl  → 96px tall  (login page splash)
 */

type LogoSize = "sm" | "md" | "lg" | "xl";

const DIMS: Record<LogoSize, { w: number; h: number; fontSize: number; bracketSize: number; gap: number }> = {
  sm: { w: 72,  h: 28,  fontSize: 14, bracketSize: 12, gap: 3 },
  md: { w: 108, h: 40,  fontSize: 20, bracketSize: 17, gap: 4 },
  lg: { w: 172, h: 64,  fontSize: 32, bracketSize: 27, gap: 6 },
  xl: { w: 240, h: 90,  fontSize: 44, bracketSize: 38, gap: 8 },
};

export function SKLogo({
  size = "md",
  className = "",
  showTagline = false,
}: {
  size?: LogoSize;
  className?: string;
  showTagline?: boolean;
}) {
  const { w, h, fontSize, bracketSize, gap } = DIMS[size];
  const cy = h / 2;
  const totalH = showTagline ? h + fontSize * 1.4 : h;

  return (
    <svg
      viewBox={`0 0 ${w} ${totalH}`}
      width={w}
      height={totalH}
      aria-label="SK Logo — WordPress & Next.js Developer"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Cyan glow filter */}
        <filter id="sk-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Gradient for SK text */}
        <linearGradient id="sk-text-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        {/* Cyan gradient for brackets */}
        <linearGradient id="sk-bracket-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* ── Left bracket  < ── */}
      <text
        x={gap}
        y={cy + bracketSize * 0.38}
        fontSize={bracketSize}
        fontWeight="900"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fill="url(#sk-bracket-grad)"
        filter="url(#sk-glow)"
        letterSpacing="-1"
      >
        &lt;
      </text>

      {/* ── SK ── */}
      <text
        x={w / 2}
        y={cy + fontSize * 0.38}
        fontSize={fontSize}
        fontWeight="900"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fill="url(#sk-text-grad)"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        SK
      </text>

      {/* ── Right bracket  /> ── */}
      <text
        x={w - gap}
        y={cy + bracketSize * 0.38}
        fontSize={bracketSize}
        fontWeight="900"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fill="url(#sk-bracket-grad)"
        filter="url(#sk-glow)"
        textAnchor="end"
        letterSpacing="-1"
      >
        /&gt;
      </text>

      {/* ── Optional tagline ── */}
      {showTagline && (
        <text
          x={w / 2}
          y={h + fontSize * 1.1}
          fontSize={fontSize * 0.38}
          fontWeight="400"
          fontFamily="'Arial', sans-serif"
          fill="#94a3b8"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          WordPress &amp; Next.js Developer
        </text>
      )}
    </svg>
  );
}

/**
 * Square icon version — just the brackets + SK, no tagline,
 * used for favicons and small square slots.
 */
export function SKIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      width={size * 1.5}
      height={size}
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="ski-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="ski-cyan" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <text x="1"  y="23" fontSize="22" fontWeight="900" fontFamily="'Arial Black','Arial',sans-serif" fill="url(#ski-cyan)" filter="url(#ski-glow)">&lt;</text>
      <text x="24" y="23" fontSize="18" fontWeight="900" fontFamily="'Arial Black','Arial',sans-serif" fill="white" textAnchor="middle">SK</text>
      <text x="47" y="23" fontSize="22" fontWeight="900" fontFamily="'Arial Black','Arial',sans-serif" fill="url(#ski-cyan)" filter="url(#ski-glow)" textAnchor="end">/&gt;</text>
    </svg>
  );
}
