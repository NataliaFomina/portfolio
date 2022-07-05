import React from "react"
import classNames from "classnames"
import { Box, Stack, Text, HStack, Heading } from "@chakra-ui/react"
import { SectionSplitProps } from "../../utils/SectionProps"
import Button from "../elements/Button"
import { FiMapPin, FiHeart } from "react-icons/fi"
import { IoLanguageOutline } from "react-icons/io5"

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

class Profile extends React.Component {
  componentDidMount() {
    // this is only to handle inline style on window resize
    window.onresize = function () {
      this.forceUpdate()
    }.bind(this)
  }

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props

    const outerClasses = classNames(
      "hero section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    )

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    )

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    )

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item" style={inlineStyle()}>
                <div className="hero-content split-item-content center-content-mobile">
                  <Heading
                    size="xl"
                    as="h1"
                    className="mt-0 mb-16 reveal-from-top"
                    data-reveal-delay="150"
                  >
                    Natalia Fomina
                  </Heading>
                  <Heading
                    size="sm"
                    as="h2"
                    className="mt-0 mb-16 reveal-from-top"
                  >
                    Front-end Engineer & Web Designer
                  </Heading>
                  <Box
                    className="mt-0 mb-32 reveal-from-top"
                    data-reveal-delay="300"
                  >
                    <Stack>
                      <HStack spacing={{ base: 0, lg: 2 }}>
                        <Box
                          flexShrink={0}
                          visibility={{ base: "hidden", lg: "visible" }}
                          w={{ base: 0, lg: "auto" }}
                        >
                          <FiHeart />
                        </Box>
                        <Text
                          as="span"
                          w="full"
                          whiteSpace={{ base: "normal", lg: "nowrap" }}
                        >
                          I love web development, design and art.
                        </Text>
                      </HStack>
                      <HStack spacing={{ base: 0, lg: 2 }}>
                        <Box
                          flexShrink={0}
                          visibility={{ base: "hidden", lg: "visible" }}
                          w={{ base: 0, lg: "auto" }}
                        >
                          <FiMapPin />
                        </Box>
                        <Text
                          as="span"
                          w="full"
                          whiteSpace={{ base: "normal", lg: "nowrap" }}
                        >
                          Soon moving to Switzerland, currently living in Munich, Germany.
                        </Text>
                      </HStack>
                      <HStack spacing={{ base: 0, lg: 2 }}>
                        <Box
                          flexShrink={0}
                          visibility={{ base: "hidden", lg: "visible" }}
                          w={{ base: 0, lg: "auto" }}
                        >
                          <IoLanguageOutline />
                        </Box>
                        <Text
                          as="span"
                          w="full"
                          whiteSpace={{ base: "normal", lg: "nowrap" }}
                        >
                          I'm fluent in English, Italian and Russian
                        </Text>
                      </HStack>
                    </Stack>
                  </Box>
                  <div className="reveal-from-top" data-reveal-delay="450">
                    <Button tag="a" color="primary" href="" wideMobile>
                      Download my CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// inline style
const inlineCss = {
  alignItems: "flex-start",
  minHeight: "492px",
}

const inlineStyle = function () {
  if (window.innerWidth > 641) {
    return inlineCss
  }
}

Profile.propTypes = propTypes
Profile.defaultProps = defaultProps

export default Profile
