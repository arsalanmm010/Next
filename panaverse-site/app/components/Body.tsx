'use client'
import { Box, VStack,Text, Heading, Card, Button, Image, CardBody, CardHeader, Stack } from "@chakra-ui/react";

export default function Body() {
  return (
    <Stack 
    h={['980px', '850px', '640px']} 
    bg='gray.300' 
    flexDirection={['column', 'column', 'row']} 
    py='100px' 
    justifyContent='space-around'>
      <VStack spacing={7} alignItems='flex-start' maxW='450px'>
        <Text color='blue' fontSize='16px'>Discover your journey</Text>
        <Heading as='h1' fontSize='48px' fontWeight='light'>Launch Your Dev Career With Web 3 and Metaverse</Heading>
        <Text color='gray' fontSize='14px'>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</Text>
        <Button colorScheme='blue' px='40px'>Explore Course</Button>
      </VStack>
      <VStack maxW='450px'>
        <Image src="./IMAGE.png" alt='code'/>
        <Card py='25px' px='20px'>
          <Text>Tomorrow is our</Text>
          <Text>“When I Grow Up” Spirit Day!</Text>
        </Card>
      </VStack>
    </Stack>
  )
}
