import { useInterval, useViewportSize } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion"; // Fixed import error
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import { ReactTyped } from "react-typed";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
      onClick={onClick}
    >
      <ChevronRight color="white" size={32} />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-80 p-2 rounded-full hover:bg-opacity-80"
      onClick={onClick}
    >
      <ChevronLeft color="white" size={32} />
    </div>
  );
}

export default function Hero() {
  const { width } = useViewportSize();

  const getIframeDimensions = () => {
    const aspectRatio = 16 / 9;
    const maxWidth = width > 768 ? 560 : 380;
    const calculatedWidth = Math.min(width * 0.9, maxWidth);
    const calculatedHeight = calculatedWidth / aspectRatio;
    return { calculatedWidth, calculatedHeight };
  };

  const [bgIndex, setBgIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const bgImages = ["/assets/hero-blur.webp", "/hero.jpg"];

  useInterval(() => {
    setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  }, 3000);

  const { calculatedWidth, calculatedHeight } = getIframeDimensions();

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <AnimatePresence>
        {bgImages.map(
          (image, index) =>
            index === bgIndex && (
              <motion.div
                key={index}
                className="fixed top-0 left-0 w-full h-full z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <img
                  src={image}
                  alt="hero background"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col md:flex-row items-center h-full gap-16 md:gap-0 md:mx-[10%] pt-[20%] md:py-0 md:w-auto w-full">
        <div className="w-[90%] md:w-full mt-28 md:mt-0 text-white">
          <h1 className="text-5xl md:text-7xl uppercase font-bold drop-shadow-lg">
            Basilica of
          </h1>
          <h2 className="text-3xl md:text-6xl min-h-[2em] drop-shadow-lg">
            <ReactTyped
              strings={["Our Lady of Sorrow", "Martyr St. Devasahayam"]}
              typeSpeed={100}
              loop
              cursorChar=""
            />
          </h2>
        </div>

        <div className="w-[400px] md:w-[600px] relative hidden md:block z-10">
          <Slider {...settings}>
            {["NmOh2xDfTSU", "1uDfq0zVK04"].map((videoId, index) => (
              <div key={index} className="relative p-4">
                <iframe
                  className="rounded-lg"
                  width={calculatedWidth}
                  height={calculatedHeight}
                  src={`https://www.youtube.com/embed/${videoId}?si=fjtpdzJEFGy0Ga4a`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <h2 className="text-white text-2xl text-center mt-4 drop-shadow-lg">
                  2024 Mass
                </h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
