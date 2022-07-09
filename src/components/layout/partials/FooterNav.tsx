import classNames from "classnames"
import { Link } from "react-router-dom"

type Props = {
  className?: string
}

const FooterNav = ({ className, ...props }: Props) => (
  <nav {...props} className={classNames("footer-nav", className)}>
    <ul className="list-reset">
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
      <li>
        <Link to="/about-us/">About us</Link>
      </li>
      <li>
        <Link to="/faqs/">FAQ's</Link>
      </li>
      <li>
        <Link to="/support/">Support</Link>
      </li>
    </ul>
  </nav>
)

export default FooterNav
