import { Button } from "./ui/button";

export default function MassTimings() {
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

  return (
    <section
      id="masstimings"
      className="to-white w-screen md:w-[90%] md:mx-auto"
    >
      <div className="py-6">
        <h2 className="text-[26px] font-bold p-[0] text-maincol md:text-[30px]">
          Mass Timings
        </h2>

        <div>
          <p className="text-[16px] md:text-[18px] py-2">
            Join us for daily and special Masses at the shrine. Our Masses are
            held at various timings to accommodate all visitors.
          </p>
          <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 h-full py-4">
            {schedules.map((schedule, index) => {
              const isLast = index === schedules.length - 1;

              return (
                <div
                  key={schedule.day}
                  className={`flex flex-col md:gap-6  h-full py-4 rounded-md ${
                    index === 0
                      ? "md:row-span-2 h-full"
                      : "md:row-span-1 h-full"
                  }`}
                >
                  <div className="md:p-2 flex flex-col gap-4 justify-between md:justify-start h-full">
                    <h4 className="p-0 pb-2 font-bold text-[16px] md:text-[20px] text-black">
                      {schedule.day}
                    </h4>
                    <div className="flex flex-col gap-2 md:gap-6">
                      {schedule.masses.map((mass, massIndex) => (
                        <div key={massIndex}>
                          <p className="pb-1 md:text-[18px]">{mass.type}</p>
                          <p className="font-bold text-black md:text-[18px]">
                            {mass.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-accent font-bold text-[16px] mt-4 md:hidden px-6">
            Learn More
          </p>

          <Button
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeZYID_bglTxsK9dNH3_RTGnmTOJbGRaTd8wahKa-g4gham5g/viewform?usp=dialog",
                "_blank"
              );
            }}
            className="capitalize  hidden md:block font-bold text-start h-[42px] w-[116px] bg-accent hover:bg-accent text-[16px] rounded-lg"
          >
            Book a Mass
          </Button>
        </div>
      </div>
    </section>
  );
}
