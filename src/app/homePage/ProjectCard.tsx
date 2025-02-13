import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react'

interface ProjectCardProps {
    projectName: string,
    projectLink: string,
    description: string,
    arryData: any,
    techStack: string,
    
}

const ProjectCard: FC<ProjectCardProps> = ({projectName,projectLink,description,arryData,techStack}) => {
  return (
    <>
    <Flex justify={'space-between'} pt={6}>
            <Text fontSize={"1.5rem"} fontWeight={"semibold"}>
          {projectName}
        </Text>
        
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
         🔗 Visit Website
        </Link>
        </Flex> 
         <Text fontSize={".8rem"}>
          {description}
        </Text>
        <Text fontSize={"1.5rem"} fontWeight={"semibold"} pt={2}>
          Key Features:
        </Text> 
         <Box fontSize={"1.5rem"}>
           {/* @ts-expect-error */}
          {arryData.map(({ label }, index) => {
            return (
              <Text key={index} fontSize={".8rem"}>
                {label}
              </Text>
            );
          })}
        </Box>
         <Text fontSize={"1.5rem"} fontWeight={"semibold"} pt={2}>
          Tech Stack:{" "}
          <Text as={'span'} fontSize={'.8rem'}>
            {techStack}
          </Text>
        </Text>
        </> 
  )
}

export default ProjectCard
