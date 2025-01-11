import { ChevronLeft, ChevronRight } from "lucide-react";
// @ts-ignore
import Slider from "react-slick";
import { ReactTyped } from "react-typed";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HeroDesignNew() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
        onClick={onClick}
      >
        <ChevronLeft color="white" size={32} />
      </div>
    );
  }

  return (
    <div
      className="h-screen mt-9 bg-gray-300 w-[95%] mx-auto"
      style={{
        background: "url(/assets/hero-blur.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between h-full mx-[10%]">
        <div>
          <h1 className="text-7xl text-white uppercase font-bold">
            Basilica of
          </h1>
          <h2 className="text-6xl text-white" style={{ minHeight: "1em" }}>
            <ReactTyped
              strings={["Our Lady of Sorrow", "Martyr St.Devasahayam"]}
              typeSpeed={100}
              loop
              cursorChar=""
            />
          </h2>
        </div>

        <div className="w-[600px] relative">
          <Slider {...settings}>
            <div className="relative p-4">
              <iframe
                className="rounded-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <h2 className="text-white text-2xl text-center mt-4">
                2024 Mass
              </h2>
            </div>

            <div className="relative p-4">
              <iframe
                className="rounded-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1uDfq0zVK04?si=bMvBi5Xux5ghqm7O"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <h2 className="text-white text-2xl text-center mt-4">
                2024 Mass
              </h2>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
