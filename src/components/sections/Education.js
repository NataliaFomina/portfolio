import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import EducationCard from "../elements/EducationCard"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

class Education extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props

    const outerClasses = classNames(
      "features-tiles section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    )

    const innerClasses = classNames(
      "features-tiles-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    )

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left")

    const sectionHeader = {
      title: "Education",
    }

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content"
              width={72}
              height={72}
            />
            <div className={tilesClasses}>
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
                body={
                  '"Specialist" at Bauman Moscow State Technical University'
                }
              />
              <EducationCard
                title="Web technologies, Website promotion and SEO"
                subtitle="Moscow, Russia 2017"
                link="https://www.specialist.ru"
                body={
                  '"Specialist" at Bauman Moscow State Technical University'
                }
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
  }
}

Education.propTypes = propTypes
Education.defaultProps = defaultProps

export default Education
