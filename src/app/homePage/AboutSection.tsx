"use client";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const AboutSection = () => {
  return (
    <Box
      px={6}
      py={4}
      border={".5px solid #d9d9d9"}
      rounded={6}
      boxShadow={"sm"}
      _hover={{
        bg: "#9ACBD020",
        boxShadow: "2xl",
      }}
    >
      <Text fontSize={"2rem"} fontWeight={"bold"}>
        Hi, I am Vishwajeet Singh
      </Text>
      <Text fontSize={".8rem"}>
        Frontend Developer specializing in React, Next.js, and modern UI
        libraries like Tailwind CSS and Chakra UI. Passionate about building
        responsive, high-performance web applications with a focus on clean
        design and great user experience.
      </Text>
    </Box>
  );
};

export default AboutSection;
