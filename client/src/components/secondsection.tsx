import { useViewportSize } from "@mantine/hooks";
import { motion } from "motion/react";
import { useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SecondDesign() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { width } = useViewportSize();

  const slides = [
    {
      image: width < 768 ? "/marie.jpg" : "/hero.jpg",
      title: "Our Lady of Sorrows",
      description:
        "Our Lady of Sorrows embodies the profound strength and compassion of Mary as she endured immense grief during the suffering and crucifixion of Jesus, inspiring faith, empathy, and hope in times of hardship.",
    },
    {
      image:
        width < 768 ? "/assets/devasahayampillai.jpg" : "/hero-desktop.jpg",
      title: "St. Devasahayam",
      description:
        "St. Devasahayam, a fearless martyr and saint, dedicated his life to spreading Christianity in 18th-century India, despite facing persecution and hardship. His unwavering faith and sacrifice continue to inspire countless believers around the world.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
    beforeChange: () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 700); // Reset after animation time
    },
  };

  return (
    <motion.section
      className="relative overflow-hidden h-screen w-full"
      id="home"
    >
      <div className="w-full h-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center relative h-screen w-screen"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0"
                initial={{ y: 200, opacity: 0 }}
                animate={{
                  opacity: isAnimating ? 0 : 1,
                  y: isAnimating ? 200 : 0,
                }}
                exit={{ y: 200, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  duration: 0.1,
                }}
              >
                <div className="relative w-full max-w-3xl md:max-w-full mx-auto text-start">
                  <div className="bg-black/50 backdrop-blur-md text-white py-4 md:py-12 px-6 rounded-md md:flex md:flex-col md:gap-2">
                    <div className="md:flex md:flex-col md:gap-3 md:w-[90%] md:mx-auto">
                      <h1 className="text-2xl font-semibold text-white md:font-black md:text-[50px] m-0">
                        {slide.title}
                      </h1>
                      <h3 className="font-semibold text-white md:font-normal md:text-[30px] m-0">
                        {slide.description}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}
