import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './full.css'
export default function Project() {
  return (                          
    <div className='full'>
        <h2>Projects</h2>

    <div className='ul'>
       
    <div className='up' >
  <div className="carde">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbHlteV_T2SNbJjASrWKUMh7-2XvEaMxoJg&usqp=CAU" alt="" />
    <br />
    <h3>Shopping Cart</h3>
    <br />
    <a href="https://keen-lalande-f88d6e.netlify.app/">   <Button>Live Site</Button></a> <span></span>
         <a href="https://github.com/2devyank/Shopping-Cart">  <Button>Github</Button></a> 
  </div>
    {/* <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbHlteV_T2SNbJjASrWKUMh7-2XvEaMxoJg&usqp=CAU" style={{width:"100%"}} />
        <Card.Body>
          <Card.Title>Shopping Cart</Card.Title>
          <Card.Text>
       <a href="https://keen-lalande-f88d6e.netlify.app/">   <Button>Live Site</Button></a> <span></span>
         <a href="https://github.com/2devyank/Shopping-Cart">  <Button>Github</Button></a> 
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
    <div className='up'>
    <div className="carde">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_ITGBzzLjdTKzH2_vQStN1ga6zsDt_Iytw&usqp=CAU" alt="" />
    <br />
    <h3>Budget Tracker</h3>
    <br />
    <a href="https://priceless-kirch-bfea14.netlify.app/"><Button>Live Site</Button></a> <span></span>
      <a href="https://github.com/2devyank/Budget"><Button>Github</Button></a> 
  </div>
      {/* <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_ITGBzzLjdTKzH2_vQStN1ga6zsDt_Iytw&usqp=CAU" style={{width:"100%"}}/>
        <Card.Body>
          <Card.Title>Budget Tracker</Card.Title>
          <Card.Text>
         <a href="https://priceless-kirch-bfea14.netlify.app/"><Button>Live Site</Button></a> <span></span>
      <a href="https://github.com/2devyank/Budget"><Button>Github</Button></a> 
          </Card.Text>
        </Card.Body>
      </Card> */}
      </div>

    
    </div>
    </div>
  )
}
