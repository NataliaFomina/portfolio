import classNames from "classnames"
import { Box, Stack, Text, HStack, Heading } from "@chakra-ui/react"
import { FiMapPin, FiHeart } from "react-icons/fi"
import { IoLanguageOutline } from "react-icons/io5"
import Button from "../elements/Button"

type Props = {
  className?: string
  topOuterDivider?: boolean
  bottomOuterDivider?: boolean
  topDivider?: boolean
  bottomDivider?: boolean
  hasBgColor?: boolean
  invertColor?: boolean
  invertMobile?: boolean
  invertDesktop?: boolean
  alignTop?: boolean
}

const Profile = ({
  className,
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  invertMobile = false,
  invertDesktop = false,
  alignTop = false,
  ...props
}: Props) => (
  <section
    {...props}
    id="profile"
    className={classNames(
      "hero section",
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
          "hero-inner section-inner",
          topDivider && "has-top-divider",
          bottomDivider && "has-bottom-divider"
        )}
      >
        <div
          className={classNames(
            "split-wrap",
            invertMobile && "invert-mobile",
            invertDesktop && "invert-desktop",
            alignTop && "align-top"
          )}
        >
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
              <Heading size="sm" as="h2" className="mt-0 mb-16 reveal-from-top">
                Frontend Engineer
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
                      Soon moving to Switzerland, currently living in Munich,
                      Germany.
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
                <Button
                  tag="a"
                  color="primary"
                  href="https://natalia-portfolio-api.herokuapp.com"
                  target="_blank"
                  wideMobile
                >
                  Download my resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const inlineStyle = () => {
  if (window.innerWidth > 641) {
    return {
      alignItems: "flex-start",
      minHeight: "492px",
    }
  }
}

export default Profile
