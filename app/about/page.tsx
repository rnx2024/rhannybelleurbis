import { Mail, Linkedin, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/site";

const strengths = [
  "AI automation engineering",
  "Backend API design",
  "Workflow orchestration",
  "RAG and retrieval systems",
  "Long-running job architecture",
  "Operational reliability",
  "Data analysis and reporting",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        eyebrow="About"
        title="Backend-first AI engineering with practical production focus"
        description={profile.longBio}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              {profile.name} is an AI Automation Engineer and Backend Engineer who builds systems that support
              end-to-end business operations. The focus is on security, reliability, maintainability, and clear system
              boundaries.
            </p>
            <p>
              Current work spans AI agents, retrieval pipelines, automation services, reporting flows, long-running
              processing jobs, and backend services designed for production use.
            </p>
            <div className="flex flex-wrap gap-2">
              {strengths.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-sky-700" /> {profile.location}
            </div>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-foreground">
              <Mail className="h-4 w-4 text-sky-700" /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-foreground">
              <Linkedin className="h-4 w-4 text-sky-700" /> LinkedIn profile
            </a>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
