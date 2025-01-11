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
import { MenuIcon } from "lucide-react";
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
      className={`fixed w-full z-50 transition-all duration-200 font-outfit ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white font-bold"
      }`}
    >
      <div className="w-[90%] mx-auto">
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
            <img
              src="/logo.svg"
              alt="logo"
              className="w-[70px] md:w-[100px] h-[100px]"
            />
          </span>

          <div className="hidden md:flex space-x-8 text-[18px] uppercase font-avenir">
            {["Home", "About"].map((item) => (
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

            <button
              key={"masstiming"}
              onClick={() => {
                handleSmoothScroll("masstimings");
              }}
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-shrine-700 hover:text-shrine-900"
                  : "text-shrine-600 hover:text-shrine-800"
              }`}
            >
              Mass Timings
            </button>

            <button
              key={"gallery"}
              onClick={() => {
                navigate({
                  to: "/gallery",
                });
              }}
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-shrine-700 hover:text-shrine-900"
                  : "text-shrine-600 hover:text-shrine-800"
              }`}
            >
              Gallery
            </button>
          </div>

          <div className="gap-2 font-avenir hidden md:flex space-x-4">
            <Button className="capitalize bg-transparent h-[42px] font-bold w-[116px] hover:bg-transparent rounded-lg text-start text-accent border-[1px] border-accent text-[16px]">
              Contact
            </Button>
            <Button className="capitalize text-start h-[42px] w-[116px] font-bold bg-accent hover:bg-accent text-[16px] rounded-lg">
              Donate
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="focus:outline-none">
                  <MenuIcon className="w-[30px] h-[30px]" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <SheetHeader>
                  <SheetTitle className="text-start"></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="flex flex-col justify-start space-y-4 mt-4 text-lg uppercase font-medium items-start">
                  {["Home", "About"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleSmoothScroll(item.toLowerCase())}
                      className="text-shrine-700 hover:text-shrine-900 text-[16px] font-bold"
                    >
                      {item}
                    </button>
                  ))}

                  <button
                    key={"masstiming"}
                    onClick={() => {
                      handleSmoothScroll("masstimings");
                    }}
                    className={`text-shrine-700 hover:text-shrine-900 text-[16px] font-bold`}
                  >
                    Mass Timings
                  </button>

                  <button
                    key={"gallery"}
                    onClick={() => {
                      navigate({
                        to: "/gallery",
                      });
                    }}
                    className={`text-shrine-700 hover:text-shrine-900 text-[16px] font-bold`}
                  >
                    Gallery
                  </button>

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
