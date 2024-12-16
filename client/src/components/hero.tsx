import { ChevronDown, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container">
        <div className="magicpattern absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-6 text-center">
            {/* <img src="/logo.svg" alt="logo" className="h-16" /> */}
            <Badge variant="outline">Faith and Grace</Badge>
            <div>
              <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                Our Lady of Sorrows & Saint Devasahayam Pillai Church
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                A sacred place of worship nestled in the heart of Aralvaimozhi,
                honoring the legacy of Saint Devasahayam and devoted to Our Lady
                of Sorrows. Experience faith, history, and divine blessings in
                this serene sanctuary.
              </p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button>Plan to Visit</Button>
              <Button variant="outline">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ChevronDown className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce" />
    </section>
  );
}
