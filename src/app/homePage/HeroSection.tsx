"use client";
import { chakra, VStack } from "@chakra-ui/react";
import React from "react";
import TechnicalSkills from "./TechnicalSkills";
import { motion } from "motion/react";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";

export const HeroSection = () => {
  return (
    <VStack
      justifySelf={"center"}
      w={"80vw"}
      bg={"#9ACBD030"}
      rounded={16}
      border={".5px solid #d9d9d9"}
      boxShadow="dark-lg"
      minH={"80vh"}
      px={6}
      py={4}
    >
      <MotionDiv
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <AboutSection />
      </MotionDiv>
      <MotionDiv
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <ProjectSection />
      </MotionDiv>
      <MotionDiv
        w={"full"}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <TechnicalSkills />
      </MotionDiv>
    </VStack>
  );
};

const MotionDiv = motion(chakra.div);
