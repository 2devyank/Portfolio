import { useState } from 'react'
import './App.css'

import {BsGithub} from "react-icons/bs/";
import {BsTwitter} from "react-icons/bs/";
import {FaLinkedin} from "react-icons/fa/";
import {GrMail} from "react-icons/gr/";
import First from './components/First';
import Exp from './components/Exp';
import Project from './components/Project';
import Education from './components/Education';
import image from './r2.png'
import Writings from './components/Writings';
function App() {
  
  return (
<div>
    <div className="App">
    <div className="dis">
     <div className='written'>
       <div className="upper">
       <h2>Hi , I'm Devyank 👋</h2>
       <p>I'm a Developer , having an experience of working with Web Techonologies , Always eager to  
         learn new Skills , currently I'm Web Lead at Google Developer Students Club ADGITM</p>
       </div>
      <div className="below">
        <div className='icon'>

        <a href="https://github.com/2devyank" target="_blank"><BsGithub style={{height:"40px",width:"40px"}}/></a>
        <a href="https://www.linkedin.com/in/devyank-nagpal-58564a204/" target="_blank"><FaLinkedin style={{height:"40px",width:"40px"}}/></a>
        <a href="mailto:devyanknagpal2002@gmail.com" target="_blank"><GrMail style={{height:"40px",width:"40px"}}/></a>
        <a href="https://twitter.com/DevyankNagpal" target="_blank"><BsTwitter style={{height:"40px",width:"40px"}}/></a>
        </div>
    
      
      </div>
     </div>
     <div className='emoji'>
<img src={image} alt="" />
     </div>
    </div>
  
    </div>
    <First/>
    <Exp/>
    <Project/>
    <Education/>
    <Writings/>
    </div>
  
  )
}

export default App
