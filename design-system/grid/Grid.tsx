import { React } from "react";
import { styled } from "@stitches/react";

export const Grid = styled("div", {
  display: "grid",
  gridGap: "1rem",
  //TODO: add support @support {...} sudo selector
  gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
});
