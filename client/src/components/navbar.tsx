import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

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
        isScrolled ? "bg-white shadow-md py-6" : "bg-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <span
            className={`text-[16px] font-semibold transition-colors cursor-pointer duration-300 ${
              isScrolled ? "text-shrine-800" : "text-shrine-700"
            }`}
            onClick={() => {
              navigate({
                to: "/",
              });
            }}
          >
            Our Lady of Sorrows Church
          </span>

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

          <div className="hidden md:flex space-x-4">
            <Button
              type="button"
              className="border-2 border-black p-4 rounded-lg bg-transparent text-black hover:bg-transparent w-full"
            >
              Contact
            </Button>
            <Button
              type="button"
              className="border-2 border-black p-4 rounded-lg"
            >
              Donate
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-shrine-700 focus:outline-none">
                  <img src="/assets/hamburger-menu.svg" />
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
                  <Button className="uppercase bg-transparent mt-4 w-full text-start text-black border-2 border-black hover:bg-transparent">
                    Contact
                  </Button>
                  <Button className="uppercase w-full text-start">
                    Donate
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
