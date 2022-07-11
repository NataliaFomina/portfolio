import styled from "@emotion/styled"
import foolterIllustration from "../../assets/images/illustration-section-10.svg"

const FooterIllustration = styled.div`
  &::after {
    content: "";
    position: absolute;
    width: 101%;
    max-width: 101%;
    height: 1000px;
    background-image: url(${foolterIllustration.src});
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

export default FooterIllustration
