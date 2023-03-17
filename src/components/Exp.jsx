import React from 'react'
import './Style.css'

import gdsc from "../../gdsc-social-share.png"
export default function Exp() {
  return (
    <div className='top'>
      <h2>Volunteer Experience</h2>
      <div className='bel'>
    <div className='one'>
    
      <img src={gdsc} alt="" />
      <a href="https://dsc-adgitm.web.app/">GDSC ADGITM</a>
    </div>
    <div className='two'>
<h3>Web Lead</h3>
<span>Sep'21 - Aug'22</span>
<p> My Responsibilities included to manage Web operations ,  <br />
  to take session on Web technology and last but not< br />the least to help our community in learning web technologies </p>
    </div>
      </div>
    </div>
  )
}
