import About from "@/components/about";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import SaintNewDesign from "@/components/saintdesign-new";
import Footer from "@/components/ui/footer/footer";
import Visit from "@/components/visit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Gallery />
      <SaintNewDesign />
      <Visit />
      <Footer />
    </div>
  );
}
