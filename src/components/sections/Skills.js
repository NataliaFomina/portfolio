import React from "react"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
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

const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

class Skills extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props

    const outerClasses = classNames(
      "clients section reveal-fade",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    )

    const innerClasses = classNames(
      "clients-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    )

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
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
  }
}

Skills.propTypes = propTypes
Skills.defaultProps = defaultProps

export default Skills
