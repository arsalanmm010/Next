import { Heading,useBreakpointValue, Text,Button,Checkbox, FormControl, FormLabel, GridItem, Input, Select, SimpleGrid, VStack } from "@chakra-ui/react"

export default function Details() {
   const colSpan = useBreakpointValue({base: 2, md:1})
  return (
   <VStack w='full' h='full' spacing={10} p={10} alignItems='flex-start'>
      <VStack spacing={3} alignItems='flex-start'>
         <Heading size='2xl'>
            Your details
         </Heading>
         <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6}>
         <GridItem colSpan={colSpan}>
            <FormControl>
               <FormLabel>First Name
               </FormLabel>
               <Input placeholder="John"/>
            </FormControl>
         </GridItem>
         <GridItem colSpan={colSpan}>
            <FormControl>
            <FormLabel>Last Name
               </FormLabel>
               <Input placeholder="Doe"/>
            </FormControl>
         </GridItem>
         <GridItem colSpan={2}>
            <FormControl>
            <FormLabel>Address
               </FormLabel>
               <Input placeholder="Bvd. Broken Dreams 21"/>
            </FormControl>
         </GridItem>
         <GridItem colSpan={colSpan}>
            <FormControl>
            <FormLabel>City
               </FormLabel>
               <Input placeholder="San Francissco"/>
            </FormControl>
         </GridItem>
         <GridItem colSpan={colSpan}>
            <FormControl>
               <FormLabel>Country</FormLabel>
                  <Select>
                     <option value='usa'>United States of America</option>
                     <option value='uae'>United Arab Emirates</option>
                     <option value='nmk'>North Macedonia</option>
                     <option value='de'>Germany</option>
                  </Select>
            </FormControl>
         </GridItem>
         <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to billing address.</Checkbox>
         </GridItem>
         <GridItem colSpan={2}>
            <Button colorScheme='brand' size='lg' w='full'>Place Order</Button>
         </GridItem>
      </SimpleGrid>
   </VStack>
  )
}
