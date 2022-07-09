import React from "react"
import Profile from "../components/sections/Profile"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Education from "../components/sections/Education"
import WorkExperience from "../components/sections/WorkExperience"
import Contacts from "../components/sections/Contacts"

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Profile invertMobile imageFill className="illustration-section-01" />
        <Skills topDivider bottomDivider />
        <Projects bottomDivider imageFill />
        <Education />
        <WorkExperience />
        <Contacts />
      </React.Fragment>
    )
  }
}

export default Home
