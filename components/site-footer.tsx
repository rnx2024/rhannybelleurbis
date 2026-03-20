import { Mail, Linkedin } from "lucide-react";
import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display font-medium text-foreground">{profile.name}</div>
          <div>{profile.role}</div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
            <Mail className="h-4 w-4 text-sky-700" /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
            <Linkedin className="h-4 w-4 text-sky-700" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
