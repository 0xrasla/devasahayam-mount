import Gallery from "@/components/gallery";
import HeroDesignNew from "@/components/hero";
import MassTimings from "@/components/masstimings";
import SecondDesign from "@/components/secondsection";
import Footer from "@/components/ui/footer/footer";
import Visit from "@/components/visit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="overflow-x-hidden">
      <HeroDesignNew />
      <SecondDesign />
      <MassTimings />
      <Gallery />
      {/* <SaintNewDesign /> */}
      <Visit />
      <Footer />
    </div>
  );
}
