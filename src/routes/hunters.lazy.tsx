import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/hunters")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/hunters"!</div>;
}
