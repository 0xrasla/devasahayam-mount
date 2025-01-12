import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "@tanstack/react-router";

export function FathersSection() {
  const navigate = useNavigate();

  const fathersInfo = [
    {
      name: "Rev.Fr. S. Leon Henson",
      desc: "A brief description about Rev.Fr. S. Leon Henson.",
      img: "https://i.ibb.co/DWr70FP/Whats-App-Image-2025-01-12-at-08-35-34.jpg",
    },
    {
      name: "Rev.Fr. J. Saleen Johnrose",
      desc: "A brief description about Rev.Fr. J. Saleen Johnrose.",
      img: "https://i.ibb.co/DWr70FP/Whats-App-Image-2025-01-12-at-08-35-34.jpg",
    },
    {
      name: "Rev.Fr. Ravi",
      desc: "A brief description about Rev.Fr. Ravi.",
      img: "https://i.ibb.co/DWr70FP/Whats-App-Image-2025-01-12-at-08-35-34.jpg",
    },
    {
      name: "Dn. Yesu Pravin",
      desc: "A brief description about Dn. Yesu Pravin.",
      img: "https://i.ibb.co/DWr70FP/Whats-App-Image-2025-01-12-at-08-35-34.jpg",
    },
    {
      name: "Rev.Fr. J. Saleen Johnrose",
      desc: "A brief description about Rev.Fr. J. Saleen Johnrose.",
      img: "https://i.ibb.co/DWr70FP/Whats-App-Image-2025-01-12-at-08-35-34.jpg",
    },
    {
      name: "Rev.Fr. Ravi",
      desc: "A brief description about Rev.Fr. Ravi.",
      img: "https://i.ibb.co/DWr70FP/Whats-App-Image-2025-01-12-at-08-35-34.jpg",
    },
    {
      name: "Dn. Yesu Pravin",
      desc: "A brief description about Dn. Yesu Pravin.",
      img: "https://i.ibb.co/DWr70FP/Whats-App-Image-2025-01-12-at-08-35-34.jpg",
    },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <h2 className="text-[27px]  text-black font-bold  md:px-0 md:mx-auto mx-2 lg:mx-4 lg:px-0  py-2 ">Management</h2>
      <Slider  {...settings}>
        {fathersInfo.map((father, index) => (
          <div key={index} className=" min-w-72  h-96 p-2 cursor-pointer">
            <Card className="  h-full bg-white border-none custom-shadow">
              <CardHeader>
                <CardTitle>{father.name}</CardTitle>
                {father.img ? (
                  <img
                    src={father.img}
                    alt={father.name}
                    className="w-full h-48 object-contain bg-white rounded-lg mt-2"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-muted rounded-lg">
                    No Image Available
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {father.desc || "Description not available."}
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
        className="capitalize font-bold text-start h-[42px] w-[116px] bg-accent hover:bg-white text-[16px] rounded-lg  cursor-pointer hover:text-accent border hover:border-accent mt-7 md:mt-4 "
      >
        View more...
      </Button>
    </section>
  );
}
