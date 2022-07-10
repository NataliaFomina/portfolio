import { ReactNode } from "react"
import classNames from "classnames"

type Props = {
  className?: string
  children: ReactNode
}

const Timeline = ({ className, children, ...props }: Props) => (
  <div {...props} className={classNames("timeline", className)}>
    <div className="timeline-wrap">{children}</div>
  </div>
)

export default Timeline
