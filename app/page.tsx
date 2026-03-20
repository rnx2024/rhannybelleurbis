import { ArrowRight, ExternalLink, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { articles, profile, projectCategories } from "@/data/site";

const featuredProjects = projectCategories.flatMap((category) => category.items).slice(0, 3);
const featuredArticles = articles.slice(0, 4);

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-6">
            <Badge className="w-fit">AI Agents • Backend Systems • Workflow Automation</Badge>
            <div className="space-y-4">
              <h1 className="font-display max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
                Building dependable AI systems for real business operations.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {profile.shortBio}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/ai-ml-projects" size="lg">
                View AI/ML projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/articles" variant="outline" size="lg">
                Read articles
              </Button>
            </div>
          </div>
          <Card className="border-border/70 bg-card/90">
            <CardHeader>
              <CardTitle>{profile.name}</CardTitle>
              <CardDescription>{profile.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>{profile.longBio}</p>
              <div className="space-y-2">
                <a className="flex items-center gap-2 hover:text-foreground" href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4 text-sky-700" /> {profile.email}
                </a>
                <a className="flex items-center gap-2 hover:text-foreground" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4 text-sky-700" /> LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured AI/ML projects"
          description="A compact selection of apps and systems spanning AI interaction, retrieval, and workflow orchestration."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.name} className="h-full">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
                <Button href={project.href} variant="outline" className="w-full">
                  Open project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Writing"
          title="Engineering articles"
          description="Selected articles focused on retrieval design, backend reliability, practical architecture, and workflow automation."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredArticles.map((article) => (
            <Card key={article.title}>
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription>{article.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button href={article.href} variant="outline">
                  Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
