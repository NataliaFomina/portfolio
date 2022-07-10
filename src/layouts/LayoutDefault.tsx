import { Outlet } from "react-router-dom"
import Footer from "../components/layout/Footer"
import styled from "@emotion/styled"
import FoolterIllustration from "../assets/images/illustration-section-10.svg"

const LayoutDefault = () => (
  <>
    <main className="site-content">
      <Outlet />
    </main>
    <Footer className="reveal-from-bottom" data-reveal-offset="0" />
    <FooterIllustration />
  </>
)

const FooterIllustration = styled.div`
  &::after {
    content: "";
    position: absolute;
    width: 101%;
    max-width: 101%;
    height: 1000px;
    background-image: url(${FoolterIllustration});
    background-repeat: no-repeat;
    background-size: auto;
    left: 50%;
    bottom: -5px;
    background-position: center bottom;
    transform: translate(-50%);
    z-index: -2;
    pointer-events: none;
  }
`

export default LayoutDefault
