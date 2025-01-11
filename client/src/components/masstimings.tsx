import { Button } from "./ui/button";

export default function MassTimings() {
  const schedules = [
    {
      day: "Monaday - Saturday",
      masses: [
        {
          time: "Morning - 6:00 AM",
        },
        { time: "Evening - 6:30 PM" },
      ],
    },
    {
      day: "Friday - (Novena)",
      masses: [{ time: "Morning - 10:30 AM" }],
    },
    {
      day: "Sunday",
      masses: [
        { time: "Morning - 05:00 AM" },
        {
          time: "Morning - 07:00 AM",
        },
        {
          time: "Evening - 07:00 PM",
        },
      ],
    },
  ];

  return (
    <section id="masstimings" className="bg-white mx-auto">
      <div className="p-6">
        <h2 className="text-[26px] font-bold p-[0] text-maincol md:text-[30px]">
          Mass Timings
        </h2>

        <div>
          <p className="text-[16px] md:text-[18px] py-2">
            Join us for daily and special Masses at the shrine. Our Masses are
            held at various timings to accommodate all visitors.
          </p>
          <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 h-full py-4">
            <div className={`flex flex-col md:gap-6  h-full py-4 rounded-md`}>
              <div className="md:p-2 flex flex-col gap-4 justify-between md:justify-start h-full">
                <h4 className="p-0 pb-2 font-bold text-[16px] md:text-[20px] text-black"></h4>
                <div className="flex flex-col gap-2 md:gap-6">
                  {schedules.map((schedule, index) => {
                    return (
                      <div key={schedule.day}>
                        <h3 className="font-bold text-black text-2xl">
                          {schedule.day}
                        </h3>

                        {
                          <div className="flex flex-col gap-6   h-full py-4 ">
                            {schedule.masses.map((mass, massIndex) => (
                              <div key={massIndex}>
                                <p className="font-bold text-black md:text-[18px]">
                                  {mass.time}
                                </p>
                              </div>
                            ))}
                          </div>
                        }
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeZYID_bglTxsK9dNH3_RTGnmTOJbGRaTd8wahKa-g4gham5g/viewform?usp=dialog",
                "_blank"
              );
            }}
            className="capitalize font-bold text-start h-[42px] w-[116px] bg-accent hover:bg-accent text-[16px] rounded-lg"
          >
            Book a Mass
          </Button>
        </div>
      </div>
    </section>
  );
}
