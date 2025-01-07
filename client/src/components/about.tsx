import { Clock10, Landmark } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

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
    <section id="about" className="relative to-white w-screen">
      <div className="relative w-full my-6 flex justify-center">
        <div className="relative w-full">
          <h2 className="py-2 md:text-[26px] md:text-maincol md:w-[87%] md:mx-auto mx-6">
            Devasahayam Mount in Tamil Nadu is a sacred site where St.
            Devasahayam, India’s first lay saint, was martyred in 1752. <br />{" "}
            It is home to the Our Lady of Sorrows Church, which also serves as a
            prominent pilgrimage center.
          </h2>

          <video
            className="w-full sm:w-[90%] h-[400px] sm:h-[300px] object-cover mx-auto md:hidden"
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="md:w-[90%] md:mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-[26px] font-bold p-[0] text-maincol md:text-[30px]">
          About Our Shrine
        </h2>
        <p className="text-sm text-black md:text-[18px] font-avenir">
          A place of peace, reflection, and devotion.
        </p>

        <Accordion
          type="multiple"
          className="pt-6"
          defaultValue={["mass-timings", "sacred-places"]}
        >
          <AccordionItem value="mass-timings" className="shadow-md p-1">
            <AccordionTrigger className="text-[18px] md:text-[24px] font-bold text-maincol">
              <div>
                <Clock10 />
              </div>{" "}
              Mass Timings
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px] md:text-[18px] px-6 py-2">
                Join us for daily and special Masses at the shrine. Our Masses
                are held at various timings to accommodate all visitors.
              </p>
              <div className="px-12 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 h-full py-4">
                {schedules.map((schedule, index) => {
                  const isLast = index === schedules.length - 1;

                  return (
                    <div
                      key={schedule.day}
                      className={`flex flex-col md:gap-6 md:shadow-lg h-full py-4 ${
                        !isLast
                          ? "border-b-[1px] border-gray-400 md:border-none"
                          : ""
                      } ${
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

              <Button className="capitalize mx-6 hidden md:block text-start h-[42px] w-[116px] bg-accent hover:bg-accent text-[16px] rounded-lg">
                Learn More
              </Button>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sacred-places" className="shadow-md p-1">
            <AccordionTrigger className="text-[18px] md:text-[24px] font-bold text-maincol">
              <div className="">
                <Landmark />
              </div>
              Sacred Places
            </AccordionTrigger>
            <AccordionContent className="px-6 text-[16px] md:text-[18px] py-2">
              Discover the sacred spots at the shrine. These places are filled
              with prayer and reflection, perfect for those seeking solace.
              <p className="text-accent font-bold text-[16px] mt-4 md:hidden">
                Learn More
              </p>
              <Button className="capitalize my-6 hidden md:block text-start h-[42px] w-[116px] bg-accent hover:bg-accent text-[16px] rounded-lg">
                Learn More
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
