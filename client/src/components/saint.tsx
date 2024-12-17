export default function Saint() {
  return (
    <section id="saint" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-slide-up">
          <h2 className="text-5xl  font-bold mb-6 text-shrine-800">
            Saint Devasahayam Pillai
          </h2>
          <p className="text-xl text-shrine-600">
            India's First Lay Catholic Saint
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className="space-y-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl  font-semibold text-shrine-700">
                Early Life & Conversion
              </h3>
              <p className="text-lg text-shrine-600 leading-relaxed">
                Born in 1712 in Nattalam as Neelakandan, he served in the royal
                palace of Travancore. His encounter with a Dutch naval commander
                led him to Christianity, embracing the name Lazarus in 1745.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl  font-semibold text-shrine-700">
                Martyrdom & Legacy
              </h3>
              <p className="text-lg text-shrine-600 leading-relaxed">
                Facing severe persecution for his faith, he was martyred on
                January 14, 1752. His unwavering devotion and sacrifice led to
                his canonization by Pope Francis in 2022, making him the first
                Indian lay Catholic saint.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl  font-semibold text-shrine-700">
                Spiritual Impact
              </h3>
              <p className="text-lg text-shrine-600 leading-relaxed">
                His life continues to inspire millions, embodying the values of
                religious conviction, courage, and dedication to faith despite
                adversity.
              </p>
            </div>
          </div>

          <div
            className="relative animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-shrine-200 rounded-3xl transform rotate-3"></div>
            <img
              src="/shrine.jpg"
              alt="Saint Devasahayam"
              className="relative z-10 rounded-3xl shadow-xl w-full h-[600px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
