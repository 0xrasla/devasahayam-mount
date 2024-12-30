export default function Gallery() {
  return (
    <section id="gallery" className="py-2 overflow-y-scroll">
      <h2 className="text-[27px] text-black font-bold px-4 py-2">Gallery</h2>
      <div className="container mx-auto px-4 flex gap-2 w-[100vh]">
        <img
          src={"1.jpg"}
          alt={"Maniyadichan Parai"}
          className="h-[300px] object-cover rounded-lg"
        />

        <div className="flex flex-col gap-2">
          <img
            src={"2.jpg"}
            alt={"Maniyadichan Parai"}
            className="h-[150px] w-[300px] object-cover rounded-lg"
          />

          <img
            src={"6.jpg"}
            alt={"Maniyadichan Parai"}
            className="h-[150px] w-[300px] object-cover rounded-lg"
          />
        </div>

        <img
          src={"4.jpg"}
          alt={"Maniyadichan Parai"}
          className="h-[300px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
