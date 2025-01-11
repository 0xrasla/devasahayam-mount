import { useViewportSize } from "@mantine/hooks";
import { motion } from "motion/react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SecondDesign() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
  };

  const { height, width } = useViewportSize();

  return (
    <motion.section
      className="relative overflow-hidden h-screen w-full"
      id="home"
    >
      <div className="w-full h-full">
        <Slider {...settings}>
          <div className="flex flex-col justify-center items-center text-center relative h-screen w-screen">
            {width < 768 ? (
              <img
                src="/marie.jpg"
                alt="Our Lady of Sorrows Church"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            ) : (
              <img
                src="/hero.jpg"
                alt="Green Bg"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}

            <div className="absolute bottom-0 left-0 right-0">
              <div className="relative w-full max-w-3xl md:max-w-full mx-auto text-start">
                <div className="bg-black/50 backdrop-blur-md text-white py-4 md:py-12 px-6 rounded-md md:flex md:flex-col md:gap-2">
                  <motion.div className="md:flex md:flex-col md:gap-3 md:w-[90%] md:mx-auto">
                    <motion.h1
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-2xl font-semibold text-white md:font-black md:text-[50px] m-0"
                    >
                      Our Lady of Sorrows
                    </motion.h1>
                    <motion.h3
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="font-semibold text-white md:font-normal md:text-[30px] m-0"
                    >
                      Our Lady of Sorrows embodies the profound strength and
                      compassion of Mary as she endured immense grief during the
                      suffering and crucifixion of Jesus, inspiring faith,
                      empathy, and hope in times of hardship.
                    </motion.h3>
                    <button className=" text-white font-normal w-[132px] mt-2 p-2 text-center md:text-start bg-accent text-[16px] rounded-lg md:hidden">
                      Plan to visit
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center relative h-screen w-screen">
            {width < 768 ? (
              <img
                src="/assets/devasahayampillai.jpg"
                alt="Our Lady of Sorrows Church"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            ) : (
              <img
                src="hero-desktop.jpg"
                alt="Green Bg"
                className="absolute top-0 left-0 w-full h-full object-cover hidden"
              />
            )}

            <div className="absolute bottom-0 left-0 right-0">
              <div className="relative w-full max-w-3xl md:max-w-full mx-auto text-start">
                <div className="bg-black/50 backdrop-blur-md text-white py-4 md:py-12 px-6 rounded-md md:flex md:flex-col md:gap-2">
                  <motion.div className="md:flex md:flex-col md:gap-3 md:w-[90%] md:mx-auto">
                    <motion.h1
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-2xl font-semibold text-white md:font-black md:text-[50px] m-0"
                    >
                      St. Devasahayam
                    </motion.h1>
                    <motion.h3
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="font-semibold text-white md:font-normal md:text-[30px] m-0"
                    >
                      St. Devasahayam, a fearless martyr and saint, dedicated
                      his life to spreading Christianity in 18th-century India,
                      despite facing persecution and hardship. His unwavering
                      faith and sacrifice continue to inspire countless
                      believers around the world.
                    </motion.h3>
                    <button className=" text-white font-normal w-[132px] mt-2 p-2 text-center md:text-start bg-accent text-[16px] rounded-lg md:hidden">
                      Plan to visit
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </motion.section>
  );
}
