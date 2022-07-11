import classNames from "classnames"
import Logo from "./Logo"
import FooterNav from "./FooterNav"
import FooterSocial from "./FooterSocial"

const Footer = () => (
  <footer
    className={classNames(
      "reveal-from-bottom",
      "site-footer center-content-mobile"
    )}
    data-reveal-offset="0"
  >
    <div className="container">
      <div className={classNames("site-footer-inner")}>
        <div className="footer-top space-between text-xxs">
          <Logo />
          <FooterSocial />
        </div>
        <div className="footer-bottom space-between text-xxs invert-order-desktop">
          <FooterNav />
          <div className="footer-copyright">&copy; 2022 Natalia Fomina</div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
