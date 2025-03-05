import Address from "@/components/address";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import { FathersSection } from "@/components/management";
import MassTimings from "@/components/masstimings";
import SecondDesign from "@/components/secondsection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Footer from "@/components/ui/footer/footer";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="overflow-x-hidden">
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-5xl h-[90vh] w-full flex flex-col">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-auto flex flex-col items-center gap-2">
            {Array.from({ length: 16 }, (_, i) => (
              <img
                key={i}
                src={`/notice/${i}.png`}
                alt={`Page ${i}`}
                className="w-full max-w-4xl"
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>

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
