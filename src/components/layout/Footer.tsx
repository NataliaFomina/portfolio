import classNames from "classnames"
import Logo from "./partials/Logo"
import FooterNav from "./partials/FooterNav"
import FooterSocial from "./partials/FooterSocial"

type Props = {
  topOuterDivider?: boolean
  topDivider?: boolean
  className?: string
}

const Footer = ({
  className,
  topOuterDivider = false,
  topDivider = false,
  ...props
}: Props) => (
  <footer
    {...props}
    className={classNames(
      "site-footer center-content-mobile",
      topOuterDivider && "has-top-divider",
      className
    )}
  >
    <div className="container">
      <div
        className={classNames(
          "site-footer-inner",
          topDivider && "has-top-divider"
        )}
      >
        <div className="footer-top space-between text-xxs">
          <Logo />
          <FooterSocial />
        </div>
        <div className="footer-bottom space-between text-xxs invert-order-desktop">
          <FooterNav />
          <div className="footer-copyright">
            &copy; 2020 Abstract, all rights reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
