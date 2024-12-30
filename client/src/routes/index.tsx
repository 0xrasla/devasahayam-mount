import About from "@/components/about";
import Gallery from "@/components/gallery";
import HeroDesignNew from "@/components/herodesign-new";
import MassSchedules from "@/components/mass";
import Saint from "@/components/saint";
import Footer from "@/components/ui/footer/footer";
import Visit from "@/components/visit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen">
      <HeroDesignNew />
      <About />
      <MassSchedules />
      <Saint />
      <Gallery />
      <Visit />
      <Footer />
    </div>
  );
}
