'use client'

import {Avatar,Link, Image,Box, Text,Flex, Button, HStack} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Navbar() {
  return (
    <Flex mx='20px' as='nav' p='10px' alignItems='center' justifyContent='space-between'>  
      <HStack spacing={12}>
        <Image  borderRadius='sm' boxSize='40px' w='100%' src='/logo.png' alt='logo' />
        <Text>About</Text>
        <Text>Blog</Text>
        <Text>Community</Text>
        <Text>Web3.0</Text>
        <Text>More</Text>
      </HStack>
      <HStack spacing={6}>
        <Link href='https://github.com/panaverse/panaverse.github.io' isExternal>
          Github <ExternalLinkIcon mx='2px' />
        </Link>
        <Button colorScheme='blue' size='lg' w='125px'>Apply</Button> 
      </HStack>    
    </Flex>
  )
}
