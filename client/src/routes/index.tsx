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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Saint />
      <Gallery />
      <Visit />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Devesahayam Mount Shrine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
