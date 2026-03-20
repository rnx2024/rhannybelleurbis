import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { articles } from "@/data/site";

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        eyebrow="Articles"
        title="Selected technical writing"
        description="Featured writing on retrieval quality, FastAPI architecture, error handling, backend pragmatism, realtime integrations, and workflow automation."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Card key={article.title} className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">{article.title}</CardTitle>
              <CardDescription>{article.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button href={article.href} variant="outline">
                Read article <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
