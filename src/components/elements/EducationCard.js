import { Center, Link, Text, Heading, VStack } from "@chakra-ui/react"
import { GoMortarBoard } from "react-icons/go"

const EducationCard = ({ title, subtitle, link, body }) => (
  <div className="tiles-item">
    <div className="tiles-item-inner">
      <div className="features-tiles-item-header">
        <div
          className="features-tiles-item-image mb-16 reveal-from-top"
          data-reveal-container=".tiles-item"
        >
          <Center w="72px" h="72px">
            <GoMortarBoard fontSize="36px" color="white" />
          </Center>
        </div>
      </div>
      <div className="features-tiles-item-content">
        <h4
          className="mt-0 mb-8 reveal-from-top"
          data-reveal-container=".tiles-item"
          data-reveal-delay="100"
        >
          {title}
        </h4>
        <VStack
          className="m-0 text-sm reveal-from-top"
          data-reveal-container=".tiles-item"
          data-reveal-delay="200"
        >
          <Heading fontSize="sm" color="#58678C">
            {subtitle}
          </Heading>
          {link && (
            <Link href={link} fontSize="sm" textDecoration="none" isExternal>
              {new URL(link).host}
            </Link>
          )}
          <Text>{body}</Text>
        </VStack>
      </div>
    </div>
  </div>
)

export default EducationCard
