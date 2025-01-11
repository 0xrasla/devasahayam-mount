import Address from "@/components/address";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
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
      <Gallery />
      <Address />
      <Footer />
    </div>
  );
}
