import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-6" id="home">
      <div>
        <div className="container flex flex-col items-center lg:items-start px-4 py-16 pb-24 mx-auto lg:pb-56 md:py-32 md:px-10 lg:px-32 text-center lg:text-left dark:text-gray-50">
          <h1 className="text-4xl font-outfit font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
            Our Lady of Sorrows Church
          </h1>
          <p className="mt-6 mb-2 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50 font-bold font-ebgarmond">
            Devasahayam Mount, located near Aralvaimozhi in Tamil Nadu, is a
            revered site known for its historical and spiritual significance. It
            is home to the <strong>Our Lady of Sorrows Church</strong>, a
            pilgrimage center, and the place where St. Devasahayam Pillai, the
            first Indian layman saint, was martyred in 1752.
          </p>

          <Button
            type="button"
            className="m-2 text-lg text-white font-semibold rounded dark:bg-gray-100 dark:text-gray-900 border-2"
          >
            Plan to visit
          </Button>
        </div>
      </div>
      <ChevronDown className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce" />
    </section>
  );
}
