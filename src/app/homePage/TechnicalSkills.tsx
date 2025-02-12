'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const TechnicalSkills = () => {
  return (
   <Box
         w={'full'}
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
         <Text fontSize={"2rem"} fontWeight={"bold"}>Technical Skills</Text>
         <Flex gap={2}>
           {technicalSkillsData.map(({label}, index) => {
               return(
                   <Text key={label} fontSize={"1rem"} >{label}{' '},</Text>
               )
           })}
           
         </Flex>
         </Box>
  )
}

export default TechnicalSkills

const technicalSkillsData=[
    {
        label:'Html',
    },
    {
        label:'Css',
    },
    {
        label:'Javascript',
    },
    {
        label:'ReactJs',
    },
    {
        label:'Typescript',
    },
    {
        label:'NextJs',
    },
    {
        label:'Tailwind',
    },
    {
        label:'Chakra Ui',
    },
 ]