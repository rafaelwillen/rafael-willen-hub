import { RiHeartFill } from "@remixicon/react";
import { Div } from "@stylin.js/elements";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <Div
      color="#fff"
      display="flex"
      gap="10px"
      alignItems="center"
      justifyContent="center"
      fontSize="3rem"
      height="100vh"
    >
      Hello World! <RiHeartFill size={48} />
    </Div>
  ),
});
