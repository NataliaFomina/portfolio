import classNames from "classnames"

type Props = {
  className?: string
}

const FooterNav = ({ className, ...props }: Props) => (
  <nav {...props} className={classNames("footer-nav", className)}>
    <ul className="list-reset">
      <li>
        <a href="#profile">Profile</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
    </ul>
  </nav>
)

export default FooterNav
