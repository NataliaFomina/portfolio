import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import FooterIllustration from "./FooterIllustration"

const Layout = () => (
  <>
    <main className="site-content">
      <Outlet />
    </main>
    <Footer />
    <FooterIllustration />
  </>
)

export default Layout
