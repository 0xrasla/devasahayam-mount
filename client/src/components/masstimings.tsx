import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function MassTimings() {
  const massData = [
    {
      title: "Daily Mass",
      description:
        "Daily Mass is held at the shrine at various timings to accommodate all visitors.",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      timings: ["Morning: 6:00 AM", "Evening: 6:30 PM"],
    },
    {
      title: "Friday Masses",
      description:
        "Friday Mass is held at the shrine at various timings to accommodate all visitors.",
      timings: [
        "Morning: 6:00 AM Mass",
        "Morning: 10:30 AM Sebamalai",
        "Morning 11:00 AM Naveena Mass",
        "Evening 6:30 PM Mass",
      ],
    },
    {
      title: "Saturday Masses",
      description:
        "Saturday Masses are held at the shrine at various timings to accommodate all visitors.",
      timings: [
        "Morning: 6:00 AM Mass",
        "Morning 11:00 AM Naveena Mass",
        "Evening 6:30 PM Mass",
        "Night 8:00 PM from 9:00 PM",
      ],
      extraDetails: [
        "Martyr Devasahayam Arulurai",
        "Thirupanda Vanakkam",
        "Thirupugalmalai Yezunthetram",
      ],
    },
    {
      title: "Sunday Masses",
      description:
        "Sunday Masses are held at the shrine at various timings to accommodate all visitors.",
      timings: [
        "Morning: 5:00 AM Mass",
        "Morning 7:00 AM Mass",
        "Afternoon 12:00 PM (for Passengers)",
        "Evening 05:30 PM Mass",
        "Night 8:00 PM from 9:00 PM",
      ],
      extraDetails: [
        "Martyr Devasahayam Arulurai",
        "Thirupanda Vanakkam",
        "Thirupugalmalai Yezunthetram",
      ],
    },
    {
      title: "Special Days",
      description:
        "Special days Masses are held at the shrine at various timings to accommodate all visitors.",
      specialEvents: [
        "Every Month at 14'th * Malai Vazham. Evening 6:00 PM Mass",
        "First Tuesday - Punitha Anthoniyar Savadi",
        "First Wednesday - Old Church",
        "First Friday - Martyr. Devasahayam Sathukkam",
        "First Saturday - Siraichalai",
      ],
    },
  ];

  return (
    <section id="masstimings" className="bg-white mx-auto w-[99%] md:w-[90%]">
      <div className="py-4 px-3">
        <h2 className="text-[26px] font-bold p-[0] text-maincol md:text-[30px]">
          Mass Timings
        </h2>

        <div>
          <p className="text-[16px] md:text-[18px] py-2">
            Join us for daily and special Masses at the shrine. Our Masses are
            held at various timings to accommodate all visitors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Card className="bg-white p-2 shadow-2xl rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Daily Mass
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Daily Mass is held at the shrine at various timings to
                  accommodate all visitors.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-bold">
                  <p>Monday</p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thursday</p>
                </div>

                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <p>Morning: 6:00 AM</p>
                  <p>Evening: 6:30 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-2 shadow-2xl rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Friday Masses
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Friday Mass is held at the shrine at various timings to
                  accommodate all visitors.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <p>Morning: 6:00 AM Mass</p>
                  <p>Morning: 10:30 AM Sebamalai</p>
                  <p>Morning 11:00 AM Naveena Mass</p>
                  <p>Evening 6:30 PM Mass</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white p-2 shadow-2xl rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Saturday Masses
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Saturday Masss are held at the shrine at various timings to
                  accommodate all visitors.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <p>Morning: 6:00 AM Mass</p>
                  <p>Morning 11:00 AM Naveena Mass</p>
                  <p>Evening 6:30 PM Mass</p>

                  <div>
                    <b className="font-bold">Night 8:00 PM from 9:00 PM</b>
                    <ol className="px-4 list-disc space-y-3">
                      <li>Martyr Devasahayam Arulurai</li>
                      <li>Thirupanda Vanakkam</li>
                      <li>Thirupugalmalai Yezunthetram</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-2 shadow-2xl rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Sunday Masses
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Sunday Masss are held at the shrine at various timings to
                  accommodate all visitors.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <p>Morning: 5:00 AM Mass</p>
                  <p>Morning 7:00 AM Mass</p>
                  <p>Afternoon 12:00 PM (for Passengers)</p>
                  <p>Evening 05:30 PM Mass</p>

                  <div>
                    <b className="font-bold">Night 8:00 PM from 9:00 PM</b>
                    <ol className="px-4 list-disc space-y-3">
                      <li>Martyr Devasahayam Arulurai</li>
                      <li>Thirupanda Vanakkam</li>
                      <li>Thirupugalmalai Yezunthetram</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-2 shadow-2xl rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Special Days
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Sunday Masss are held at the shrine at various timings to
                  accommodate all visitors.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <ul className="list-disc space-y-3">
                    <li>
                      Every Month at 14'th
                      <b>* Malai Vazham</b>. Evening 6:00 PM Mass
                    </li>
                    <li>First Tuesday - Punitha Anthoniyar Savadi</li>
                    <li>First Wednesday - Old Church</li>
                    <li>First Friday - Martyr. Devasahayam Sathukkam</li>
                    <li>First Saturday - Siraichalai</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeZYID_bglTxsK9dNH3_RTGnmTOJbGRaTd8wahKa-g4gham5g/viewform?usp=dialog",
                "_blank"
              );
            }}
            className="capitalize mt-4 font-bold text-start h-[42px] w-[116px] bg-accent hover:bg-accent text-[16px] rounded-lg"
          >
            Book a Mass
          </Button>
        </div>
      </div>
    </section>
  );
}
