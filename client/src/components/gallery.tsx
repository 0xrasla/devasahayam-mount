import { motion } from "framer-motion";
import { useState } from "react";
import { FocusCard } from "./ui/focuscard";

export default function Gallery() {
  const images = [
    {
      url: "1.jpg",
      title: "Maniyadichan Parai",
    },
    {
      url: "2.jpg",
      title: "Church",
    },
    {
      url: "5.jpg",
      title: "Church",
    },
    {
      url: "5.jpg",
      title: "Church",
    },
    {
      url: "2.jpg",
      title: "Church",
    },
    {
      url: "2.jpg",
      title: "Church",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
          {images.map((card, index) => (
            <FocusCard
              key={index}
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
