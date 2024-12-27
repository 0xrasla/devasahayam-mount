import { openGoogleMap } from "@/lib/utils";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export default function Hero() {
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
    <motion.section
      className="relative overflow-hidden pt-32 pb-6 min-h-screen"
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.3,
        duration: 0.5,
      }}
    >
      <div className="w-full h-full">
        <div className="container flex flex-col items-center px-4 text-center py-16 mx-auto lg:pb-56 md:py-32 md:px-10 lg:px-32 lg:text-left dark:text-gray-50">
          <h1 className="text-4xl font-outfit font-bold leading-none sm:text-6xl xl:max-w-4xl dark:text-gray-50">
            Our Lady of Sorrows Church
          </h1>
          <p className="mt-4 mb-4 text-lg sm:mb-6 xl:max-w-3xl text-center dark:text-gray-50 font-ebgarmond">
            Devasahayam Mount in Tamil Nadu is a revered site where St.
            Devasahayam Pillai, India's first lay saint, was martyred in 1752.
            It is home to the Our Lady of Sorrows Church, a pilgrimage center.
          </p>

          <Button
            type="button"
            className="border-2 border-black p-4 rounded-lg"
            onClick={openGoogleMap}
          >
            Plan to visit
          </Button>

          {/* Centering video */}
          <div className="relative w-full mt-8 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <video
                ref={videoRef}
                className="w-full sm:w-[90%] h-[400px] sm:h-[300px] rounded-2xl object-cover mx-auto"
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
                {!videoPlaying && <Play size={48} color="white" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
