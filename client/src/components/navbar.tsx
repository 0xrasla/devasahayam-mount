import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span
              className={` text-2xl font-semibold transition-colors duration-300 ${
                isScrolled ? "text-shrine-800" : "text-shrine-700"
              }`}
            >
              Our Lady of Sorrows Church
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Saint", "Gallery", "Visit"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-shrine-700 hover:text-shrine-900"
                    : "text-shrine-600 hover:text-shrine-800"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
