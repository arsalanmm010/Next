'use client'
import { Box, Button, Card, CardBody, Container, Heading, HStack, Image, List, ListItem,Flex, Text, VStack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box pt='140px'>
        <VStack mb='40px'>
           <Heading w='80%' fontFamily='Raleway' fontWeight='400' fontSize='48px'>We Are <Text as='span' color='blue'>Proud</Text></Heading>
           <Text w='80%' fontSize='15px' fontFamily='Nunito' mb='20px' color='gray'>You dont have to struggle alone, youve got our assistance and help.</Text>
           <Flex w='100%' flexDirection={['column', 'column', 'row']} justify='space-between' px='40px'>
              <Card w={['90%', '90%', '24%']} h='240px' bg='blue.600' color='white' alignItems='center' justifyContent='center'>
                    <Image src='/img1.png' alt='img'/>
                    <Text fontSize='34px'>5,000</Text>
                    <Text fontSize='15px'>Students Enrolled</Text>
              </Card>
              <Card w={['90%', '90%', '24%']} h='240px' bg='red.500' color='white' alignItems='center' justifyContent='center'>

                    <Image src='img2.png' alt='img'/>
                    <Text fontSize='34px'>1,000</Text>
                    <Text fontSize='15px'>Class Completed</Text>
   
              </Card>

              <Card w={['90%', '90%', '24%']} h='240px' bg='purple.500' color='white' alignItems='center' justifyContent='center'>

                    <Image src='img3.png' alt='img'/>
                    <Text fontSize='34px'>100+</Text>
                    <Text fontSize='15px'>Skilled Instructors</Text>
        
              </Card>
              <Card w={['90%', '90%', '24%']} h='240px' bg='green.500' color='white' alignItems='center' justifyContent='center'>
        
                    <Image src="img1.png" alt='img'/>
                    <Text fontSize='34px'>1,000</Text>
                    <Text fontSize='15px'>Students Enrolled</Text>
    
              </Card>

           </Flex>
     </VStack>

     <HStack mx='30px' flexDirection={['column', 'column', 'row']} justify='space-between' mb='40px'>
         <Box w={['90%','90%','50%']} mb={['50px', '50px', '0px']} h={['300px', '300px', '550px']} pl={['5px','5px','100px']}>
              <Image src='/IMAGE (3).png' alt='imgg'  />
           </Box>
           <VStack w={['90%', '90%', '50%']} align='flex-start' pl={['5px','5px','100px']} >
              <Heading mb='30px'>What is Web 3.0</Heading>
              <Text color='gray' fontSize='16px'>
                 Web 3.0 has the potential to change the internet as we know it forever. Youre still early in catching the trend and building your first blockchain application, acquiring the skills to get a high- paying job, or creating your own web 3.0 projects that can make you money. In Web 2.0 all the data is controlled by the Big Tech companies, such as Google, Apple, etc. In the decentralized web, no single person/ company owns any data or information about anyone, and everything is visible to the public. Web3, also known as the decentralized web, is the third and latest phase of the internet. Web3 is built on peer-to-peer networks of computers that talk to each other without middlemen.
              </Text>
              <Button colorScheme='blue'>Read More</Button>
           </VStack>
        </HStack>
        <VStack alignContent='center' justifyContent='center' mb='90px'>
           <Heading fontSize={['32px','32px','48px']} fontWeight='normal'>The Program in a Nutshell</Heading>
           <Heading fontSize={['24px', '24px', '30px']} fontWeight='normal' color='red'>Earn While You Learn</Heading>
           <Text textAlign='center' w='50%' fontSize={['14px', '14px','18px']} color='gray' >In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.</Text>
        </VStack>

        <HStack mx='30px' flexDirection={['column', 'column', 'row']} justify='space-between' mb='40px'>
           <VStack w={['90%', '90%', '50%']} align='flex-start'>
              <Heading mb='30px'>Achieve Your <Text as='span' color='blue'>Goals</Text></Heading>
              <Text color='gray' fontSize='16px'>
              This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
                  </Text>
              <Button colorScheme='blue'>Apply Now</Button>
           </VStack>
           <Box w={['90%','90%','50%']} mb={['50px', '50px', '0px']} h={['300px', '300px', '550px']} pl={['5px','5px','100px']}>
           <Image src='/IMAGE (1).png' alt='immg' pl='100px'/></Box>
        </HStack>
        
        <HStack mx='30px' flexDirection={['column-reverse', 'column-reverse', 'row']} justify='space-between' mb='40px'>
        <Box w={['90%','90%','50%']} mb={['50px', '50px', '0px']} h={['300px', '300px', '550px']} pl={['5px','5px','100px']}>
           <Image src='/IMAGE (2).png' alt='img' pl='100px' pt='60px'/>
</Box>
           <VStack w={['90%', '90%', '50%']} align='flex-start' spacing='51px'>

              <Heading >Live Class From
               <Heading> Anywhere Via <Text as='span' color='blue'>Zoom</Text></Heading></Heading>
              <Text w='90%' color='gray' fontSize='16px'>
              Helping employees gain skills and providing career development often take a back seat to business priorities but workplace. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
                 </Text>
              <Button colorScheme='blue'>Learn More</Button>
           </VStack>
        </HStack>
      
    </Box>
  )
}
