import React from "react"
import Footer from "../components/layout/Footer"

const LayoutDefault = ({ children }) => (
  <React.Fragment>
    <main className="site-content">{children}</main>
    <Footer className="reveal-from-bottom" data-reveal-offset="0" />
    <div className="illustration-section-10"></div>
  </React.Fragment>
)

export default LayoutDefault
