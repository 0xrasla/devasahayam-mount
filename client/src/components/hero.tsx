import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-shrine-50 overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative max-w-4xl mx-auto px-4 text-center z-10 animate-fade-in">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-shrine-800">
          Our Lady of Sorrows Church
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-shrine-700 font-light max-w-2xl mx-auto">
          A sacred sanctuary where faith meets divine grace, honoring India's
          first lay Catholic saint
        </p>
        <a
          href="#saint"
          className="inline-flex items-center px-8 py-3 text-lg border-2 border-shrine-600 text-shrine-700 hover:bg-shrine-600  transition-all duration-300 rounded-full"
        >
          Discover His Story
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-shrine-600" />
      </div>
    </div>
  );
}
