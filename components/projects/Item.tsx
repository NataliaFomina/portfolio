import { ReactNode } from "react"
import {
  Link,
  Stack,
  Text,
  Heading,
  Tag,
  Wrap,
  WrapItem,
  HStack,
  Box,
} from "@chakra-ui/react"
import { FiGithub, FiExternalLink } from "react-icons/fi"

type Props = {
  title: string
  websiteUrl: string
  gitHubUrl: string
  tags: string[]
  body: ReactNode
}

const Item = ({ title, websiteUrl, gitHubUrl, tags, body }: Props) => (
  <Stack spacing="15px">
    <Stack spacing="5px">
      <Heading as="h3" fontSize="32px">
        {title}
      </Heading>
      <HStack
        spacing="15px"
        w="full"
        justifyContent={{ base: "center", md: "start" }}
      >
        <HStack spacing="5px">
          <Box flexShrink={0}>
            <FiExternalLink fontSize="16px" color="#8E79FC" />
          </Box>
          {websiteUrl && (
            <Link
              href={websiteUrl}
              fontSize="sm"
              textDecoration="none"
              whiteSpace="nowrap"
              isExternal
            >
              Website
            </Link>
          )}
        </HStack>
        {gitHubUrl && (
          <HStack spacing="5px">
            <Box flexShrink={0}>
              <FiGithub fontSize="16px" color="#8E79FC" />
            </Box>
            <Link
              href={gitHubUrl}
              fontSize="sm"
              textDecoration="none"
              isExternal
            >
              GitHub
            </Link>
          </HStack>
        )}
      </HStack>
    </Stack>
    <Stack spacing="10px">
      <Wrap w="full" justify={{ base: "center", md: "start" }}>
        {tags.map((element, index) => (
          <WrapItem key={index}>
            <Tag size="sm">{element}</Tag>
          </WrapItem>
        ))}
      </Wrap>
      <Text>{body}</Text>
    </Stack>
  </Stack>
)

export default Item
