import { Clock11, Cross } from "lucide-react";

const schedules = [
  {
    day: "Sunday",
    masses: [
      {
        time: "7:00 AM",
        type: "Start your day with prayer and reflection.",
      },
      { time: "9:00 AM", type: "A celebration for all ages." },
      { time: "11:00 AM", type: "A solemn and uplifting service." },
      {
        time: "6:00 PM",
        type: "A peaceful conclusion to the day.",
      },
    ],
  },
  {
    day: "Weekdays (Monday - Saturday)",
    masses: [
      {
        time: "6:30 AM",
        type: "Begin your day with God's blessings.",
      },
      { time: "7:00 PM", type: "A moment of quiet devotion." },
    ],
  },
  {
    day: "First Friday",
    masses: [
      {
        time: "6:30 AM",
        type: "Honor the Sacred Heart of Jesus.",
      },
      {
        time: "7:00 PM",
        type: "A special devotion to the Sacred Heart.",
      },
    ],
  },
];

export default function MassSchedules() {
  return (
    <div className="min-h-screen bg-gray-50" id="mass">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Cross className="h-14 w-14 text-red-700 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 font-outfit">
            Mass Schedule
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Join us at Our Lady of Sorrows & Devasahayam Church for moments of
            spiritual peace.
          </p>
        </div>

        <div className="space-y-12">
          {schedules.map((schedule) => (
            <div
              key={schedule.day}
              className=" border-2 border-dashed border-gray-400 rounded-md p-4 bg-white cursor-pointer hover:bg-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {schedule.day}
              </h2>
              <ul className="space-y-3 text-lg text-gray-700 px-4">
                {schedule.masses.map((mass, index) => (
                  <li key={index}>
                    <p className="flex gap-2 items-center">
                      <Clock11 /> <strong>{mass.time}</strong>
                    </p>
                    <p className="pl-8">{mass.type}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-700 text-lg">
          <p>
            Let us come together as a community to celebrate faith, love, and
            devotion. All are welcome to join us.
          </p>
        </div>
      </div>
    </div>
  );
}
