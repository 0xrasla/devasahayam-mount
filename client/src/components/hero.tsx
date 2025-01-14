import { useInterval, useViewportSize } from "@mantine/hooks";
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

  const bgImages = ["/hero.jpg"];

  useInterval(
    () => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    },
    3000,
    {
      autoInvoke: true,
    }
  );

  const { calculatedWidth, calculatedHeight } = getIframeDimensions();

  return (
    <div
      className="h-screen bg-transparent w-full relative overflow-hidden"
      id="home"
    >
      {bgImages.map(
        (image, index) =>
          index === bgIndex && (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full -z-30 bg-cover bg-center 0 object-contain object-left`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: width > 768 ? "center" : "-400px",
              }}
            ></div>
          )
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 -z-20"></div>

      <div className="flex flex-col md:flex-row items-center h-full gap-16 md:gap-0 md:mx-[10%] pt-[20%] md:py-0 md:w-auto w-full z-20">
        <div className="w-[90%] md:w-full mt-28 md:mt-0">
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
                <h2 className="text-white text-2xl text-center mt-4">
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
