import { Box, Button, Flex,Heading, Text,VStack, Image } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

export default function Hero() {
  return (
    <div>
      <Box m={16}>
        <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} justifyContent='space-between'>
          <VStack spacing={5} w='100%'>
          <Heading as='h1' fontSize={24}>
            Build this rad landing page from scratch
          </Heading>
          <Text >This is the subheader section where you describe the basic benefits of your product</Text>
          <Button  bg='green.500' color='white'>Create your account now <ChevronRightIcon /></Button>
          <Text fontSize={12}>No credit card required</Text>
          </VStack>
          <VStack w='100%'>
            <Image src='/plant.jpeg' alt='s' h={300}/>
          </VStack>
        </Flex>
      </Box>      
    </div>
  )
}
