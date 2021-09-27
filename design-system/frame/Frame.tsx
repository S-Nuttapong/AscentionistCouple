import { React } from "react";
import { styled } from "@stitches/react";

export const Frame = styled("div", {
  paddingBottom: "calc(9/10 * 100%)",
  position: "relative",

  "> *": {
    overflow: "hidden",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "> img, > video": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
