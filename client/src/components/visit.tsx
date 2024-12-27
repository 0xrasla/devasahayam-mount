import { Calendar, Info, MapPin } from "lucide-react";

export default function Visit() {
  return (
    <section id="visit" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 font-outfit">
          Plan Your Visit
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-red-700 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">How to Reach</h3>
                <p className="text-gray-600">
                  Kattadi Malai hill in Aralvaimozhi, Tamil Nadu, India
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-red-700 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Best Time to Visit
                </h3>
                <p className="text-gray-600">
                  The shrine is open year-round. Special celebrations during the
                  feast day on January 14th.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Info className="h-6 w-6 text-red-700 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Facilities</h3>
                <p className="text-gray-600">
                  - Parking available
                  <br />
                  - Restrooms
                  <br />
                  - Prayer halls
                  <br />
                  - Meditation areas
                  <br />- Shrine shop
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Guidelines for Visitors
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Please maintain silence in prayer areas</li>
              <li>• Dress modestly and appropriately</li>
              <li>• Photography is restricted in certain areas</li>
              <li>• Follow COVID-19 safety protocols</li>
              <li>• Respect the sacred spaces and other visitors</li>
              <li>• Large groups should inform in advance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
