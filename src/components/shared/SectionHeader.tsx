import { ReactNode, Fragment } from "react"
import classNames from "classnames"
import { Heading } from "@chakra-ui/react"

type Tag = "h1" | "h2" | "h3"

type Props = {
  className?: string
  data: {
    title: string
    paragraph?: string
  }
  children?: ReactNode
  tag?: Tag
  width?: number
  height?: number
}

const SectionHeader = ({ className, data, children, ...props }: Props) => (
  <Fragment>
    {(data.title || data.paragraph) && (
      <div {...props} className={classNames("section-header", className)}>
        <div className="container-xs">
          {children}
          {data.title && (
            <Heading
              fontSize="38px"
              className={classNames("mt-0", data.paragraph ? "mb-16" : "mb-0")}
            >
              {data.title}
            </Heading>
          )}
          {data.paragraph && <p className="m-0">{data.paragraph}</p>}
        </div>
      </div>
    )}
  </Fragment>
)

export default SectionHeader
