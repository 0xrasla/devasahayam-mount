import Navbar from "@/components/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen z-[1000] flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </>
  );
}
