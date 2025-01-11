import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

const photos = [
  { src: "1.jpg", desc: "A beautiful sunrise." },
  { src: "2.jpg", desc: "Mountain view." },
  { src: "3.jpg", desc: "Serene beach scene." },
];

const videos = [
  { src: "video1.mp4", desc: "Travel highlights." },
  { src: "video2.mp4", desc: "City timelapse." },
  { src: "video3.mp4", desc: "Nature exploration." },
];

function Gallery() {
  return (
    <div className="h-screen">
      <div className="container w-full h-full pt-[6%] px-6">
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="">
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
              className="flex gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <img src={photo.src} alt={photo.desc} className="w-[200px]" />
                  <p className="p-2 text-center">{photo.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="videos">
            <motion.div
              className="grid grid-cols-3 gap-4 p-4"
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
              className="flex gap-4 p-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.iframe
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></motion.iframe>

              <motion.iframe
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NmOh2xDfTSU?si=fjtpdzJEFGy0Ga4a"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></motion.iframe>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Gallery;
