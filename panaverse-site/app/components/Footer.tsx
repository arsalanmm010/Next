'use client'
import { EmailIcon } from "@chakra-ui/icons";
import { Box, Image, Icon, VStack, Text, HStack, Avatar, Heading, List, ListItem, FormControl, Input } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import {BsFacebook} from "react-icons/bs"
export default function Footer() {
  return (
    <HStack bg='black' h='220px' color='white' alignItems='center'>
      <VStack px='10px'  alignItems='flex-start' >
        <Image src="/logo.png" alt='logo' h='100px' my='34px'/>
        <Text fontSize='13px' >The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
        <HStack m='30px'>
          <Icon as={AiFillGithub} />
          <Icon as={AiFillTwitterCircle} />
          <Icon as={BsFacebook} />
        </HStack>
      </VStack>
    </HStack>
  )
}
