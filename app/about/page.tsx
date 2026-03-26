import { Github, Mail, Linkedin, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/site";

const strengths = [
  "AI automation engineering",
  "Backend API design",
  "Workflow orchestration",
  "ETL pipelines",
  "RAG and retrieval systems",
  "Voice pipeline design",
  "Search pipeline design",
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
              AI Automation & Backend Engineer specializing in n8n-based production workflows, ETL pipelines, and
              API-driven systems. Strong experience designing reliable automations using n8n, Python, FastAPI, and
              databases, with a focus on observability, retries, idempotency, and secure integrations. With 10+ years
              in NGO research and analytics.
            </p>
            <p>
              Current work spans voice pipelines, search and retrieval pipelines, ETL workflows, automation services,
              reporting flows, and backend platforms built for customer support, recruitment, and quality assurance
              use cases in production.
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
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-foreground">
              <Github className="h-4 w-4 text-sky-700" /> GitHub profile
            </a>
          </CardContent>
        </Card>
      </div>

    </main>
  );
}
