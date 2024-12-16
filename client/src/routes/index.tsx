import HeroSection from "@/components/hero";
import Navbar from "@/components/topbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen w-[80%] mx-auto">
      <header className="">
        <Navbar />
      </header>
      <HeroSection />
    </div>
  );
}
