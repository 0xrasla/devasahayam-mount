export default function SaintNewDesign() {
  return (
    <div className="overflow-hidden  w-screen bg-white">
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center text-center relative w-screen  h-screen ">
          <img
            src="/assets/devasahayampillai.jpg"
            alt="Our Lady of Sorrows Church"
            className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
          />

          <img
            src="hero-desktop.jpg"
            alt="Green Bg"
            className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
          />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="relative w-full max-w-3xl md:max-w-full mx-auto text-start">
              <div className="bg-black/50 backdrop-blur-md text-white py-4 md:py-12 px-6 rounded-md md:flex md:flex-col md:gap-2">
                <div className="md:flex md:flex-col md:gap-3 md:w-[90%] md:mx-auto">
                  <h2 className="text-2xl font-semibold text-white md:font-black md:text-[50px] m-0">
                    St. Devasahayam
                  </h2>
                  <h4 className="font-semibold text-white md:font-normal md:text-[30px] m-0">
                    India’s First Lay Catholic Saint
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center p-4  md:w-[90%] md:mx-auto text-maincol">
        <h4 className="pb-4 text-[18px] font-semibold md:text-[30px]">
          Early Life & Conversation
        </h4>
        <p className="text-sm leading-normal font-medium md:text-[26px]">
          Devasahayam Mount in Tamil Nadu is a sacred site where St.
          Devasahayam, India’s first lay saint, was martyred in 1752. It is home
          to the Our Lady of Sorrows Church, which also serves as a prominent
          pilgrimage center.
        </p>

        <button className="mb-8 text-white font-bold mt-2 p-3 text-center md:text-start bg-accent text-[16px] rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
}
