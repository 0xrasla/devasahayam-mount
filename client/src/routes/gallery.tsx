import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";


export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

const photos :Photo[] = [
  { src: "https://i.ibb.co/2WjZMH4/DSC09014.jpg", desc: "A beautiful sunrise.A beautiful sunrise.A beautiful sunrise.A beautiful sunrise.A beautiful sunrise.A beautiful sunrise." },
  { src: "https://i.ibb.co/xfbqLqQ/DSC09016a.jpg", desc: "Mountain view." },
  { src: "https://i.ibb.co/kgD3PvL/DSC08987.jpg", desc: "Serene beach scene." },
  { src: "https://i.ibb.co/2WjZMH4/DSC09014.jpg", desc: "A beautiful sunrise." },
  { src: "https://i.ibb.co/xfbqLqQ/DSC09016a.jpg", desc: "Mountain view." },
  { src: "https://i.ibb.co/sJyjPNp/DSC09002.jpg", desc: "Serene beach scene." },
  { src: "https://i.ibb.co/vq5CpNz/Whats-App-Image-2025-01-10-at-11-57-03-PM.jpg", desc: "A beautiful sunrise." },
  { src: "https://i.ibb.co/xfbqLqQ/DSC09016a.jpg", desc: "Mountain view." },
  { src: "https://i.ibb.co/sJyjPNp/DSC09002.jpg", desc: "Serene beach scene." },
  { src: "https://i.ibb.co/y6J1Gm6/Whats-App-Image-2025-01-10-at-11-56-58-PM.jpg", desc: "A beautiful sunrise." },
  { src: "https://i.ibb.co/xfbqLqQ/DSC09016a.jpg", desc: "Mountain view." },
  { src: "https://i.ibb.co/sJyjPNp/DSC09002.jpg", desc: "Serene beach scene." },
  { src: "https://i.ibb.co/6FZqmTS/Whats-App-Image-2025-01-10-at-11-57-02-PM.jpg", desc: "A beautiful sunrise." },
  { src: "https://i.ibb.co/xfbqLqQ/DSC09016a.jpg", desc: "Mountain view." },
  { src: "https://i.ibb.co/sJyjPNp/DSC09002.jpg", desc: "Serene beach scene." },
  { src: "https://i.ibb.co/y6J1Gm6/Whats-App-Image-2025-01-10-at-11-56-58-PM.jpg", desc: "A beautiful sunrise." },
  { src: "https://i.ibb.co/xfbqLqQ/DSC09016a.jpg", desc: "Mountain view." },
  { src: "https://i.ibb.co/sJyjPNp/DSC09002.jpg", desc: "Serene beach scene." },
  { src: "https://i.ibb.co/6FZqmTS/Whats-App-Image-2025-01-10-at-11-57-02-PM.jpg", desc: "A beautiful sunrise." },
  { src: "https://i.ibb.co/xfbqLqQ/DSC09016a.jpg", desc: "Mountain view." },
  { src: "https://i.ibb.co/sJyjPNp/DSC09002.jpg", desc: "Serene beach scene." },
  { src: "https://i.ibb.co/6FZqmTS/Whats-App-Image-2025-01-10-at-11-57-02-PM.jpg", desc: "A beautiful sunrise." },
  { src: "https://i.ibb.co/6FZqmTS/Whats-App-Image-2025-01-10-at-11-57-02-PM.jpg", desc: "A beautiful sunrise." },
  { src: "https://i.ibb.co/6FZqmTS/Whats-App-Image-2025-01-10-at-11-57-02-PM.jpg", desc: "A beautiful sunrise." },
];

const videos = [
  { src: "video1.mp4", desc: "Travel highlights." },
  { src: "video2.mp4", desc: "City timelapse." },
  { src: "video3.mp4", desc: "Nature exploration." },
];
const youtubeVideos = [
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "Travel highlights." },
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "City timelapse." },
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "Nature exploration." },
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "Travel highlights." },
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "City timelapse." },
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "Nature exploration." },
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "Travel highlights." },
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "City timelapse." },
  { src: "https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a", desc: "Nature exploration." },
];

interface Photo {
  src: string;
  desc: string;
  isPortrait?: boolean; // Optional field
}


function Gallery() {
  const [updateImage,setUpdatedImages] =  useState <Photo[]> (photos)

useEffect(() => {
  const preloadImages = async () => {
    const loadedPhotos = await Promise.all(
      photos.map(async (photo) => {
        const img = new Image();
        img.src = photo.src;

        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Handle loading errors
        });

        return {
          ...photo,
          isPortrait: img.naturalHeight > img.naturalWidth,
        };
      })
    );
    console.log(loadedPhotos)
    setUpdatedImages(loadedPhotos || []);
  };

  preloadImages();
}, []);
  return (
    <div className="h-screen">
      <div className=" w-full h-full pt-[6%] px-6">
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="mt-8 md:mt-2">
            <TabsTrigger className="font-bold font-avenir" value="photos">
              Photos
            </TabsTrigger>
            <TabsTrigger className="font-bold font-avenir" value="videos">
              Videos
            </TabsTrigger>
            <TabsTrigger className="font-bold font-avenir" value="youtube">
              YouTube
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <motion.div
              className="grid w-full gap-4 grid-cols-1 grid-rows-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 p-4 place-content-center place-items-center"
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
  className={`overflow-hidden relative h-full  rounded-lg shadow-lg ${photo?.isPortrait ? "row-span-2" : ""} `}
>
  <img src={photo.src} alt={photo.desc} className="gallery-img h-full cursor-pointer object-cover" />
  
  <p className={`p-1 md:p-1 text-center absolute bg-white w-full h-1/2 hover:w-full opacity-0  img-desc ${photo?.isPortrait ? "hover:p-2" : ""}`} >{photo.desc}</p>
</motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="videos">
            <motion.div
              className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 place-content-center place-items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <video controls className="w-full">
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <p className="p-2 text-center">{video.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="youtube">
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
              <motion.iframe
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-lg"
              // width="560"
              // height="315"
              src={video.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
              ))}



            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Gallery;
