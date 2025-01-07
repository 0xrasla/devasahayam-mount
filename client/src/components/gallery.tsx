export default function Gallery() {
  let images = ["1.jpg", "2.jpg", "6.jpg", "4.jpg"];

  return (
    <section
      id="gallery"
      className="py-2 overflow-y-scroll md:w-[90%] md:mx-auto"
    >
      <h2 className="text-[27px] text-maincol font-bold px-4 py-2">Gallery</h2>
      <div className="container md:mx-0 mx-auto px-4 gap-2 w-full grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={"Maniyadichan Parai"}
              className={`h-[300px] md:h-[500px] object-cover rounded-lg 
          ${index === 0 ? "md:col-span-3" : ""}  
          ${index === 1 ? "md:row-span-2" : ""} 
          ${index === 2 ? "md:col-span-1" : ""}  
          ${index === 3 ? "md:col-span-3" : ""} `}
            />
          );
        })}
      </div>
    </section>
  );
}
