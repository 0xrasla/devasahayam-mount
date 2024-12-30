import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

export default function HeroDesignNew() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <motion.section
      className="relative overflow-hidden pt-16 min-h-screen"
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
        <div className="container flex flex-col text-center relative">
          <img
            src="/marie.jpg"
            alt="Our Lady of Sorrows Church"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="relative w-full max-w-3xl mx-auto text-start">
              <div className="bg-black/50 backdrop-blur-md text-white py-4 px-6 rounded-md">
                <h2 className="text-xl font-semibold text-white">
                  Our Lady of Sorrows Church
                </h2>
                <h4>Devasahayam Mount </h4>

                <Button className="bg-accent font-semibold mt-4">
                  Plan to visit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm">
          Devasahayam Mount in Tamil Nadu is a sacred site where St.
          Devasahayam, India’s first lay saint, was martyred in 1752. It is home
          to the Our Lady of Sorrows Church, which also serves as a prominent
          pilgrimage center.
        </p>
      </div>
    </motion.section>
  );
}
