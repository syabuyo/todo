import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <h1 className="p-4 text-2xl font-bold">Todo</h1>;
}
