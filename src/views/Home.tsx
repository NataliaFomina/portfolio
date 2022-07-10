import Profile from "../components/sections/Profile"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Education from "../components/sections/Education"
import Experience from "../components/sections/Experience"
import Contact from "../components/sections/Contact"

const Home = () => (
  <>
    <Profile invertMobile className="illustration-section-01" />
    <Skills topDivider bottomDivider />
    <Projects bottomDivider imageFill />
    <Experience />
    <Education />
    <Contact />
  </>
)

export default Home
