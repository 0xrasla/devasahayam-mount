import About from "@/components/about";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Saint from "@/components/saint";
import Visit from "@/components/visit";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="loader"></div>
        </div>
      )}
      {!isLoading && (
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Saint />
          <Gallery />
          <Visit />
        </div>
      )}
    </div>
  );
}
