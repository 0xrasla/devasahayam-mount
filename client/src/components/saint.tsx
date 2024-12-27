import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GridPattern } from "./ui/box-baground";
import { Button } from "./ui/button";

export default function Saint() {
  const navigate = useNavigate();

  return (
    <section id="saint" className="py-32 relative">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20 animate-slide-up"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
        >
          <h2 className="text-5xl  font-bold mb-6 text-shrine-800 font-outfit">
            Saint Devasahayam Pillai
          </h2>
          <p className="text-xl text-shrine-600">
            India's First Lay Catholic Saint
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 animate-slide-up"
          >
            <div className="space-y-4">
              <h3 className="text-2xl  font-semibold text-shrine-700">
                Early Life & Conversion
              </h3>
              <p className="text-lg text-shrine-600 leading-relaxed">
                Born in 1712 in Nattalam as Neelakandan, he served in the royal
                palace of Travancore. His encounter with a Dutch naval commander
                led him to Christianity, embracing the name Lazarus in 1745.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl  font-semibold text-shrine-700">
                Martyrdom & Legacy
              </h3>
              <p className="text-lg text-shrine-600 leading-relaxed">
                Facing severe persecution for his faith, he was martyred on
                January 14, 1752. His unwavering devotion and sacrifice led to
                his canonization by Pope Francis in 2022, making him the first
                Indian lay Catholic saint.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl  font-semibold text-shrine-700">
                Spiritual Impact
              </h3>
              <p className="text-lg text-shrine-600 leading-relaxed">
                His life continues to inspire millions, embodying the values of
                religious conviction, courage, and dedication to faith despite
                adversity.
              </p>
            </div>

            <Button
              onClick={() =>
                navigate({
                  to: "/history",
                })
              }
            >
              Read More
            </Button>
          </motion.div>

          <div
            className="relative animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-shrine-200 rounded-3xl transform rotate-3"></div>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 1, delay: 0.5 }}
              viewport={{ once: true }}
              src="/shrine.jpg"
              alt="Saint Devasahayam"
              className="relative z-10 rounded-3xl shadow-xl w-full h-[600px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
