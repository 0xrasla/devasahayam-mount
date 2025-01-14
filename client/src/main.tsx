import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultNotFoundComponent() {
    return (
      <div className="text-center flex justify-center items-center h-screen">
        <div>
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-lg text-gray-600 mt-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-maincol rounded-lg shadow-md hover:bg-opacity-90 transition-all"
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  },
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
