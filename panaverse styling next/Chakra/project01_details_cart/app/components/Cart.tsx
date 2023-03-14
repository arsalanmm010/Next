import { useColorMode, useColorModeValue, Stack,Image, Heading,Button, HStack, Text, VStack, AspectRatio, Divider } from "@chakra-ui/react"

export default function Cart() {
   const {toggleColorMode} = useColorMode()
   const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
   const secondaryTextColor = useColorModeValue("gray.600", "gray.400")
  
   return (
   <VStack bg={bgColor} w='full' h='full' spacing={10} p={10} alignItems='flex-start'>
      <VStack spacing={3} alignItems='flex-start'>
         <Heading size='2xl'>
            Your cart
         </Heading>
         <Text>If price is hard on your eyes, {' '}
             <Button onClick={toggleColorMode} variant='link' colorScheme='black'>try changing the theme.</Button>
             </Text>
      </VStack>
      <HStack spacing={6} alignItems='center' w='full'>
         <AspectRatio ratio={1} w={24}>
            <Image src='/skateboard.jpg' alt='image' />
         </AspectRatio>
         <Stack
         spacing={0}
         w='full'
         direction='row'
         justifyContent='space-between'
         alignItems='center'
         >
            <VStack w='full' spacing={0} alignItems='flex-start'>
               <Heading size='md'>PPenny board</Heading>
               <Text color={secondaryTextColor}>PNYCOMP27541</Text>
            </VStack>
            <Heading size='sm' textAlign='end'>$119.00</Heading>
         </Stack>
      </HStack>
      <VStack spacing={4} alignItems='stretch' w='full'>
         <HStack justifyContent='space-between'>
            <Text color={secondaryTextColor}>Subtotal</Text>
            <Heading size='sm'></Heading>
         </HStack>
         <HStack justifyContent='space-between'><Text color={secondaryTextColor}>Shipping</Text>
            <Heading size='sm'></Heading>$119.00</HStack>
         <HStack justifyContent='space-between'><Text color={secondaryTextColor}>Taxes (estimated)</Text>
            <Heading size='sm'>$19.99</Heading></HStack>
            </VStack>
            <Divider />
         <HStack justifyContent='space-between' w='full'><Text color={secondaryTextColor}>Total</Text>
            <Heading size='lg'>$23.80</Heading></HStack>
      
   </VStack>

  )
}
