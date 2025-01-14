import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

const photos: Photo[] = [

  { src: "https://i.ibb.co/xfbqLqQ/DSC09016a.jpg", desc: "Mountain view." },
  { src: "https://i.ibb.co/kgD3PvL/DSC08987.jpg", desc: "Serene beach scene." },
  {
    src: "https://i.ibb.co/2WjZMH4/DSC09014.jpg",
    desc: "A beautiful sunrise.",
  },

  { src: "https://i.ibb.co/sJyjPNp/DSC09002.jpg", desc: "Serene beach scene." },
  {
    src: "https://i.ibb.co/vq5CpNz/Whats-App-Image-2025-01-10-at-11-57-03-PM.jpg",
    desc: "A beautiful sunrise.",
  },
 
  {
    src: "https://i.ibb.co/y6J1Gm6/Whats-App-Image-2025-01-10-at-11-56-58-PM.jpg",
    desc: "A beautiful sunrise.",
  },
 
  {
    src: "https://i.ibb.co/6FZqmTS/Whats-App-Image-2025-01-10-at-11-57-02-PM.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/0MQjk3W/DSC08974.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/XFpT34y/DSC08981.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/Q8VbyXd/DSC08982.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/kgD3PvL/DSC08987.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/ZKxvFjS/DSC08990.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/TgRWhnh/DSC08995.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/GxcpSwm/DSC08997.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/1K1VxWF/DSC08999.jpg",
    desc: "A beautiful sunrise.sfgfssgs",
  },
  {
    src: "https://i.ibb.co/wpjKdsg/DSC09001.jpg",
    desc: "A beautiful sunrise.d",
  },
  {
    src: "https://i.ibb.co/KzzvXy8/DSC09003.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/6sSTdYZ/DSC09010.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/PwYR8Z3/DSC09020.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/dDW1h8q/DSC09022.jpg",
    desc: "A beautiful sunrise.dd",
  },
  {
    src: "https://i.ibb.co/NjxZpZm/DSC09024.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/9bkkGCj/DSC09026.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/TcC9ZKD/DSC09027.jpg",
    desc: "A beautiful sunrise.sfgfssgs",
  },
  {
    src: "https://i.ibb.co/CJhRcm7/Whats-App-Image-2025-01-10-at-11-57-00-PM.jpg",
    desc: "A beautiful sunrise",
  },
  {
    src: "https://i.ibb.co/JyZxQ6R/Whats-App-Image-2025-01-10-at-11-57-01-PM.jpg",
    desc: "A beautiful sunrise.d",
  },
  {
    src: "https://i.ibb.co/KzzvXy8/DSC09003.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/6sSTdYZ/DSC09010.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/PwYR8Z3/DSC09020.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/dDW1h8q/DSC09022.jpg",
    desc: "A beautiful sunrise.dd",
  },
  {
    src: "https://i.ibb.co/NjxZpZm/DSC09024.jpg",
    desc: "A beautiful sunrise.",
  },
  {
    src: "https://i.ibb.co/9bkkGCj/DSC09026.jpg",
    desc: "A beautiful sunrise.",
  },
];


const youtubeVideos = [
  {
    src: "https://www.youtube.com/embed/YMP5kZmEXLs?si=fjtpdzJEFGy0Ga4a",
    desc: "Travel highlights.",
  },
  {
    src: "https://www.youtube.com/embed/Tnlk4COkDp0?si=fjtpdzJEFGy0Ga4a",
    desc: "City timelapse.",
  },

];

interface Photo {
  src: string;
  desc: string;
  isPortrait?: boolean; // Optional field
}

function Gallery() {
  const [updateImage, setUpdatedImages] = useState<Photo[]>(photos);

  useEffect(() => {
    const preloadImages = async () => {
      const loadedPhotos = await Promise.all(
        photos.map(async (photo) => {
          const img = new Image();
          img.src = photo.src;

          await new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });

          return {
            ...photo,
            isPortrait: img.naturalHeight > img.naturalWidth,
          };
        })
      );
      setUpdatedImages(loadedPhotos || []);
    };

    preloadImages();
  }, []);
  return (
    <div className="h-screen">
      <div className=" w-full h-full pt-[8%] px-8">
        <Tabs defaultValue="photos" className="w-full mt-10 md:mt-12 lg:mt-2 ">
          <TabsList className="">
            <TabsTrigger
              className="font-bold font-avenir cursor-pointer"
              value="photos"
            >
              Photos
            </TabsTrigger>
            <TabsTrigger
              className="font-bold font-avenir cursor-pointer"
              value="videos"
            >
              Videos
            </TabsTrigger>

          </TabsList>

          <TabsContent value="photos" className="mt-8">
            <motion.div
              className="grid w-full gap-4 grid-cols-1 lg:grid-rows-3 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  place-content-center place-items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {updateImage.map((photo, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`overflow-hidden relative h-full  rounded-lg shadow-lg ${photo?.isPortrait ? "row-span-2" : "row-span-1"} `}
                >
                  <img
                    src={photo.src}
                    alt={photo.desc}
                    className="gallery-im h-full cursor-pointer object-cover"
                  />

                  <p className={`p-1 md:p-1 text-center absolute bg-white w-full h-4/5 md:h-1/2 hover:w-full opacity-0  img-des ${photo?.isPortrait ? "hover:p-2" : ""}`} >{photo.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="videos">
          <motion.div
              className="grid w-full gap-4 grid-cols-1  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {youtubeVideos.map((video, index) => (
                <motion.div key={index} className="">
                  <motion.iframe
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="rounded-lg max-w-full  shadow-lg"
                    // width="560"
                    // height="315"
                    src={video.src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></motion.iframe>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>


        </Tabs>
      </div>
    </div>
  );
}

export default Gallery;
