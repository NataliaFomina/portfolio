import './App.scss';
import About from './About'
import Skills from "./Skills";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contacts from "./Contacts";

function App() {
  return (
      <div className="App">
        <About/>
        <Skills/>
        <Education/>
        <Portfolio/>
        <Experience/>
        <Contacts/>
      </div>
  );
}

export default App;
