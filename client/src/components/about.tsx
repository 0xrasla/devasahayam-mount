import { Clock, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          About Our Shrine
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MapPin className="h-8 w-8 text-red-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              Devesahayam Mount, Kottar, Nagercoil, Tamil Nadu, India
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-8 w-8 text-red-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mass Timings</h3>
            <p className="text-gray-600">
              Weekdays: 6:30 AM & 6:00 PM
              <br />
              Sundays: 6:30 AM, 8:30 AM & 6:00 PM
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="h-8 w-8 text-red-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">
              Phone: +91 XXX XXX XXXX
              <br />
              Email: info@devesahayamshrine.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
