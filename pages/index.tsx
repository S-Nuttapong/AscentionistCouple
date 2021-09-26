import { styled } from "@stitches/react";
import React from "react";
import Layout from "../components/Layout";
import { Box, Stack as StackMd } from "../design-system";

const StackSm = styled(StackMd, {
  "> * + *": {
    marginTop: "1rem",
  },
});

const StackLg = styled(StackMd, {
  "> * + *": {
    marginTop: "2rem",
  },
});

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <StackLg css={{ border: "1px solid black" }}>
      <Box>Stack Lg</Box>

      <Box>
        <Box css={{ marginBottom: "0.25rem" }}>Stack Sm</Box>
        <StackSm css={{ border: "1px solid black" }}>
          <Box css={{ border: "1px solid orange" }}>1</Box>
          <Box css={{ border: "1px solid yellow" }}>2</Box>
          <Box css={{ border: "1px solid pink" }}>3</Box>
        </StackSm>
      </Box>

      <Box>
        <Box css={{ marginBottom: "0.25rem" }}>Stack Md</Box>
        <StackMd css={{ border: "1px solid black" }}>
          <Box css={{ border: "1px solid red" }}>1</Box>
          <Box css={{ border: "1px solid green" }}>2</Box>
          <Box css={{ border: "1px solid blue" }}>3</Box>
        </StackMd>
      </Box>
    </StackLg>
  </Layout>
);

export default IndexPage;
