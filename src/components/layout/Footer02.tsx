import classNames from "classnames"
import Logo from "./partials/Logo"
import FooterNav from "./partials/FooterNav"
import FooterSocial from "./partials/FooterSocial"

type Props = {
  topOuterDivider: boolean
  topDivider: boolean
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
      "site-footer",
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
        <div className="footer-top text-xxs">
          <div className="footer-blocks">
            <div className="footer-block">
              <Logo className="mb-16" />
              <div className="footer-copyright">
                &copy; 2020 Abstract, all rights reserved
              </div>
            </div>
            <div className="footer-block">
              <div className="footer-block-title">Company</div>
              <ul className="list-reset">
                <li>
                  <a href="https://cruip.com/">Dummy text used</a>
                </li>
                <li>
                  <a href="https://cruip.com/">The purpose of lorem</a>
                </li>
                <li>
                  <a href="https://cruip.com/">
                    Filler text can be very useful
                  </a>
                </li>
                <li>
                  <a href="https://cruip.com/">Be on design</a>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <div className="footer-block-title">Uses cases</div>
              <ul className="list-reset">
                <li>
                  <a href="https://cruip.com/">Consectetur adipiscing</a>
                </li>
                <li>
                  <a href="https://cruip.com/">Lorem Ipsum is place</a>
                </li>
                <li>
                  <a href="https://cruip.com/">Excepteur sint</a>
                </li>
                <li>
                  <a href="https://cruip.com/">Occaecat cupidatat</a>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <div className="footer-block-title">Docs</div>
              <ul className="list-reset mb-0">
                <li>
                  <a href="https://cruip.com/">The purpose of lorem</a>
                </li>
                <li>
                  <a href="https://cruip.com/">Dummy text used</a>
                </li>
                <li>
                  <a href="https://cruip.com/">Excepteur sint</a>
                </li>
                <li>
                  <a href="https://cruip.com/">Occaecat cupidatat</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom space-between center-content-mobile text-xxs">
          <FooterNav />
          <FooterSocial />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
