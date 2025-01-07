import { motion } from "motion/react";

export default function HeroDesignNew() {
  return (
    <motion.section
      className="relative overflow-hidden pt-16 h-screen w-screen"
      id="home"
    >
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center text-center relative h-full w-screen">
          <img
            src="/marie.jpg"
            alt="Our Lady of Sorrows Church"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="relative w-full max-w-3xl md:max-w-full mx-auto text-start">
              <div className="bg-black/50 backdrop-blur-md text-white py-4 md:py-12 px-6 rounded-md md:flex md:flex-col md:gap-2">
                <div className="md:flex md:flex-col md:gap-3 md:w-[90%] md:mx-auto">
                  <h2 className="text-2xl font-semibold text-white md:font-black md:text-[50px] m-0">
                    Our Lady of Sorrows Church
                  </h2>
                  <h4 className="font-semibold text-white md:font-normal md:text-[30px] m-0">
                    Devasahayam Mount
                  </h4>
                  <button className=" text-white font-normal w-[132px] mt-2 p-2 text-center md:text-start bg-accent text-[16px] rounded-lg md:hidden">
                    Plan to visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm p-4 leading-normal font-medium">
          Devasahayam Mount in Tamil Nadu is a sacred site where St.
          Devasahayam, India’s first lay saint, was martyred in 1752. It is home
          to the Our Lady of Sorrows Church, which also serves as a prominent
          pilgrimage center.
        </p>
      </div>
    </motion.section>
  );
}
