'use client'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <Box
        px={6}
        py={4}
        border={".5px solid #d9d9d9"}
        rounded={6}
        boxShadow={"sm"}
        _hover={{
            bg:'#9ACBD020',
            boxShadow: '2xl',
          }}
      >
        <Text fontSize={"2rem"} fontWeight={"bold"}>
          Projects
        </Text>
         <ProjectCard
          projectName={"Panchang – Horoscope & Astrology Insights"}
          projectLink={"https://panchangweb-avi.vercel.app/"}
          description={`Panchang is a web application that provides daily horoscope readings,
                  astrological insights, and personalized zodiac forecasts. Built with
                  Next.js, React, Tailwind CSS, and Chakra UI, this platform offers
                  users an interactive and visually appealing experience for exploring
                  astrology.`}
          arryData={panchangData}
          techStack={"Next.js, React, TypeScript, Tailwind CSS, Chakra UI"}
        />
        
        <ProjectCard
          projectName={"A2Z Test"}
          projectLink={"https://a2ztest.in/"}
          description={`Automate Student Assessment`}
          arryData={a2ztestData}
          techStack={"Next.js, React, Tailwind CSS, Chakra UI"}
        />
      </Box>
  )
}

export default ProjectSection

const panchangData = [
    {
      label: "✅ Daily, weekly, and monthly horoscope readings",
    },
    {
      label: "✅ Responsive website",
    },
    {
      label: "✅ Interactive UI with smooth animations",
    },
    {
      label: "✅ Optimized for fast performance using Next.js",
    },
  ];
  const a2ztestData = [
    {
      label: "✅ AI Question Creator",
    },
    {
      label: "✅ Scan and Evaluate",
    },
    {
      label: "✅ Multiple Question Formats",
    },
    {
      label: "✅ Digital Notice Board",
    },
  ];