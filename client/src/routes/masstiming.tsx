import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/masstiming")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/masstiming"!</div>;
}
