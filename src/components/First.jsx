import React from 'react'
import './First.css'

import java from '../../java.png'
import m from '../../mongodb.png'
import p from '../../postgresql.png'
import r from '../../react.png'
import u from '../../vuejs.png'
// import f from '../../figma.png'
import g from '../../git.png'
import f from "../../firebase.png"
// import java from '../../java.png'

export default function First() {
  return (
    <div className='fir'>
  <h2>Tech Stack</h2>
<div className='big'>
  <div className='half'>
  <div className='s'>
    <img src={java} style={{height:"100px", width:"100px"}} alt="" />
  <img src="https://img.icons8.com/color/2x/javascript.png"  alt="" />
  </div>
  <br />
  <div className='s'>
   
  <img src={f} alt=""  style={{height:"100px", width:"100px"}}/>
  <img src={g} alt="" style={{height:"100px", width:"100px"}} />
  </div>
 
  </div>
 {/* <div className='sec'>
 <div className='st'>
    <img src="https://img.icons8.com/ultraviolet/2x/react.png" alt="" />
    <img src="https://img.icons8.com/color/2x/vue-js.png" alt="" />
    
  
  </div>
  <br />
 
 
 </div> */}
  <div className='half'>
  <div className='s'>
    <img src={r} alt="" style={{height:"100px", width:"100px"}}/>
  <img src={u} alt=""style={{height:"100px", width:"100px"}} />
  </div>
  <br />
  <div className='s'>
   
  <img src={p} alt=""style={{height:"100px", width:"100px"}} />
  <img src={m} alt="" style={{height:"100px", width:"100px"}}/>
  </div>
 
  </div>
  
</div>
    </div>
  )
}
