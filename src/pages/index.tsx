import { Div } from "@stylin.js/elements";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Div>Hello World!</Div>,
});
