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
        block: "center",
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
            className={`text-[16px] font-semibold transition-colors font-avenir cursor-pointer duration-300 ${
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

          <div className="hidden md:flex space-x-8 text-[18px] font-bold uppercase font-avenir">
            {["Home", "About", "Saint", "Gallery", "Visit"].map((item) => (
              <button
                key={item}
                onClick={() => handleSmoothScroll(item.toLowerCase())}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-shrine-700 hover:text-shrine-900"
                    : "text-shrine-600 hover:text-shrine-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="gap-4 font-avenir hidden md:flex space-x-4">
            <Button className="capitalize bg-transparent h-[42px] w-[116px] hover:bg-transparent rounded-lg text-start text-accent border-[1px] border-accent text-[16px]">
              Contact
            </Button>
            <Button className="capitalize text-start h-[42px] w-[116px] bg-accent hover:bg-accent text-[16px] rounded-lg">
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
                  <SheetTitle className="text-start"></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="flex flex-col justify-start space-y-4 mt-4 text-lg uppercase font-medium items-start">
                  {["Home", "About", "Saint", "Gallery", "Visit"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => handleSmoothScroll(item.toLowerCase())}
                        className="text-shrine-700 hover:text-shrine-900 text-[16px] font-bold"
                      >
                        {item}
                      </button>
                    )
                  )}
                  <Button className="capitalize mt-4 bg-transparent hover:bg-transparent w-full text-start text-accent border-[1px] border-accent">
                    Contact
                  </Button>
                  <Button className="capitalize w-full text-start bg-accent hover:bg-accent">
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
