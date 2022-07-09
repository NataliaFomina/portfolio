import classNames from "classnames"
import { ReactNode } from "react"

type Props = {
  title: string
  className?: string
  children: ReactNode
}

const TimelineItem = ({ className, children, title, ...props }: Props) => (
  <div {...props} className={classNames("timeline-item", className)}>
    <div className="timeline-item-inner">
      <div className="timeline-item-header tt-u mb-4 reveal-fade">{title}</div>
      <div className="timeline-item-content m-0 reveal-from-side">
        {children}
      </div>
    </div>
  </div>
)

export default TimelineItem
