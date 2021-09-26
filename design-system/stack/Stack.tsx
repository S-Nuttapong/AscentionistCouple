import React from "react";
import { styled } from "@stitches/react";

export const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  "> * + *": {
    marginTop: "1.5rem",
  },
});
