import { FC } from "react"
import Footer from "./Footer"
import FooterIllustration from "./FooterIllustration"

const Layout: FC<{}> = ({ children }) => (
  <>
    <main className="site-content">{children}</main>
    <Footer />
    <FooterIllustration />
  </>
)

export default Layout
