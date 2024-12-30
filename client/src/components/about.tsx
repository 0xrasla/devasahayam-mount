import { Clock10, Landmark, MapIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const spotlightData = [
  {
    title: "Mass Timings",
    description:
      "Join us for daily and special Masses at the shrine. Our Masses are held at various times to accommodate all visitors.",
    icon: <Clock10 className="text-4xl text-shrine-700" />,
  },
  {
    title: "Sacred Places",
    description:
      "Discover the sacred spots at the shrine. These places are filled with prayer and reflection, perfect for those seeking solace.",
    icon: <Landmark className="text-4xl text-shrine-700" />,
  },
  {
    title: "Location & Address",
    description:
      "Find us at Devasahayam Mount, Tamil Nadu. We're easy to reach, and our shrine welcomes visitors from all over the world.",
    icon: <MapIcon className="text-4xl text-shrine-700" />,
  },
];

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const handleVideoPlayPause = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="relative w-full mt-8 flex justify-center">
        <div className="relative w-full max-w-3xl">
          <video
            ref={videoRef}
            className="w-full sm:w-[90%] h-[400px] sm:h-[300px] object-cover mx-auto"
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div
            className="absolute inset-0 flex justify-center items-center cursor-pointer"
            onClick={handleVideoPlayPause}
          >
            {!videoPlaying && <img src="/assets/play.svg" color="white" />}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-[26px] font-bold text-gray-900 p-[0]">
          About Our Shrine
        </h2>
        <p className="text-sm text-black">
          A place of peace, reflection, and devotion.
        </p>

        {spotlightData.map((spotlight, index) => (
          <div className="space-y-12 animate-slide-up" key={index}>
            <div className="space-y-4 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="flex gap-2">
                <div className="font-normal">{spotlight.icon}</div>
                <h3 className="text-[18px] font-semibold text-gray-900">
                  {spotlight.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                {spotlight.description}
              </p>
              <Button
                onClick={() => {
                  if (index === 0) {
                    let ele = document.getElementById("mass");

                    if (ele) {
                      ele.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }
                }}
                className="mt-6 bg-accent text-[16px]"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
