import { motion } from "framer-motion";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="gallery"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Gallery
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-transparent transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-40">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-all duration-300  group-hover:opacity-100 opacity-0">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
