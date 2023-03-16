'use client'
import { HStack,Box,Flex, Center, Link, Text, Icon, Divider, Button } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"
import {IoLogoGithub} from 'react-icons/io'
import { MdLocalGroceryStore} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'

export default function Home() {
  return (
    
   <Box>
    <Flex justifyContent='space-between' p={6}>
      <Center m='auto' w={40}>
        <Icon as={IoLogoGithub} />
        <Text>Logo</Text>
      </Center>
      <HStack spacing={16}>
        <Text w='full'>How it Works</Text>
        <Text>Crypto</Text>
        <Text>Marketplace</Text>
        <Text w='full'>Sign In</Text>
        <Button bg='blackAlpha.900' color='white' w='full'>Get Started</Button>
      </HStack>
    </Flex>
   </Box>
  )
}
