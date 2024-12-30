import About from "@/components/about";
import Gallery from "@/components/gallery";
import HeroDesignNew from "@/components/herodesign-new";
import SaintNewDesign from "@/components/saintdesign-new";
import Footer from "@/components/ui/footer/footer";
import Visit from "@/components/visit";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-center">
        <p className="text-lg sm:text-2xl">
          Web version under progress! For best experience, visit on a mobile
          device.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroDesignNew />
      <About />
      <Gallery />
      <SaintNewDesign />
      <Visit />
      <Footer />
    </div>
  );
}
