import { Box,Heading,Text  } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Box as="section" color='gray.50' px='8'  bg='purple.600' fontFamily='Inter' pt={{base: '60px', lg:'90px'}} pb='198px' textAlign={{base:'left', lg:'center'}} >
        <Heading as='h1' fontWeight='800' fontSize={{base:'30px', lg:'50px'}} >Simple pricing for your business</Heading>
        <Text fontWeight='500' fontSize={{base:'lg', lg:'20px'}} pt='4'>Plans that are carefully crafted to suit your business.</Text>
      </Box>
    </div>
  )
}
