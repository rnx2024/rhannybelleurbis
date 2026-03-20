import Link from "next/link";
import { profile } from "@/data/site";

const nav = [
  { href: "/about", label: "About" },
  { href: "/ai-ml-projects", label: "AI/ML Projects" },
  { href: "/articles", label: "Articles" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group">
          <div className="font-display text-3xl font-semibold tracking-wide text-[#87CEFA]">
            {profile.name}
          </div>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {profile.role}
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
