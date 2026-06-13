import { cn } from "@/lib/utils";

type TechLogoProps = {
  slug: string;
  name: string;
  className?: string;
};

function LogoSvg({ slug }: { slug: string }) {
  switch (slug) {
    case "nextjs":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <circle cx="64" cy="64" r="60" fill="none" stroke="currentColor" strokeWidth="8" />
          <path fill="currentColor" d="M38 92V36h14l28 38V36h10v56H76L48 54v38z" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <ellipse cx="64" cy="64" rx="52" ry="22" fill="none" stroke="currentColor" strokeWidth="7" />
          <ellipse cx="64" cy="64" rx="52" ry="22" fill="none" stroke="currentColor" strokeWidth="7" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="52" ry="22" fill="none" stroke="currentColor" strokeWidth="7" transform="rotate(120 64 64)" />
          <circle cx="64" cy="64" r="10" fill="currentColor" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <path fill="currentColor" d="M64 28c-16 0-26 8-30 24 6-8 14-11 22-9 5 1 9 4 13 8 7 7 15 13 29 13 16 0 26-8 30-24-6 8-14 11-22 9-5-1-9-4-13-8-7-7-15-13-29-13zm-30 36c-16 0-26 8-30 24 6-8 14-11 22-9 5 1 9 4 13 8 7 7 15 13 29 13 16 0 26-8 30-24-6 8-14 11-22 9-5-1-9-4-13-8-7-7-15-13-29-13z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <path fill="currentColor" d="M64 12 22 36v56l42 24 42-24V36zm0 8 34 19v46L64 94 30 85V39z" />
          <path fill="currentColor" d="M48 52h12v24H48zm28-8h12v32H76z" />
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 128 32" className="h-7 w-16" aria-hidden>
          <text x="4" y="22" fill="currentColor" fontSize="18" fontFamily="monospace" fontWeight="700">ex</text>
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <path fill="currentColor" d="M64 12c-8 18-12 34-12 52 0 28 12 46 12 46s12-18 12-46c0-18-4-34-12-52z" />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <ellipse cx="64" cy="34" rx="42" ry="14" fill="none" stroke="currentColor" strokeWidth="8" />
          <path fill="none" stroke="currentColor" strokeWidth="8" d="M22 34v60c0 18 42 18 42 18s42 0 42-18V34" />
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <path fill="currentColor" d="M26 100 52 28l22 40-14 32z" />
          <path fill="currentColor" opacity=".65" d="m74 68 28 32H52z" />
          <path fill="currentColor" opacity=".45" d="M52 28 38 60 26 100 52 68z" />
        </svg>
      );
    case "wordpress":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <circle cx="64" cy="64" r="52" fill="none" stroke="currentColor" strokeWidth="8" />
          <path fill="currentColor" d="M20 64c0 20 12 37 29 45L23 64zm68-1c0-7-3-11-5-15-3-5-6-10-6-15 0-6 4-11 10-11l1 0C79 12 64 12 64 12c-15 0-28 6-38 15l4 0c7 0 17-1 17-1 3 0 4 5 1 5l-6 1 19 57 11-34-8-23-5-1c-3 0-4-5 0-5 0 0 11 1 17 1 7 0 18-1 18-1 3 0 4 5 1 5l-5 1 19 56 5-18c2-8 4-14 4-20zM67 69l-16 47c5 1 10 2 15 2 6 0 12-1 17-3zm37-25c0 8-3 14-5 21L84 114c16-9 27-27 27-46 0-9-2-17-6-25z" />
        </svg>
      );

    /* ── Laravel ── */
    case "laravel":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <path
            fill="currentColor"
            d="M116 22c-1-2-3-3-5-2L76 32C74 33 73 35 74 37l6 16-22 8L52 45c-1-2-3-3-5-2L12 55c-2 1-3 3-2 5l24 60c1 2 3 3 5 2l35-12c1 0 2-1 2-2l1-1 35-12c2-1 3-3 2-5zm-70 65L28 36l28-10 6 16-20 7c-2 1-3 3-2 5l10 25zm40-14L58 83l-8-20 20-7 6 16-14 5c-2 1-3 3-2 5l6 15zm4 1-4-11 10-3zm26-9-28 10-10-25 28-10z"
          />
        </svg>
      );

    /* ── REST API ── */
    case "restapi":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          {/* Two connected nodes */}
          <circle cx="30" cy="64" r="16" fill="none" stroke="currentColor" strokeWidth="7" />
          <circle cx="98" cy="64" r="16" fill="none" stroke="currentColor" strokeWidth="7" />
          {/* Arrow line */}
          <line x1="46" y1="58" x2="82" y2="58" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <polyline points="74,50 82,58 74,66" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* Curly braces hint */}
          <text x="20" y="100" fill="currentColor" fontSize="22" fontFamily="monospace" fontWeight="700">&#123;&#125;</text>
        </svg>
      );

    /* ── SEO ── */
    case "seo":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          {/* Magnifying glass */}
          <circle cx="52" cy="52" r="30" fill="none" stroke="currentColor" strokeWidth="9" />
          <line x1="74" y1="74" x2="108" y2="108" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
          {/* Up-arrow inside glass — SEO ranking */}
          <polyline points="42,60 52,38 62,60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="52" y1="38" x2="52" y2="64" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    /* ── Headless CMS ── */
    case "headless":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          {/* Monitor without head (no top bar) */}
          <rect x="16" y="36" width="96" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="8" />
          <line x1="44" y1="100" x2="44" y2="116" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
          <line x1="84" y1="100" x2="84" y2="116" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
          <line x1="32" y1="116" x2="96" y2="116" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
          {/* Disconnected link inside screen */}
          <path d="M44 68h10a10 10 0 0 1 0 20H44" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M84 68H74a10 10 0 0 0 0 20h10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <line x1="58" y1="78" x2="70" y2="78" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
      );

    /* ── Automation ── */
    case "automation":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          {/* Gear */}
          <circle cx="64" cy="64" r="18" fill="none" stroke="currentColor" strokeWidth="8" />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            d="M64 16v14M64 98v14M16 64h14M98 64h14M28 28l10 10M90 90l10 10M28 100l10-10M90 38l10-10"
          />
          {/* Play triangle — automation trigger */}
          <polygon points="56,56 56,72 72,64" fill="currentColor" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <rect x="20" y="20" width="88" height="88" rx="16" fill="none" stroke="currentColor" strokeWidth="8" />
        </svg>
      );
  }
}

export function TechLogo({ slug, name, className }: TechLogoProps) {
  return (
    <span className={cn("inline-flex items-center justify-center text-zinc-200", className)} title={name}>
      <LogoSvg slug={slug} />
      <span className="sr-only">{name}</span>
    </span>
  );
}
