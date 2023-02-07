import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function OutCome() {
  return (
   <Container maxW={"1x2"} mt={10} pb={10}>
   <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
     <HStack align={"top"}>
       <VStack align={"start"}>
         <Text fontWeight={600}>
         The Outcome for Participants of the Program
         </Text>
         <Text color={"black.300"}>
         The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.


         </Text>
         <Container maxW={"1x2"} mt={10}>
           <HStack align={"top"}>
             <Box color={"green.400"} px={2}>
               <Icon as={CheckIcon} />
             </Box>
             <VStack align={"start"}>
               <Text fontWeight={600}>
               Top 5 &rsquo;Metaverse&rsquo; jobs that will rule the future of tech industry

               </Text>
             </VStack>
           </HStack>
           <HStack align={"top"}>
             <Box color={"green.400"} px={2}>
               <Icon as={CheckIcon} />
             </Box>
             <VStack align={"start"}>
               <Text fontWeight={600}>
               Blockchain Developer Salary - Jun 2022
               </Text>
             </VStack>
           </HStack>
           <HStack align={"top"}>
             <Box color={"green.400"} px={2}>
               <Icon as={CheckIcon} />
             </Box>
             <VStack align={"start"}>
               <Text fontWeight={600}>
               Web3 Salaries Soar to $750,000 for Rank-and-File Devs
               </Text>
             </VStack>
           </HStack>
           <HStack align={"top"}>
             <Box color={"green.400"} px={2}>
               <Icon as={CheckIcon} />
             </Box>
             <VStack align={"start"}>
               <Text fontWeight={600}>
               The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters Web3 Salaries Soar to $750,000 for Rank-and-File Devs
               </Text>
             </VStack>
           </HStack>
           <HStack align={"top"}>
             <Box color={"green.400"} px={2}>
               <Icon as={CheckIcon} />
             </Box>
             <VStack align={"start"}>
               <Text fontWeight={600}>
               How To Become Metaverse Developer: Scope, Skills, and Salary

               </Text>
             </VStack>
           </HStack>
         </Container>
       </VStack>
     </HStack>
  </SimpleGrid>
  </Container>)
}
