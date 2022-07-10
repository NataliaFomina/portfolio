import classNames from "classnames"
import { BsGithub, BsLinkedin } from "react-icons/bs"

type Props = {
  className?: string
}

const FooterSocial = ({ className, ...props }: Props) => (
  <div {...props} className={classNames("footer-social", className)}>
    <ul className="list-reset">
      <li>
        <a href="https://github.com/nataliafa">
          <BsGithub />
        </a>
      </li>
      <li>
        <a href="www.linkedin.com/in/nataliafomina">
          <BsLinkedin />
        </a>
      </li>
    </ul>
  </div>
)

export default FooterSocial
