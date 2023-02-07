import Image from "next/image";
import web3 from "../public/web3.png"
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";

export default function Details() {
  return (
    <Box p={20}>

      <Stack
        spacing={5}
        as={Container}
        maxW={"4xl"}
        textAlign={"center"}
        paddingBlockEnd={50}
      >
        <Heading fontSize={"2xl"}>
          Certified Web 3.0 and Metaverse Developer
        </Heading>
        <Heading fontSize={"2xl"}>
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
          Getting Ready for the Next Generation of the Internet
        </Heading>
        <Heading fontSize={"2xl"}>
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
          Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics
          Technologies
        </Heading>
        <Text
          fontSize={"1xl"}
          textDecoration={"underline"}
          color="darkblue"
          as={"a"}
          href={"https://www.panaverse.co"}
        >
          The Panaverse Community and Syllabus
        </Text>
      </Stack>
      <Stack spacing={4} padding={20}>
      <Container maxW={"1x1"} mt={10}>
   <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
      <Stack>
        <Heading fontSize={"16"}>Introduction</Heading>
        <Text color={"black.900"} fontSize={"xl"}>
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and
          more.
        </Text>

        <Text color={"black.900"} fontSize={"xl"}>
          Citi is the latest Wall Street business to give a positive prognosis
          for Web 3.0 and the Metaverse, terms used to depict a future internet
          vision centered on decentralized technologies and virtual worlds. Citi
          stated in a March 2022 research paper that the metaverse economy might
          have a total addressable market of up to $13 trillion and five billion
          people by 2030.
          https://www.citivelocity.com/citigps/metaverse-and-money/{" "}
        </Text>

        <Heading fontSize={"16"}>
          The Program in a Nutshell: Earn While You Learn
        </Heading>
        <Text color={"black.900"} fontSize={"xl"}>
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program&apos;s beginning. It resembles a
          cross between a corporate venture and an educational project.
        </Text>

        <Heading fontSize={"16"}>Program of Studies</Heading>
        <Text color={"black.900"} fontSize={"xl"}>
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first three quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </Text>
        </Stack>
        <Stack><Image
        src={web3}
         alt="web3"
         width={"1000"}
        /></Stack>
        </SimpleGrid>
        </Container>
      </Stack>
    </Box>
  );
}
  