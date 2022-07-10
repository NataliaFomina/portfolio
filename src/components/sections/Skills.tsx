import classNames from "classnames"
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di"
import { BsGithub } from "react-icons/bs"
import {
  SiJavascript,
  SiTypescript,
  SiChakraui,
  SiVercel,
} from "react-icons/si"
import { FiFigma } from "react-icons/fi"
import { SimpleGrid } from "@chakra-ui/react"
import Skill from "../elements/Skill"

type Props = {
  className?: string
  topOuterDivider?: boolean
  bottomOuterDivider?: boolean
  topDivider?: boolean
  bottomDivider?: boolean
  hasBgColor?: boolean
  invertColor?: boolean
}

const Skills = ({
  className,
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  ...props
}: Props) => (
  <section
    {...props}
    className={classNames(
      "clients section reveal-fade",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    )}
  >
    <div className="container">
      <div
        className={classNames(
          "clients-inner section-inner",
          topDivider && "has-top-divider",
          bottomDivider && "has-bottom-divider"
        )}
      >
        <SimpleGrid minChildWidth="100px" spacingY="20px">
          <Skill name="JavaScript" icon={SiJavascript} fontSize="36px" />
          <Skill
            name="TypeScript"
            icon={SiTypescript}
            fontSize="36px"
            data-reveal-delay="100"
          />
          <Skill
            name="HTML5"
            icon={DiHtml5}
            fontSize="42px"
            data-reveal-delay="200"
          />
          <Skill
            name="CSS3"
            icon={DiCss3}
            fontSize="42px"
            data-reveal-delay="300"
          />
          <Skill
            name="React"
            icon={DiReact}
            fontSize="42px"
            data-reveal-delay="400"
          />
          <Skill
            name="Next.js"
            icon={SiVercel}
            fontSize="36px"
            data-reveal-delay="500"
          />
          <Skill
            name="Chakra UI"
            icon={SiChakraui}
            fontSize="36px"
            data-reveal-delay="600"
          />
          <Skill
            name="GitHub"
            icon={BsGithub}
            fontSize="36px"
            data-reveal-delay="700"
          />
          <Skill
            name="Figma"
            icon={FiFigma}
            fontSize="36px"
            data-reveal-delay="800"
          />
        </SimpleGrid>
      </div>
    </div>
  </section>
)

export default Skills
