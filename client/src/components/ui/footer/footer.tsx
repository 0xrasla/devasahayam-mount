import {
  Calendar,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import SocialLink from "./sociallink";

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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-red-500" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-red-500" />
                <span>contact@rcchurch.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-red-500" />
                <span>
                  123 Church Street, Devesahayamount, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-red-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mass Timings */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              <Calendar size={20} className="inline-block mr-2" />
              Mass Timings
            </h3>
            <ul className="space-y-2">
              {massTimings.map((mass) => (
                <li key={mass.day}>
                  <span className="font-medium">{mass.day}:</span>
                  <br />
                  <span className="text-gray-400">{mass.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Stay Connected
            </h3>
            <div className="flex space-x-4 mb-6">
              <SocialLink
                href="https://facebook.com"
                icon={Facebook}
                label="Facebook"
              />
              <SocialLink
                href="https://instagram.com"
                icon={Instagram}
                label="Instagram"
              />
              <SocialLink
                href="https://youtube.com"
                icon={Youtube}
                label="YouTube"
              />
            </div>
            <form className="mt-4">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full bg-gray-800 border-gray-700 text-white focus:ring-red-500 focus:border-red-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
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
