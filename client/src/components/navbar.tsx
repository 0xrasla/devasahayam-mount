import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 font-outfit ${
        isScrolled ? "bg-green-100 py-4 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled ? "text-shrine-800" : "text-shrine-700"
              }`}
            >
              Our Lady of Sorrows Church
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold uppercase">
            {["Home", "About", "Saint", "Gallery", "Visit"].map((item) => (
              <button
                key={item}
                onClick={() => handleSmoothScroll(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-shrine-700 hover:text-shrine-900"
                    : "text-shrine-600 hover:text-shrine-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-shrine-700 focus:outline-none">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-start">
                    Devasahayam Mount
                  </SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="flex flex-col justify-start space-y-4 mt-4 text-lg uppercase font-medium items-start">
                  {["Home", "About", "Saint", "Gallery", "Visit"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => handleSmoothScroll(item.toLowerCase())}
                        className="text-shrine-700 hover:text-shrine-900"
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
