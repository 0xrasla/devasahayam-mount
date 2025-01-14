import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function MassTimings() {


  return (
    <section id="masstimings" className="bg-white mx-auto w-[99%] md:w-[90%]">
      <div className="py-4 px-3">
        <h2 className="text-[26px] font-bold p-[0] text-maincol md:text-[30px]">
          Mass Timings
        </h2>

        <div>
          <p className="text-[16px] md:text-[18px] py-2">
            Join us for daily and special Mass at the shrine. Our Mass are
            held at various timings to accommodate all visitors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Card className="bg-white p-2 rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Daily Mass
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Daily Mass is held at the shrine at various timings to
                  accommodate all visitors.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-bold">
                  <p>Monday - Thursday</p>
                </div>

                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700">
                  <p>Morning: 6:00 AM</p>
                  <p>Evening: 6:30 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-2 rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Friday Mass
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Friday Mass at the shrine is offered at multiple times,
                  ensuring all visitors have the opportunity to participate.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <p>
                    <b>Morning</b> 6:00 AM Mass
                  </p>
                  <p>
                    <b>Morning</b> 10:30 AM Rosary
                  </p>
                  <p>
                    <b>Morning</b> 11:00 AM Novena Mass
                  </p>
                  <p>
                    <b>Evening</b> 6:30 PM Mass
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white p-2 rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Saturday Mass
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Saturday Mass at the shrine are held at various intervals,
                  offering visitors ample opportunities to join in prayer and
                  spiritual reflection.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <p>
                    <b>Morning</b> 6:00 AM Mass
                  </p>
                  <p>
                    <b>Mornings</b> 11:00 AM Novena Mass
                  </p>
                  <p>
                    <b>Evening</b> 6:30 PM Mass
                  </p>

                  <div>
                    <b className="font-bold">Night 8:00 PM from 9:00 PM</b>
                    <ol className="px-4 list-disc space-y-3 mt-2">
                      <li>Martyr Devasahayam Arulurai</li>
                      <li>Thirupanda Vanakkam</li>
                      <li>Thirupugalmalai Yezunthetram</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-2 rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Sunday Mass
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Sunday Mass at the shrine are celebrated at different times,
                  welcoming all visitors to participate in prayer and spiritual
                  devotion.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <p>
                    <b>Morning</b> 5:00 AM Mass
                  </p>
                  <p>
                    <b>Morning</b> 7:00 AM Mass
                  </p>
                  <p>
                    <b>Afternoon</b> 12:00 PM (for Sacred Pilgrims)
                  </p>
                  <p>
                    <b>Evening</b> 05:30 PM Mass
                  </p>

                  <div>
                    <b className="font-bold">Night 8:00 PM from 9:00 PM</b>
                    <ol className="px-4 list-disc space-y-3 mt-2">
                      <li>Martyr Devasahayam Arulurai</li>
                      <li>Thirupanda Vanakkam</li>
                      <li>Thirupugalmalai Yezunthetram</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-2 rounded-lg border-2 border-maincol">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Special Days
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Special Mass are held at the shrine on various dates each
                  month, ensuring all visitors have the opportunity to
                  participate.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex gap-6 items-start mt-4">
                <div className="flex flex-col gap-3 text-lg font-medium text-gray-700 self-center">
                  <ul className="list-disc space-y-3">
                    <li>
                      On the 14th of every month,
                      <b>* Malai Vazham</b> – Evening Mass at 6:00 PM
                    </li>
                    <li>First Tuesday - St. Antony's Grotto</li>
                    <li>First Wednesday - Old Church</li>
                    <li>First Friday - Deva Square</li>
                    <li>
                      First Saturday -{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/Devasahayam_Pillais"
                        target="_blank"
                      >
                        Devasahayam Prison
                      </a>
                    </li>
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
