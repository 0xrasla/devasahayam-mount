import { MailIcon, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Mass Timings", href: "#schedule" },
    { name: "Gallery", href: "gallery" },
  ];

  return (
    <footer className="bg-accent text-white">
      <div className="mx-auto w-[90%] sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div>
            <h3 className="text-white text-lg md:text-[28px] font-bold mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>
                  <a href="tel:+918903760869">+91 89037 60869</a>
                </span>
              </div>
              <div className="flex items-center">
                <MailIcon size={20} className="mr-2" />
                <span>
                  <a href="mailto:devasahayammountshrine@gmail.com">
                    devasahayammountshrine@gmail.com
                  </a>
                </span>
              </div>
              <div className="">
                <a
                  className="flex items-start"
                  href={`https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=${8.240166189309809},${77.52512889748944}&travelmode=driving`}
                >
                  <MapPin size={20} className="mr-2 mt-1" />
                  <span>Devesahayamount, Tamil Nadu, India</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg md:text-[28px] font-semibold mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-red-500 transition-colors underline underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg md:text-[28px] font-semibold mb-4">
              Stay Connected
            </h3>
            <div className="flex space-x-4 mb-6">
              <img
                src="/assets/facebook.svg"
                alt=""
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/Devasahayammountshrine",
                    "_blank"
                  );
                }}
              />
              <img
                src="/assets/instagram.svg"
                alt=""
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/devasahayammountshrine?igsh=MXJ1d3N5aXlxcHVuMw==",
                    "_blank"
                  );
                }}
              />
              <img
                src="/assets/youtube.svg"
                alt=""
                onClick={() => {
                  window.open(
                    "https://youtube.com/@devasahayammountshrine5677?si=VMI5LnpVg0_qa_Ud",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white text-center">
          <p>
            &copy; {new Date().getFullYear()} RC Church - Devesahayamount. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
