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
        inline: "nearest",
      });
    }
  };

  const pathstoBlack = ["/gallery"];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-200 font-outfit text-white ${isScrolled ? "bg-white" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center px-[5%] h-[70px] md:h-[100px]">
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
          <img src="/logo.png" alt="logo" className="w-[60px] md:w-[100px]" />
        </span>

        <div
          className={`hidden md:flex space-x-8 text-[18px] uppercase font-avenir ${!isScrolled ? "text-white" : "text-black"}`}
        >
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
          <Button
            className={`capitalize bg-maincol border-2 h-[42px] font-bold w-[116px] hover:bg-transparent rounded-lg text-start ${window.location.pathname.includes("/gallery") || isScrolled ? "text-accent" : "text-white"} border-[1px] border-accent text-[16px]`}
          >
            Contact
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="focus:outline-none">
                <MenuIcon
                  className={`w-[30px] h-[30px] ${window.location.pathname.includes("/gallery") || isScrolled ? "text-black" : "text-white"}`}
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white min-h-screen">
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

                <Button
                  className={`capitalize mt-4 bg-transparent hover:bg-transparent w-full text-start text-accent border-[1px] border-accent ${window.location.pathname === "/gallery" ? "text-maincol" : ""}`}
                >
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
