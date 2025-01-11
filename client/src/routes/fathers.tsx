import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fathers")({
  component: RouteComponent,
});

function RouteComponent() {
  const fathers = [
    { name: "Rev.Fr.V.Mary George", from: "19.05.1961", till: "06.12.1971" },
    { name: "Rev.Fr.A.P.Stephen", from: "06.12.1971", till: "08.10.1975" },
    { name: "Rev.Fr.S.Servacius", from: "08.10.1975", till: "03.01.1976" },
    { name: "Rev.Fr.A.Joseph Raj", from: "03.01.1976", till: "25.05.1978" },
    { name: "Rev.Fr.S.Joseph", from: "25.05.1978", till: "30.05.1982" },
    { name: "Rev.Fr.V.Maria James", from: "30.05.1982", till: "13.05.1987" },
    { name: "Rev.Fr.R.Lawrence", from: "13.05.1987", till: "20.05.1989" },
    {
      name: "Rev.Fr.S.M.Charles Boromio",
      from: "20.05.1989",
      till: "08.06.1992",
    },
    { name: "Rev.Fr.George Ponniah", from: "08.06.1992", till: "12.06.1998" },
    {
      name: "Rev.Fr.J.R.Patric Xavier",
      from: "12.06.1998",
      till: "25.06.2001",
    },
    { name: "Rev.Fr.M.David Micheal", from: "25.06.2001", till: "18.08.2001" },
    { name: "Rev.Fr.R.Lawrence", from: "18.08.2001", till: "16.05.2002" },
    {
      name: "Rev.Fr.A.Antonydhas Stalin",
      from: "16.05.2002",
      till: "12.03.2004",
    },
    { name: "Rev.Fr.Yesudasan Thomas", from: "12.03.2004", till: "21.05.2004" },
    { name: "Rev.Fr.George Ponnaiah", from: "21.05.2004", till: "26.06.2005" },
    { name: "Rev.Fr.M.Devasahayam", from: "26.06.2005", till: "23.05.2010" },
    { name: "Rev.Fr.Perpetual Antony", from: "23.05.2010", till: "24.06.2015" },
    { name: "Rev.Fr.A.Stephen", from: "24.06.2015", till: "19.08.2020" },
    {
      name: "Rev.Fr.A.Michael George Bright",
      from: "19.08.2020",
      till: "Present",
    },
  ];

  const assistantFathers = [
    {
      name: "Rev.Fr.J.Francis De Sales",
      from: "07.12.1989",
      till: "09.03.1990",
    },
    { name: "Rev.Fr.A.Gabriel", from: "11.05.1999", till: "25.05.2001" },
    { name: "Rev.Fr.Yesudasan Thomas", from: "17.08.2003", till: "12.03.2004" },
    { name: "Rev.Fr.Gnanaraj", from: "June 2012", till: "May 2013" },
    { name: "Rev.Fr.Antony Dhas", from: "June 2013", till: "May 2014" },
    { name: "Rev.Fr.Britto Raj", from: "June 2014", till: "May 2015" },
    { name: "Rev.Fr.Benhar", from: "04.10.2014", till: "04.02.2015" },
    { name: "Rev.Fr.Benjamine", from: "05.02.2015", till: "10.06.2015" },
    { name: "Rev.Fr.John Sibi", from: "10.06.2015", till: "05.12.2015" },
    {
      name: "Rev.Fr.Ravi Godson Kennady",
      from: "05.12.2015",
      till: "10.10.2017",
    },
    {
      name: "Rev.Fr.A.Michael George Bright",
      from: "12.10.2017",
      till: "30.03.2018",
    },
    { name: "Rev.Fr.Gnana Sekaran", from: "03.05.2018", till: "18.05.2019" },
    {
      name: "Rev.Fr.Maria Joseph Sibu",
      from: "09.05.2019",
      till: "19.08.2020",
    },
  ];

  const sonOfSoils = [
    "Rev.Fr.Kurusu Micheal",
    "Rev.Fr.Jesudhasan",
    "Rev.Fr.Arul Nirmal",
    "Rev.Fr.Sahaya Felix",
    "Rev.Fr.S.Anbin Devasahayam",
  ];

  const decons = [
    { name: "Dn.Saju", from: "10.09.2017", till: "01.04.2018" },
    { name: "Dn.Sahaya Sunil", from: "Unknown", till: "Unknown" },
  ];

  return (
    <div className="pt-[5%] space-y-8 grid grid-cols-2 gap-4">
      <h1 className="text-3xl font-bold">Fathers Information</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Parish Priests</h2>
        <ul className="list-disc list-inside space-y-2">
          {fathers.map((father, index) => (
            <li key={index} className="text-lg">
              <span className="font-medium">{father.name}</span> ({father.from}{" "}
              - {father.till})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Assistant Parish Priests
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {assistantFathers.map((father, index) => (
            <li key={index} className="text-lg">
              <span className="font-medium">{father.name}</span> ({father.from}{" "}
              - {father.till})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Son of Soils</h2>
        <ul className="list-disc list-inside space-y-2">
          {sonOfSoils.map((priest, index) => (
            <li key={index} className="text-lg">
              {priest}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Deacons</h2>
        <ul className="list-disc list-inside space-y-2">
          {decons.map((decon, index) => (
            <li key={index} className="text-lg">
              <span className="font-medium">{decon.name}</span> ({decon.from} -{" "}
              {decon.till})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default RouteComponent;
