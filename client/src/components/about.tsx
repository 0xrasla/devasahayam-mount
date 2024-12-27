import { Clock10, Landmark, MapIcon } from "lucide-react";
import { motion } from "motion/react";
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
  return (
    <section
      id="about"
      className="py-32 relative bg-gradient-to-b from-gray-100 to-white"
    >
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
          <h2 className="text-5xl font-bold mb-6 text-gray-900 font-outfit">
            About Our Shrine
          </h2>
          <p className="text-xl text-gray-600">
            A place of peace, reflection, and devotion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-center justify-items-center">
          {spotlightData.map((spotlight, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-12 animate-slide-up"
              key={index}
            >
              <div className="space-y-4 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-center">
                <div className="mb-4">{spotlight.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {spotlight.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
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
                  className="mt-6"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
