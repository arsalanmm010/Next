'use client'

import { Container, Flex, VStack } from "@chakra-ui/react"
import Details from "./components/Details"
import Cart from "./components/Cart"

export default function Home() {
  return (
    <Container maxW='container.xl' p={0}>
      <Flex h={{ base:'auto', md:'100vh'}} py={[0, 10, 20]} direction={{base:'column-reverse', md:'row'}}>
       <Details />
       <Cart />
      </Flex>
    </Container>
  )
}
