import classNames from "classnames"
import { ReactNode, useMemo } from "react"
import Image from "next/image"
import { Project as ProjectData } from "@/api"
import SectionHeader from "../shared/SectionHeader"
import Item from "./Item"
import sectionIcon from "../../assets/images/features-split-icon.svg"
import bg from "../../assets/images/features-split-image.svg"
import image1 from "../../assets/images/features-split-top-01.png"
import image2 from "../../assets/images/features-split-top-02.png"
import image3 from "../../assets/images/features-split-top-03.png"

const classes = [
  "illustration-element-01",
  "illustration-element-02",
  "illustration-element-03",
]
const images = [image1, image2, image3]
const styles = [
  {
    top: "-6.31%",
    left: "-1.51%",
  },
  {
    top: "-6.31%",
    left: "-16.48%",
  },
]

type Props = {
  projects: ProjectData[]
}

const Projects = ({ projects }: Props) => {
  const items = useMemo<ReactNode[]>(() => {
    let classCounter = 0
    let imageCounter = 0
    let styleCounter = 0

    let result: ReactNode[] = []
    projects.forEach((project) => {
      const className = classes[classCounter]
      classCounter++
      if (classCounter > classes.length - 1) {
        classCounter = 0
      }
      const image = images[classCounter]
      imageCounter++
      if (imageCounter > images.length - 1) {
        imageCounter = 0
      }
      const style: any = styles[styleCounter]
      styleCounter++
      if (styleCounter > styles.length - 1) {
        styleCounter = 0
      }
      result.push(
        <div key={project.id} className="split-item reveal-from-top">
          <div className="split-item-content center-content-mobile">
            <Item
              title={project.title}
              websiteUrl={project.websiteUrl}
              gitHubUrl={project.githubUrl}
              tags={project.tags}
              body={project.description}
            />
          </div>
          <div
            className={classNames(
              "split-item-image",
              "center-content-mobile",
              className,
              "split-item-image-fill"
            )}
          >
            <Image src={bg.src} alt="" width={528} height={396} />
            <div
              style={{
                position: "absolute",
                width: "118.18%",
                maxWidth: "118.18%",
                ...style,
              }}
            >
              <Image src={image.src} alt="" width={624} height={512} />
            </div>
          </div>
        </div>
      )
    })

    return result
  }, [projects])

  return (
    <section id="projects" className={classNames("features-split", "section")}>
      <div className="container">
        <div
          className={classNames(
            "features-split-inner",
            "section-inner",
            "has-bottom-divider"
          )}
        >
          <SectionHeader
            data={{
              title: "Projects",
            }}
            className="center-content reveal-from-top"
          >
            <Image
              className="mb-24"
              src={sectionIcon.src}
              alt=""
              width={80}
              height={80}
            />
          </SectionHeader>
          <div className="split-wrap">{items}</div>
        </div>
      </div>
    </section>
  )
}

export default Projects
