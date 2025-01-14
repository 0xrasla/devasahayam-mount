import { useInterval, useViewportSize } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReactTyped } from "react-typed";
// @ts-ignore
import Slider from "react-slick";

export default function Hero() {
  const { width } = useViewportSize();

  const [bgIndex, setBgIndex] = useState(0);
  const bgMedia = [
    { type: "image", src: "/hero.jpg", alt: "hero" },
    { type: "video", src: "/hero.mp4", alt: "hero" },
  ];

  const getMediaDuration = () =>
    bgMedia[bgIndex].type === "image" ? 5000 : 30000;

  useInterval(
    () => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgMedia.length);
    },
    getMediaDuration(),
    {
      autoInvoke: true,
    }
  );

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  const mediaStyles =
    bgMedia[bgIndex].type === "image"
      ? {
          backgroundImage: `url(${bgMedia[bgIndex].src})`,
          backgroundPosition: width > 768 ? "center" : "-400px",
          backgroundSize: "cover",
        }
      : {};

  return (
    <div className="h-screen w-full relative overflow-hidden" id="home">
      <AnimatePresence mode="wait">
        {bgMedia[bgIndex].type === "image" ? (
          <motion.div
            key="image"
            className="absolute top-0 left-0 w-full h-full z-0"
            style={mediaStyles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
        ) : (
          <motion.video
            key="video"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={bgMedia[bgIndex].src}
            autoPlay
            muted
            loop
            style={{ objectFit: "cover" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-10"></div>

      <div className="flex flex-col md:flex-row items-center h-full gap-16 md:gap-0 md:mx-[10%] pt-[20%] md:py-0 md:w-auto w-full z-20">
        <div className="w-[90%] md:w-full mt-28 md:mt-0 z-20">
          <h1 className="text-5xl md:text-7xl text-white uppercase font-bold">
            Basilica of
          </h1>
          <h2 className="text-3xl md:text-6xl text-white min-h-[2em]">
            <ReactTyped
              strings={["Our Lady of Sorrow", "Martyr St.Devasahayam"]}
              typeSpeed={100}
              loop
              cursorChar=""
            />
          </h2>
        </div>
        <div className="w-[400px] md:w-[600px] relative hidden md:block">
          <Slider {...settings}>
            {[
              {
                id: "YMP5kZmEXLs",
                content:
                  "மறைசாட்சி புனித தேவசகாயம் பெருவிழா, தேவசகாயம் மவுண்ட் | 2 ஆம் திருவிழா திருப்பலி | 13-1-2025",
              },
              {
                id: "Tnlk4COkDp0",
                content:
                  "மறைசாட்சி புனித தேவசகாயம் பெருவிழா, தேவசகாயம் மவுண்ட் | 1 ஆம் திருவிழா திருப்பலி | 12-1-2025",
              },
            ].map((video, index) => (
              <div key={index} className="relative p-4">
                <iframe
                  className="rounded-lg"
                  height={315}
                  width={560}
                  src={`https://www.youtube.com/embed/${video.id}?si=fjtpdzJEFGy0Ga4a`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <h2 className="text-white text-2xl text-center mt-4">
                  {video.content}
                </h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
