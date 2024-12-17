export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80",
      title: "Shrine Interior",
    },
    {
      url: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&q=80",
      title: "Prayer Hall",
    },
    {
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80",
      title: "Saint Statue",
    },
    {
      url: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&q=80",
      title: "Shrine Exterior",
    },
    {
      url: "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?auto=format&fit=crop&q=80",
      title: "Prayer Garden",
    },
    {
      url: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&q=80",
      title: "Evening Mass",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
