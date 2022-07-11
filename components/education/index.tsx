import Image from "next/image"
import classNames from "classnames"
import SectionHeader from "../shared/SectionHeader"
import Item from "./Item"
import featuresSplitIcon from "../../assets/images/features-split-icon.svg"
import { Education as EducationData } from "@/api"

type Props = {
  educations: EducationData[]
}

const Education = ({ educations }: Props) => (
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
            src={featuresSplitIcon.src}
            alt=""
            width={80}
            height={80}
          />
        </SectionHeader>
        <div className="tiles-wrap">
          {educations.map((education) => (
            <Item
              key={education.id}
              title={education.title}
              subtitle={`${education.location} ${education.duration}`}
              link={education.websiteUrl}
              body={education.description}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Education
