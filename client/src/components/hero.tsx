import { useViewportSize } from "@mantine/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
// @ts-ignore
import Slider from "react-slick";
import { ReactTyped } from "react-typed";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HeroDesignNew() {
  const { width } = useViewportSize();

  const getIframeDimensions = () => {
    const aspectRatio = 16 / 9;
    const maxWidth = width > 768 ? 560 : 380;
    const calculatedWidth = Math.min(width * 0.9, maxWidth);
    const calculatedHeight = calculatedWidth / aspectRatio;
    return { calculatedWidth, calculatedHeight };
  };

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

  const { calculatedWidth, calculatedHeight } = getIframeDimensions();

  return (
    <div
      className="h-screen bg-gray-300 w-full"
      style={{
        background: "url(/assets/hero-blur.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center  h-full gap-16 md:gap-0 md:mx-[10%] pt-[20%] md:py-0 md:w-auto w-full">
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

        <div className="w-[400px] md:w-[600px] relative">
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
