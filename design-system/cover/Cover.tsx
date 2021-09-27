import { React } from "react";
import { styled } from "@stitches/react";

export const Cover = styled("div", {
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "1rem",
  minHeight: "100vh",

  //TODO: if the owl selector does not work, then replace with this
  //   "> *": {
  //     marginTop: "1rem",
  //     marginBottom: "1rem",
  //   },

  //   ":first-child:not(.centered)": {
  //     marginTop: 0
  //   },

  //   ":last-child:not(.centered)": {
  //     marginBottom: 0
  //   },

  "> * + *": {
    marginTop: "1rem",
    marginBottom: "1rem",
  },

  "> .centered, > h1": {
    marginTop: "auto",
    marginBottom: "auto",
  },
});
