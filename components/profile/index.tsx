import { Box, Stack, Text, HStack, Heading, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import classNames from "classnames"
import { FiMapPin, FiHeart } from "react-icons/fi"
import { IoLanguageOutline } from "react-icons/io5"
import { Profile as ProfileData } from "@/api"

type Props = {
  profile: ProfileData
}

const Profile = ({ profile }: Props) => {
  const router = useRouter()
  return (
    <section
      id="profile"
      className={classNames("hero", "section", "illustration-section-01")}
    >
      <div className="container">
        <div className={classNames("hero-inner", "section-inner")}>
          <div className={classNames("split-wrap", "invert-mobile")}>
            <div className="split-item" style={inlineStyle()}>
              <div className="hero-content split-item-content center-content-mobile">
                <Heading
                  size="xl"
                  as="h1"
                  className="mt-0 mb-16 reveal-from-top"
                  data-reveal-delay="150"
                >
                  {profile.fullName}
                </Heading>
                <Heading
                  size="sm"
                  as="h2"
                  className="mt-0 mb-16 reveal-from-top"
                >
                  {profile.title}
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
                        {profile.bio}
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
                        {profile.location}
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
                        {profile.languages}
                      </Text>
                    </HStack>
                  </Stack>
                </Box>
                <div className="reveal-from-top" data-reveal-delay="450">
                  <Button
                    colorScheme="brand"
                    onClick={() => router.push("/resume")}
                  >
                    Get my resume
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

const inlineStyle = () => {
  if (typeof window === "undefined" || window.innerWidth > 641) {
    return {
      alignItems: "flex-start",
      minHeight: "492px",
    }
  }
}

export default Profile
