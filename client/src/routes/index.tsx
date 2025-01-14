import Address from "@/components/address";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import { FathersSection } from "@/components/management";
import MassTimings from "@/components/masstimings";
import SecondDesign from "@/components/secondsection";
import Footer from "@/components/ui/footer/footer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <SecondDesign />
      <MassTimings />
      <FathersSection />
      <Gallery />
      <Address />
      <Footer />
    </div>
  );
}
