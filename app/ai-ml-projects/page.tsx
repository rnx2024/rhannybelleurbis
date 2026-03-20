import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projectCategories } from "@/data/site";

export default function AIMLProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        eyebrow="AI/ML Projects"
        title="Applied AI/ML work across apps and data studies"
        description="A focused collection of applied AI applications and data-led case studies built for clarity, reliability, and real-world use."
      />

      <div className="mt-10 space-y-12">
        {projectCategories.map((category) => (
          <section key={category.title} className="space-y-5">
            <h2 className="font-display text-2xl font-semibold tracking-tight">{category.title}</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {category.items.map((project) => (
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
                      Open link <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
