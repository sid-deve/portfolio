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
          <path
            fill="currentColor"
            d="M38 92V36h14l28 38V36h10v56H76L48 54v38z"
          />
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
          <path
            fill="currentColor"
            d="M64 28c-16 0-26 8-30 24 6-8 14-11 22-9 5 1 9 4 13 8 7 7 15 13 29 13 16 0 26-8 30-24-6 8-14 11-22 9-5-1-9-4-13-8-7-7-15-13-29-13zm-30 36c-16 0-26 8-30 24 6-8 14-11 22-9 5 1 9 4 13 8 7 7 15 13 29 13 16 0 26-8 30-24-6 8-14 11-22 9-5-1-9-4-13-8-7-7-15-13-29-13z"
          />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <path
            fill="currentColor"
            d="M64 12 22 36v56l42 24 42-24V36zm0 8 34 19v46L64 94 30 85V39z"
          />
          <path fill="currentColor" d="M48 52h12v24H48zm28-8h12v32H76z" />
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 128 32" className="h-7 w-16" aria-hidden>
          <text x="4" y="22" fill="currentColor" fontSize="18" fontFamily="monospace" fontWeight="700">
            ex
          </text>
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <path
            fill="currentColor"
            d="M64 12c-8 18-12 34-12 52 0 28 12 46 12 46s12-18 12-46c0-18-4-34-12-52z"
          />
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
          <circle cx="64" cy="64" r="52" fill="none" stroke="currentColor" strokeWidth="10" />
          <path
            fill="currentColor"
            d="M36 36h14l10 38 10-38h12L68 92H52zm42 0h14l-8 56H70z"
          />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden>
          <path
            fill="currentColor"
            d="M62 12h10c18 0 26 8 26 22v12H58c-10 0-12 6-12 14v6h44v18c0 16-10 26-28 26H44c-18 0-28-10-28-26V38c0-14 10-26 28-26zm6 14c-8 0-12 4-12 12v6h24v-6c0-8-4-12-12-12z"
          />
          <path
            fill="currentColor"
            opacity=".55"
            d="M66 116H56c-18 0-26-8-26-22V82h40c10 0 12-6 12-14v-6H38V44c0-16 10-26 28-26h16c18 0 28 10 28 26v52c0 14-10 26-28 26zm-6-14c8 0 12-4 12-12v-6H48v6c0 8 4 12 12 12z"
          />
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
