import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Mass Schedule", href: "#schedule" },
    { name: "Shrine", href: "#shrine" },
    { name: "Saint", href: "#saint" },
    { name: "Gallery", href: "#gallery" },
  ];

  const massTimings = [
    { day: "Weekdays", time: "6:30 AM, 6:00 PM" },
    { day: "Saturday", time: "6:30 AM, 5:30 PM" },
    { day: "Sunday", time: "6:30 AM, 8:30 AM, 5:30 PM" },
  ];

  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>contact@rcchurch.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1" />
                <span>
                  123 Church Street, Devesahayamount, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
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
            <h3 className="text-white text-lg font-semibold mb-4">
              Stay Connected
            </h3>
            <div className="flex space-x-4 mb-6">
              <img src="/assets/facebook.svg" alt="" />
              <img src="/assets/instagram.svg" alt="" />
              <img src="/assets/youtube.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} RC Church - Devesahayamount. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
