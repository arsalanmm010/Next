import { Box, Flex,Text,Heading,Button,HStack, Icon, StackProps, Stack } from "@chakra-ui/react"

import { CheckIcon } from '../icons/icons';

export const ListItem = (props: StackProps) => {
const { children, ...rest } = props;
return (
  <HStack as='li' spacing='5' {...rest} align='flex-start'>
    <Icon as={CheckIcon} w='22px' h='22px' flexShrink={0} />
    <Text textAlign='left'>{children}</Text>
  </HStack>
);
};
export default function Pricing() {


  return (
    <div>
      <Box mx='6' as='section'>
      <Box maxW='994px' textAlign='center' margin='auto' borderRadius='x1' overflow='hidden'  boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' mt='-40'>
        <Flex direction={{base:'column', lg:'row'}}>
          <Box bg='#F0EAFB'  p={{base:'28px' , sm:'60px'}} >
            <Text fontSize='x1' fontWeight='extrabold' pt='30px'>Premium PRO</Text>
            <Heading as='h3' fontSize={{base:'5x1', lg:'6x1'}} mt='4'>$329</Heading>
            <Text color='gray.900' fontWeight='medium' fontSize='lg' mt='2'>billed just once</Text>
            <Button colorScheme='purple' w={{base:'auto', sm:'282px'}} mt='6' borderRadius='10px'>Get Started</Button>
          </Box>
          <Box p={{ base: '32px', lg: '60px' }} fontSize='lg' bg='white'>
            <Text textAlign='left'>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as='ul' spacing='5' pt='6'>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
      </Box>
    </div>
  )
}
