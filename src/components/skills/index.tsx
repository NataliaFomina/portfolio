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
import Item from "./Item"

const Skills = () => (
  <section className={classNames("clients section", "reveal-fade")}>
    <div className="container">
      <div
        className={classNames(
          "clients-inner",
          "section-inner",
          "has-top-divider",
          "has-bottom-divider"
        )}
      >
        <SimpleGrid minChildWidth="100px" spacingY="20px">
          <Item name="JavaScript" icon={SiJavascript} fontSize="36px" />
          <Item
            name="TypeScript"
            icon={SiTypescript}
            fontSize="36px"
            data-reveal-delay="100"
          />
          <Item
            name="HTML5"
            icon={DiHtml5}
            fontSize="42px"
            data-reveal-delay="200"
          />
          <Item
            name="CSS3"
            icon={DiCss3}
            fontSize="42px"
            data-reveal-delay="300"
          />
          <Item
            name="React"
            icon={DiReact}
            fontSize="42px"
            data-reveal-delay="400"
          />
          <Item
            name="Next.js"
            icon={SiVercel}
            fontSize="36px"
            data-reveal-delay="500"
          />
          <Item
            name="Chakra UI"
            icon={SiChakraui}
            fontSize="36px"
            data-reveal-delay="600"
          />
          <Item
            name="Git"
            icon={BsGithub}
            fontSize="36px"
            data-reveal-delay="700"
          />
          <Item
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
