import classNames from "classnames"
import SectionHeader from "./partials/SectionHeader"
import Timeline from "../elements/Timeline"
import TimelineItem from "../elements/TimelineItem"
import { Heading, Text, Stack, Link, HStack, Circle } from "@chakra-ui/react"
import { FiLink } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"

type Props = {
  className?: string
  topOuterDivider?: boolean
  bottomOuterDivider?: boolean
  topDivider?: boolean
  bottomDivider?: boolean
  hasBgColor?: boolean
  invertColor?: boolean
}

const WorkExperience = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}: Props) => (
  <section
    {...props}
    id="experience"
    className={classNames(
      "roadmap section",
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
          "roadmap-inner section-inner",
          topDivider && "has-top-divider",
          bottomDivider && "has-bottom-divider"
        )}
      >
        <SectionHeader
          data={{
            title: "Experience",
          }}
          className="center-content"
        />
        <Timeline>
          {data.map((item, index) => (
            <TimelineItem title={item.period} key={index}>
              <Stack spacing={1.5}>
                <Heading as="h4" fontSize="20px">
                  {item.title}
                </Heading>
                <HStack spacing={1}>
                  <HiOutlineLocationMarker fontSize="18px" color="#58678C" />
                  <Heading as="h4" fontSize="18px" color="#58678C">
                    {item.location}
                  </Heading>
                </HStack>
                <HStack spacing={1} pb={2}>
                  <FiLink fontSize="16px" color="#8E79FC" />
                  <Link href={item.link} isExternal>
                    {item.link}
                  </Link>
                </HStack>
              </Stack>
              {item.duties.map((item, index) => (
                <HStack spacing={1.5} key={index} alignItems="flex-start">
                  <Circle mt={2} size={1} bg="#58678C" />
                  <Text>{item}</Text>
                </HStack>
              ))}
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  </section>
)

const data = [
  {
    period: "Nov 2021 - Current",
    title: "Frontend Developer",
    location: "Genesis Cloud - Munich, Germany",
    link: "https://www.genesiscloud.com",
    duties: [
      "Define frontend architecture of dashboard",
      "Create task for developers and code review",
      "Refactor old version of dashboard with new architecture, using functional components, Redux toolkit, Chakra UI",
      "Take part in conversation, give technical opinion about implementation new features",
      "Development of React based component, featuring responsive design that supports mobile and tablet.",
      "Support and maintenance of website and dashboard",
    ],
  },
  {
    period: "Feb 2020 - Nov 2020",
    title: "Frontend Developer",
    location: "Mygento - Saint Petersburg, Russia",
    link: "https://www.mygento.ru",
    duties: [
      "Development of React based component, featuring responsive design that supports mobile and tablet",
      "Development of frontend elements: sliders, menus, blog, subscription, product card, cart animation, and more",
      "Code refactoring",
      "Integration testing",
      "Collaborating with backend developers",
      "Working directly with clients; taking part in discussions, setting up tasks and goals",
      "Content management & administration",
      "Taking part in the migration of Magento 1 online shop to Magento 2",
      "Support and maintenance of existing products: L'Oréal, MyGlo",
    ],
  },
  {
    period: "2019",
    title: "Web Developer (Freelancer)",
    location: "Autoharakter - Saint Petersburg, Russia",
    link: "https://autoharakter.ru",
    duties: [
      "Development of a responsive web frontend for desktop, mobile and tablet",
      "Design of UI & UX",
      "Deployment and hosting setup",
      "Defining a sitemap",
      "Working directly with clients; discussing and setting goals",
      "Working with article writers",
      "Optimizing SEO for Google and Yandex searching engines",
      "Maintenance of existing products",
    ],
  },
  {
    period: "2019",
    title: "Web Developer (Freelancer)",
    location: "Procent - Saint Petersburg, Russia",
    link: "http://процентденьги.рф",
    duties: [
      "Development of a responsive web frontend for desktop, mobile and tablet",
      "Design of UI & UX",
      "Deployment and hosting setup",
      "Defining a sitemap",
      "Working directly with clients; discussing and setting goals",
      "Working with article writers",
      "Optimizing SEO for Google and Yandex searching engines",
      "Maintenance of existing products",
    ],
  },
  {
    period: "2018",
    title: "Web Developer (Freelancer)",
    location: "Granit - Saint Petersburg, Russia",
    link: "http://granitbrz.ru",
    duties: [
      "Development of a responsive web frontend for desktop, mobile and tablet",
      "Design of UI & UX",
      "Deployment and hosting setup",
      "Defining a sitemap",
      "Working directly with clients; discussing and setting goals",
      "Working with article writers",
      "Optimizing SEO for Google and Yandex searching engines",
      "Maintenance of existing products",
    ],
  },
  {
    period: "2018",
    title: "Web Developer (Freelancer)",
    location: "Enduro - Saint Petersburg, Russia",
    link: "http://crimeatrophy.ru",
    duties: [
      "Development of a responsive web frontend for desktop, mobile and tablet",
      "Design of UI & UX",
      "Deployment and hosting setup",
      "Defining a sitemap",
      "Working directly with clients; discussing and setting goals",
      "Working with article writers",
      "Optimizing SEO for Google and Yandex searching engines",
      "Maintenance of existing products",
    ],
  },
  {
    period: "2017",
    title: "Web Master (Freelancer)",
    location: "Maskom - Moscow, Russia",
    link: "https://maskomzoloto.ru",
    duties: [
      "Creating elements (sliders, calculators)",
      "Design layouts for landing pages",
      "Responsive layout / for mobile devices",
      "SEO optimization",
      "Support for an existing site",
    ],
  },
]

export default WorkExperience
