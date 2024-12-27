import About from "@/components/about";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Saint from "@/components/saint";
import Visit from "@/components/visit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Saint />
        <Gallery />
        <Visit />
      </div>
    </div>
  );
}
