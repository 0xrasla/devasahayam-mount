import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MagicCard } from "./ui/maigccard/magiccard";

const spotlightData = [
  {
    title: "Mass Timings",
    description:
      "Join us for daily and special Masses at the shrine. Our Masses are held at various times to accommodate all visitors.",
  },
  {
    title: "Sacred Places",
    description:
      "Discover the sacred spots at the shrine. These places are filled with prayer and reflection, perfect for those seeking solace.",
  },
  {
    title: "Location & Address",
    description:
      "Find us at Devasahayam Mount, Tamil Nadu. We're easy to reach, and our shrine welcomes visitors from all over the world.",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="pb-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.3,
        duration: 0.5,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 font-outfit">
          About Our Shrine
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="grid md:grid-cols-3 gap-6"
        >
          {spotlightData.map((spotlight, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
              }}
              className="cursor-pointer"
            >
              <MagicCard
                key={index}
                title={spotlight.title}
                className="flex flex-col justify-between h-[250px] hover:bg-gray-100 transition-all duration-300 ease-in-out cards"
                gradientColor="#f0f0f0"
                gradientSize={50}
              >
                <div className="p-6 h-full text-center">
                  <h1 className="text-2xl font-bold text-gray-900 font-outfit mb-2">
                    {spotlight.title}
                  </h1>
                  <p className="text-lg text-gray-900">
                    {spotlight.description}
                  </p>
                  <Button className="mt-6">Learn More</Button>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
