import { motion } from "motion/react";
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
      <div>
        <div className="container flex flex-col items-center lg:items-start px-4 py-16 mx-auto lg:pb-56 md:py-32 md:px-10 lg:px-32 text-center lg:text-left dark:text-gray-50">
          <h1 className="text-4xl font-outfit font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
            Our Lady of Sorrows Church
          </h1>
          <p className="mt-6 mb-2 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50 font-ebgarmond">
            Devasahayam Mount, located near Aralvaimozhi in Tamil Nadu, is a
            revered site known for its historical and spiritual significance. It
            is home to the <strong>Our Lady of Sorrows Church</strong>, a
            pilgrimage center, and the place where St. Devasahayam Pillai, the
            first Indian layman saint, was martyred in 1752.
          </p>

          <Button
            type="button"
            className="m-2 text-lg text-white font-semibold rounded bg-primary border-2 p-4"
          >
            Plan to visit
          </Button>
        </div>
      </div>
      {/* <ChevronDown className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce" /> */}
    </motion.section>
  );
}
