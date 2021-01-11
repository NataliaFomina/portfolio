import React from 'react';
import './About.scss';
import {PhoneVisible} from "../useDeviceParams";

function About() {
  return (
      <div className="wrapper">
        {/*<h1>About</h1>*/}

        <p className="name">NATALIA FOMINA</p>
        <p className="designer">Web Developer & Web Designer</p>
        <PhoneVisible>
          only mobile
        </PhoneVisible>
        <p className="text">This means that when you set width and height, you have to adjust the value you give to allow for any border
          or padding that may be added. For example, if you have four boxes with width: 25%; they will not by default fit on one line within the constraints of the
          parent container.</p>
        <button className="btn">my works</button>
        <button className="btn">Contact me</button>

      </div>
  )
}

export default About;