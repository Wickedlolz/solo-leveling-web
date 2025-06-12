import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/episodes")({
  component: RouteComponent,
});

function RouteComponent() {
  return <section className="text-white">Hello "/episodes"!</section>;
}
