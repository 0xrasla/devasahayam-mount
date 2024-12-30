import { Clock10, Landmark } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function About() {
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
    <section id="about" className="relative to-white">
      <div className="relative w-full mt-8 flex justify-center">
        <div className="relative w-full max-w-3xl">
          <video
            className="w-full sm:w-[90%] h-[400px] sm:h-[300px] object-cover mx-auto"
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-[26px] font-bold text-gray-900 p-[0]">
          About Our Shrine
        </h2>
        <p className="text-sm text-black">
          A place of peace, reflection, and devotion.
        </p>

        <Accordion type="multiple" className="pt-6">
          <AccordionItem value="mass-timings" className="shadow-md p-1">
            <AccordionTrigger className="text-[18px] font-bold">
              <div>
                <Clock10 />
              </div>{" "}
              Mass Timings
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px] px-6 py-2">
                Join us for daily and special Masses at the shrine. Our Masses
                are held at various timings to accommodate all visitors.
              </p>
              <div className="px-12">
                {schedules.map((schedule, index) => {
                  const isLast = index === schedules.length - 1;

                  return (
                    <div
                      key={schedule.day}
                      className={`py-4 flex flex-col ${
                        !isLast ? "border-b-[1px] border-gray-400" : ""
                      }`}
                    >
                      <h4 className="p-0 pb-2 font-bold text-[16px]">
                        {schedule.day}
                      </h4>

                      <div className="flex flex-col gap-2">
                        {schedule.masses.map((mass, massIndex) => {
                          return (
                            <div key={massIndex}>
                              <p className="pb-1">{mass.type}</p>
                              <p className="font-bold text-black">
                                {mass.time}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                <p className="text-accent font-bold text-[16px] mt-4">
                  Learn More
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sacred-places" className="shadow-md p-1">
            <AccordionTrigger className="text-[18px] font-bold">
              <div className="">
                <Landmark />
              </div>
              Sacred Places
            </AccordionTrigger>
            <AccordionContent className="px-6 font-[16px]">
              Discover the sacred spots at the shrine. These places are filled
              with prayer and reflection, perfect for those seeking solace.
              <p className="text-accent font-bold text-[16px] mt-4">
                Learn More
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
