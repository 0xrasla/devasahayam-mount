import Navbar from "@/components/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LoadingBar = ({ progress }: { progress: number }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: "5px",
      backgroundColor: "#4caf50",
      zIndex: 9999,
    }}
  />
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
    let loadedImages = 0;
    const totalImages = images.length;

    const updateProgress = () => {
      loadedImages += 1;
      setProgress(Math.round((loadedImages / totalImages) * 100));

      if (loadedImages === totalImages) {
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
  }, []);

  return (
    <>
      {loading && (
        <>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
          >
            <img src="/logo.png" alt="Logo" />
          </div>
          <LoadingBar progress={progress} />
        </>
      )}
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
