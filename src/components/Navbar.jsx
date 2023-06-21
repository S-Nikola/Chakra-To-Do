import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Chakra To-Do</Heading>
      <Spacer />

      <HStack>
        <Box bg="gray.200" p="10px">M</Box>
        <Text>mario@email.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}
