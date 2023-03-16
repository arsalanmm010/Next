'use client'
import { HStack,Box,Flex, Center, Link, Text, Icon, Divider } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"
import {HiLocationMarker} from 'react-icons/hi'
import { MdLocalGroceryStore} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'

export default function Home() {
  return (
    
    <Box bg='#571F9C;' w='100%' p={3} color='white'>
      <Flex justifyContent='space-around'>
      <Center>
       <EmailIcon /> <Link href="#">
        <Text>info@example.com</Text>
        </Link>
      </Center>
      <HStack spacing={4}>
        <Center>
        <Icon as={HiLocationMarker} />
        <Link href="#">
        <Text>Branches</Text>
        </Link>
        </Center>
        <Divider orientation="vertical" borderWidth={2} borderColor='blue'/>
        <Center>
        <Icon as={MdLocalGroceryStore} />
        <Link href="#">
        <Text>Stores</Text>
        </Link>
        </Center>
        <Divider orientation="vertical" borderWidth={2} borderColor='blue'/>
        <Center>
        <Icon as={BsFillPersonFill} />
        <Link href="#">
        <Text>Contact us</Text>
        </Link>
        </Center>
      </HStack>
      </Flex>
    </Box>
  )
}
