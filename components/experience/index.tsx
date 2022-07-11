import Image from "next/image"
import { Heading, Text, Stack, Link, HStack, Circle } from "@chakra-ui/react"
import classNames from "classnames"
import { FiLink } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"
import SectionHeader from "../shared/SectionHeader"
import Timeline from "./Timeline"
import TimelineItem from "./TimelineItem"
import featuresSplitIcon from "../../assets/images/features-split-icon.svg"
import { Experience as ExperienceData } from "@/api"

type Props = {
  experiences: ExperienceData[]
}

const Experience = ({ experiences }: Props) => (
  <section id="experience" className={classNames("roadmap", "section")}>
    <div className="container">
      <div className={classNames("roadmap-inner", "section-inner")}>
        <SectionHeader
          data={{
            title: "Experience",
          }}
          className="center-content"
        >
          <Image
            className="mb-24"
            src={featuresSplitIcon.src}
            alt=""
            width={80}
            height={80}
          />
        </SectionHeader>
        <Timeline>
          {experiences.map((experience) => (
            <TimelineItem key={experience.id} title={experience.duration}>
              <Stack spacing={1.5}>
                <Heading as="h4" fontSize="20px">
                  {experience.title}
                </Heading>
                <HStack spacing={1}>
                  <HiOutlineLocationMarker fontSize="18px" color="#58678C" />
                  <Heading as="h4" fontSize="18px" color="#58678C">
                    {experience.location}
                  </Heading>
                </HStack>
                {experience.websiteUrl && (
                  <HStack spacing={1}>
                    <FiLink fontSize="16px" color="#8E79FC" />
                    <Link href={experience.websiteUrl} isExternal>
                      {experience.websiteUrl}
                    </Link>
                  </HStack>
                )}
                {experience.description
                  .split("-")
                  .map((item) => item.trim())
                  .filter((item) => item.length > 0)
                  .map((item, index) => (
                    <HStack spacing={1.5} key={index} alignItems="flex-start">
                      <Circle mt={2} size={1} bg="#58678C" />
                      <Text>{item}</Text>
                    </HStack>
                  ))}
              </Stack>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  </section>
)

export default Experience
