import classNames from "classnames"
import SectionHeader from "./partials/SectionHeader"
import EducationCard from "../elements/EducationCard"

type Props = {
  className?: string
  topOuterDivider?: boolean
  bottomOuterDivider?: boolean
  topDivider?: boolean
  bottomDivider?: boolean
  hasBgColor?: boolean
  invertColor?: boolean
  pushLeft?: boolean
}

const Education = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}: Props) => (
  <section
    {...props}
    className={classNames(
      "features-tiles section center-content",
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
          "features-tiles-inner section-inner",
          topDivider && "has-top-divider",
          bottomDivider && "has-bottom-divider"
        )}
      >
        <SectionHeader
          data={{
            title: "Education",
          }}
          className="center-content"
          width={72}
          height={72}
        />
        <div className={classNames("tiles-wrap", pushLeft && "push-left")}>
          <EducationCard
            title="Programming, PHP / SQL back-end development and databases"
            subtitle="Moscow, Russia 2019"
            link="https://netology.ru"
            body={'University of Internet Professions "Netology"'}
          />
          <EducationCard
            title="Programming, Frontend Development (HTML, JavaScript, React JS)"
            subtitle="Moscow, Russia 2018-2019"
            link="https://netology.ru"
            body={'University of Internet Professions "Netology"'}
          />
          <EducationCard
            title="Programming, Responsive and mobile layout"
            subtitle="Moscow, Russia 2018"
            link="https://netology.ru"
            body={'University of Internet Professions "Netology"'}
          />
          <EducationCard
            title="Web technologies, HTML5 and CSS3"
            subtitle="Moscow, Russia 2017"
            link="https://www.specialist.ru"
            body={'"Specialist" at Bauman Moscow State Technical University'}
          />
          <EducationCard
            title="Web technologies, Website promotion and SEO"
            subtitle="Moscow, Russia 2017"
            link="https://www.specialist.ru"
            body={'"Specialist" at Bauman Moscow State Technical University'}
          />
          <EducationCard
            title="Design"
            subtitle="Milan, Italy 2008-2011"
            link="https://www.istitutomarangoni.com"
            body="Istituto Marangoni"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Education
