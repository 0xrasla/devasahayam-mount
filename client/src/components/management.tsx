import { useNavigate } from "@tanstack/react-router";
// @ts-ignore
import Slider from "react-slick";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function FathersSection() {
  const navigate = useNavigate();

  const fathersInfo = [
    {
      name: "Rev.Fr. S. Leon Henson",
      desc: "Parish Priest",
      img: "https://i.ibb.co/dPQ8DqW/Whats-App-Image-2025-01-14-at-08-53-56.jpg",
      bio: "Rev. Fr. S. Leon Henson serves as the dedicated Parish Priest, leading the congregation with spiritual guidance and pastoral care."
    },
    {
      name: "Rev.Fr. J. Saleen Johnrose",
      desc: "Assistant Parish Priest",
      img: "https://i.ibb.co/Nxn63s4/IMG-20250112-WA0000-1.jpg",
      bio: "Rev. Fr. J. Saleen Johnrose is the Assistant Parish Priest, supporting the parish community through ministry and service."
    },
    {
      name: "Rev.Fr. Ravi",
      desc: "Assistant Parish Priest",
      img: "https://i.ibb.co/F4FYRbR/IMG-20250114-WA0061-2.jpg",
      bio: "Rev. Fr. Ravi serves as an Assistant Parish Priest, fostering spiritual growth and assisting in parish activities."
    },
    {
      name: "Dn. Yesu Pravin",
      desc: "Deacon",
      img: "https://i.ibb.co/VvR6PpV/IMG-20250114-WA0058.jpg",
      bio: "Dn. Yesu Pravin is a devoted Deacon, dedicated to serving the parish and supporting its spiritual mission."
    },
    {
      name: "Mr. Siluvai Dhasan",
      desc: "Vice President",
      img: "https://i.ibb.co/ZMqTFqm/Whats-App-Image-2025-01-14-at-13-04-55.jpg",
      bio: "Mr. Siluvai Dhasan is the Vice President of the parish council, ensuring effective administration and community engagement."
    },
    {
      name: "Mr. David",
      desc: "Secretary",
      img: "https://i.ibb.co/YP1MMKL/IMG-20250114-WA0059.jpg",
      bio: "Mr. David serves as the Secretary, overseeing communications and ensuring smooth coordination of parish activities."
    },
    {
      name: "Janate",
      desc: "Treasurer",
      img: "avatar1.png",
      bio: "Janate is the Treasurer, responsible for managing the parish's finances and ensuring transparency in fiscal matters."
    }
  ];
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="visit" className="p-3 md:px-0  md:w-[90%] md:mx-auto mx-auto ">
      <h2 className="text-[27px]  text-black font-bold  md:px-0 md:mx-auto mx-2 lg:mx-4 lg:px-0  py-2 ">
        Management
      </h2>
      <Slider {...settings}>
        {fathersInfo.map((father, index) => (
          <div key={index} className=" min-w-72  h-96 p-2 cursor-pointer">
            <Card className="  h-full bg-white border-none custom-shadow">
              <CardHeader>
                <CardTitle>{father.name}</CardTitle> <span> {father.desc} </span>
                {father.img ? (
                  <img
                    src={father.img}
                    alt={father.name}
                    className="w-full h-48 object-cover  bg-white rounded-lg mt-2  "
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-muted rounded-lg">
                    No Image Available
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {father.bio || "Description not available."}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
      <Button
        onClick={() => {
          navigate({
            to: "/fathers",
          });
        }}
        className="capitalize font-bold text-start h-[42px] w-[116px] bg-accent hover:bg-white text-[16px] rounded-lg  cursor-pointer hover:text-accent border hover:border-accent mt-7 md:mt-4 ml-[5px]"
      >
        View more...
      </Button>
    </section>
  );
}
