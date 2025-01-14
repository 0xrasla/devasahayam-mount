import { useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Gallery() {
  const navigate = useNavigate();
  const images = [
    { src: "1.jpg", alt: "Maniyadichan Parai" },
    { src: "2.jpg", alt: "Maniyadichan Parai" },
    { src: "5.jpg", alt: "Maniyadichan Parai" },
    { src: "4.jpg", alt: "Maniyadichan Parai" },
    { src: "5.jpg", alt: "Maniyadichan Parai" },
    { src: "4.jpg", alt: "Maniyadichan Parai" },
    { src: "1.jpg", alt: "Maniyadichan Parai" },
  ];

  return (
    <section id="gallery" className="py-2 h-full  ">
      <h2 className="text-[27px]  text-black font-bold md:w-[90%] md:px-0 md:mx-auto mx-4 lg:px-0  py-2">
        Gallery
      </h2>

      <div className=" md:w-[90%] md:mx-auto mx-4 md:px-0 lg:px-0 py-2 overflow-x-auto scrollbar-width-none">
        <div className="flex   gap-2">
          {images.map((image, index) => {
            const positionInChunk = (index % 3) + 1;

            if (positionInChunk === 3) {
              return null;
            }
            if (positionInChunk === 2) {
              return (
                <div key={`chunk-${index}`} className="flex flex-col gap-2">
                  <img
                    src={image?.src}
                    alt={image.alt}
                    className="min-w-16 max-w-48 md:min-w-48 md:max-w-64 lg:min-w-64 lg:max-w-72 object-cover rounded-lg aspect-square h-full"
                  />
                  <img
                    src={images[index + 1]?.src}
                    alt={image.alt}
                    className="min-w-16 md:min-w-48 md:max-w-64 lg:min-w-64 lg:max-w-72 max-w-48 object-cover rounded-lg aspect-square h-full"
                  />
                </div>
              );
            }

            return (
              <div key={`single-${index}`} className="">
                <img
                  src={image?.src}
                  alt="Devasahayam Mount, Aralvoimozhi"
                  className="min-w-24 max-w-64 h-full  object-cover rounded-lg md:min-w-64 md:max-w-72 lg:min-w-64 lg:max-w-96  aspect-square"
                />
              </div>
            );
          })}
        </div>
        <Button
          onClick={() => {
            navigate({
              to: "/gallery",
            });
          }}
          className="capitalize font-bold text-start h-[42px] w-[116px] bg-accent hover:bg-white text-[16px] rounded-lg mt-3 cursor-pointer hover:text-accent border hover:border-accent "
        >
          View more...
        </Button>
      </div>
    </section>
  );
}
