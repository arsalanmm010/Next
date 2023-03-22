import { Box, Flex, Text,Button, HStack } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"


export default function Header() {
  return (
    <div>
      <Box bg={['green.500', 'green.500', 'white']} w='100%' p={4} color={['white', 'white', 'green']}>
         <Flex flexDirection={['column', 'column', 'row']} justifyContent='space-between'>
            <HStack ml={[0, 0, 20]}>
               <Text>Logo</Text>
            </HStack>
            <HStack mr={[0,0,20]} >
               <HStack flexDirection={['column', 'row', 'row']} m={['auto', 0, 0]} spacing={[0,6,4]} >
               <Text>Home</Text>
               <Text pt={[4,0,0]}>How it works</Text>
               <Text pt={[4,0,0]}>Features</Text>
               <Text pt={[4,0,0]} pb={[4,0,0]}>Pricing</Text>
               <Button bg={['white', 'white', 'green.500']} color={['green', 'green', 'white']} size='sm'>Create Account</Button>
               </HStack>
            </HStack>
         </Flex>
      </Box>
    </div>
  )
}
