import { ElementType } from "react"
import { VStack, Center, Heading } from "@chakra-ui/react"
import { BsGithub, BsStarFill } from "react-icons/bs"
import {
  SiJavascript,
  SiTypescript,
  SiChakraui,
  SiVercel,
} from "react-icons/si"
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di"
import { FiFigma } from "react-icons/fi"

type Props = {
  name: string
  fontSize: string
}

type IconInfo = {
  component: ElementType
  size: string
}

function getIconInfo(name: string): IconInfo {
  switch (name.trim().toLowerCase()) {
    case "javascript":
      return { component: SiJavascript, size: "36px" }
    case "typescript":
      return { component: SiTypescript, size: "36px" }
    case "html5":
      return { component: DiHtml5, size: "42px" }
    case "css3":
      return { component: DiCss3, size: "42px" }
    case "react":
      return { component: DiReact, size: "42px" }
    case "next.js":
      return { component: SiVercel, size: "36px" }
    case "chakra ui":
      return { component: SiChakraui, size: "36px" }
    case "git":
      return { component: BsGithub, size: "36px" }
    case "figma":
      return { component: FiFigma, size: "36px" }
    default:
      return { component: BsStarFill, size: "36px" }
  }
}

const Item = ({ name, fontSize, ...props }: Props) => {
  const { component: Icon, size } = getIconInfo(name)
  return (
    <VStack className="reveal-rotate-from-left" {...props}>
      <Center h="45px">
        <Icon fontSize={size} color="#95A1BC" />
      </Center>
      <Heading as="h3" fontSize="xs" color="#95A1BC">
        {name}
      </Heading>
    </VStack>
  )
}

export default Item
