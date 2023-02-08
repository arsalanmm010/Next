import Image from "next/image";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("blue.100", "green.900")}
        px={4}
        position="fixed"
        width="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box as="a" href="/">
            <Image
              src="data:image/png;base64,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"
              alt="PIAIC"
              width={40}
              height={40}
            />
          </Box>
          <Box
            as={"a"}
            fontSize={18}
            color={useColorModeValue("blue.600", "green.600")}
            fontWeight={"bold"}
            fontFamily="arial, sans-serif"
            href={"https://www.piaic.org"}
          >
            {" "}
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}