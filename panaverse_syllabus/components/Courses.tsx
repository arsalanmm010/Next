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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Course Syllabus</Heading>
      </Stack>

      <Container maxW={"1x2"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
          <HStack align={"top"}>
            <VStack align={"start"}>
              <Text fontWeight={600}>
                Core Courses (Common in All Specializations):
              </Text>
              <Text color={"black.300"}>
                Every participant of the program will start by completing the
                following three core courses:
              </Text>
              <Container maxW={"1x2"} mt={10}>
                <HStack align={"top"}>
                  <Box color={"green.400"} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={"start"}>
                    <Text fontWeight={600}>
                      Quarter I (Core)CS-101: Object-Oriented Programming using
                      TypeScript
                    </Text>
                  </VStack>
                </HStack>
                <HStack align={"top"}>
                  <Box color={"green.400"} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={"start"}>
                    <Text fontWeight={600}>
                      Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0
                      Serverless Cloud Cloud Apps and APIs using Next.js 13 and
                      Cloud Development Kit (CDK) for Terraform
                    </Text>
                  </VStack>
                </HStack>
                <HStack align={"top"}>
                  <Box color={"green.400"} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={"start"}>
                    <Text fontWeight={600}>
                      Quarter III (Core) $-101: Dollar Making Bootcamp -
                      Full-Stack Template and API Product Development
                    </Text>
                  </VStack>
                </HStack>
              </Container>
            </VStack>
          </HStack>

          <HStack align={"top"}>
            <VStack align={"start"}>
              <Text fontWeight={600}>Specialized Tracks:</Text>
              <Text color={"black.300"}>
                After completing the first three quarters the participants will
                select one or more specializations consisting of two courses
                each:
              </Text>
              <Container maxW={"1x2"} mt={30}>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>
                        1. Web 3.0 (Blockchain) and Metaverse Specialization
                      </Text>
                      <Text color={"black.300"}>
                        This Web 3.0 and Metaverse specialization focuses on
                        developing full-stack Web 3.0 and Metaverse experiences
                        for the next generation of the internet by specializing
                        in building worlds that merge the best of cutting-edge
                        decentralized distributed blockchains with 3D metaverse
                        client experiences.
                      </Text>
                      <HStack align={"top"}>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter IV W3-351: Developing Smart Contracts and
                            Planet-Scale Web 3.0 Dapps
                          </Text>
                        </VStack>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter V MV-361: Developing Planet-Scale Open
                            Virtual and Augmented Metaverse Experiences
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>
                        2. Artificial Intelligence (AI) and Deep Learning
                        Specialization
                      </Text>
                      <Text color={"black.300"}>
                        The AI and Deep Learning specialization focuses on
                        building and deploying intelligent APIs using OpenAI
                        models and building custom Deep Learning Tensorflow
                        models.
                      </Text>
                      <HStack align={"top"}>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter IV AI-351: Developing Planet-Scale
                            Intelligent APIs and Python Programming
                          </Text>
                        </VStack>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter V AI-361: Deep Learning and MLOps
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>
                        3. Cloud-Native Computing Specialization
                      </Text>
                      <Text color={"black.300"}>
                        The Cloud-Native Computing Specialization focuses on
                        Containers, Kubernetes, and CDK for Kubernetes.
                      </Text>
                      <HStack align={"top"}>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter IV CN-351: Certified Kubernetes Application
                            Developer (CKAD)
                          </Text>
                        </VStack>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter V CN-361: Developing Multi-Cloud APIs using
                            CDK for Terraform
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>
                        4. Ambient Computing and IoT Specialization
                      </Text>
                      <Text color={"black.300"}>
                        The Ambient Computing and IoT Specialization focuses on
                        building Smart Homes, Offices, Factories, and Cities
                        using Voice computing, Matter Protocol, and Embedded
                        Devices.{" "}
                      </Text>
                      <HStack align={"top"}>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            {" "}
                            Quarter IV AC-351: Ambient Computing with Voice
                            Assistants and Matter Protocol Devices
                          </Text>
                        </VStack>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter V AC-361: Embedded Programming using C and
                            Rust
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>
                        5. Genomics and Bioinformatics Specialization
                      </Text>
                      <Text color={"black.300"}>
                        Genomics is the study of the total genetic makeup of
                        individual organisms, and how this genetic information
                        is structured, functions, and has evolved;
                        bioinformatics encompasses a diverse range of analytical
                        methods and tools applied to genomic data. This
                        Specialization focuses on performing complex
                        bioinformatics analysis using the most essential Python
                        libraries and applications.
                      </Text>
                      <HStack align={"top"}>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter IV Bio-351: Python for Biologists
                          </Text>
                        </VStack>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter V Bio-361: Bioinformatics with Python
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>
                        6. Network Programmability and Automation Specialization
                      </Text>
                      <Text color={"black.300"}>
                        More than ever, network engineers are finding it
                        challenging to complete their duties entirely manually.
                        Network automation is now crucial due to new protocols,
                        technologies, delivery models, and the requirement for
                        enterprises to become more adaptable and agile. This
                        course teaches network engineers how to automate systems
                        with code using a variety of technologies and tools,
                        including Linux, Python, APIs, and Git.
                      </Text>
                      <HStack align={"top"}>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter IV NPA-351: CCNA 200-301 Certification
                          </Text>
                        </VStack>
                        <Box color={"green.400"} px={2}>
                          <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={"start"}>
                          <Text fontWeight={600}>
                            Quarter V NPA-361: Network Programmability and
                            Automation
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </HStack>
                </SimpleGrid>
              </Container>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
