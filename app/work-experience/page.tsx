"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workExperience } from "@/data/site";

export default function WorkExperiencePage() {
  const [index, setIndex] = useState(0);
  const total = workExperience.length;

  const role = useMemo(() => workExperience[index], [index]);
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Work experience"
      />

      <div className="mt-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm font-medium text-muted-foreground">
            {index + 1} of {total}
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
              disabled={isFirst}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => setIndex((prev) => Math.min(total - 1, prev + 1))}
              disabled={isLast}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="border-l border-sky-200/70 pl-6">
          <div className="relative">
            <div className="absolute -left-[33px] top-7 h-3 w-3 rounded-full bg-[#87CEFA] ring-4 ring-white shadow-sm" />
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{role.role}</CardTitle>
                <div className="text-sm font-medium text-muted-foreground">
                  {role.company} · {role.period}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
