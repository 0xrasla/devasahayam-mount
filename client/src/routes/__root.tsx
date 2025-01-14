import Navbar from "@/components/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LoadingScreen = ({ progress }: { progress: number }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      zIndex: 9999,
    }}
  >
    <img src="/logo.png" alt="Logo" style={{ width: "100px" }} />
    <p>{progress}%</p>
  </div>
);

export const Route = createRootRoute({
  component: RootComponent,
  loader: async () => {
    return <h2>Loading...</h2>;
  },
});

function RootComponent() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = Array.from(document.images);
    const videos = Array.from(document.getElementsByTagName("video"));
    const totalMedia = images.length + videos.length;
    let loadedMedia = 0;

    const updateProgress = () => {
      loadedMedia += 1;
      setProgress(Math.round((loadedMedia / totalMedia) * 100));

      if (loadedMedia === totalMedia) {
        setLoading(false);
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        updateProgress();
      } else {
        image.onload = updateProgress;
        image.onerror = updateProgress;
      }
    });

    videos.forEach((video) => {
      if (video.readyState >= 3) {
        updateProgress();
      } else {
        video.onloadeddata = updateProgress;
        video.onerror = updateProgress;
      }
    });

    if (totalMedia === 0) setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen progress={progress} />}
      {!loading && (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </>
  );
}
