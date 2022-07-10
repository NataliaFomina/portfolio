import classNames from "classnames"
import SectionHeader from "../shared/SectionHeader"
import Image from "../shared/Image"
import Item from "./Item"
import featuresSplitIcon from "../../assets/images/features-split-icon.svg"

const Education = () => (
  <section
    id="education"
    className={classNames("features-tiles section", "center-content")}
  >
    <div className="container">
      <div className={classNames("features-tiles-inner", "section-inner")}>
        <SectionHeader
          data={{
            title: "Education",
          }}
          className="center-content"
          width={72}
          height={72}
        >
          <Image
            className="mb-24"
            src={featuresSplitIcon}
            alt=""
            width={80}
            height={80}
          />
        </SectionHeader>
        <div className="tiles-wrap">
          <Item
            title="Programming, PHP / SQL back-end development and databases"
            subtitle="Moscow, Russia 2019"
            link="https://netology.ru"
            body={'University of Internet Professions "Netology"'}
          />
          <Item
            title="Programming, Frontend Development (HTML, JavaScript, React JS)"
            subtitle="Moscow, Russia 2018-2019"
            link="https://netology.ru"
            body={'University of Internet Professions "Netology"'}
          />
          <Item
            title="Programming, Responsive and mobile layout"
            subtitle="Moscow, Russia 2018"
            link="https://netology.ru"
            body={'University of Internet Professions "Netology"'}
          />
          <Item
            title="Web technologies, HTML5 and CSS3"
            subtitle="Moscow, Russia 2017"
            link="https://www.specialist.ru"
            body={'"Specialist" at Bauman Moscow State Technical University'}
          />
          <Item
            title="Web technologies, Website promotion and SEO"
            subtitle="Moscow, Russia 2017"
            link="https://www.specialist.ru"
            body={'"Specialist" at Bauman Moscow State Technical University'}
          />
          <Item
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
