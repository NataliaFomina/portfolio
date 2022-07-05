import React from "react"
import { VStack, Center, Heading } from "@chakra-ui/react"

const Skill = ({ name, icon, fontSize, ...props }) => {
  const Icon = icon
  return (
    <VStack className="reveal-rotate-from-left" {...props}>
      <Center h="45px">
        <Icon fontSize={fontSize} color="#95A1BC" />
      </Center>
      <Heading as="h3" fontSize="xs" color="#95A1BC">
        {name}
      </Heading>
    </VStack>
  )
}

export default Skill
