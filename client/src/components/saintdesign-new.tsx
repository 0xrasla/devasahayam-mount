import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function SaintNewDesign() {
  const navigate = useNavigate();

  return (
    <motion.section className="relative overflow-hidden min-h-full" id="home">
      <div className="w-full h-full">
        <div className="container flex flex-col text-center relative">
          <img
            src="/assets/devasahayampillai.jpg"
            alt="Our Lady of Sorrows Church"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="relative w-full max-w-3xl mx-auto text-start">
              <div className="bg-black/50 backdrop-blur-md text-white py-4 px-6 rounded-md">
                <h2 className="text-xl font-semibold text-white">
                  St. Devasahayam
                </h2>
                <h4 className="font-semibold text-white">
                  India’s First Lay Catholic Saint
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center p-4">
          <h4 className="pb-4 text-[18px] font-semibold">
            Early Life & Conversation
          </h4>
          <p className="text-sm leading-normal font-medium">
            Devasahayam Mount in Tamil Nadu is a sacred site where St.
            Devasahayam, India’s first lay saint, was martyred in 1752. It is
            home to the Our Lady of Sorrows Church, which also serves as a
            prominent pilgrimage center.
          </p>

          <Button className="mt-4 bg-accent">Read More</Button>
        </div>
      </div>
    </motion.section>
  );
}
