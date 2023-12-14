import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/home')
  }
  return (
    <> 

      <Row>

        <Col>
        
        </Col>

        <Col lg={6}>

          <h1>Welcome Video.com</h1>
          <p style={{textAlign:'justify'}}>Where user can use their favourite videos.user can upload any youtube videos by copy and paste their url into video.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop it is free try it now!!!</p>
          <button onClick={handleNavigate} className='btn btn-success'>Click Here to Know More</button>
        </Col>

        <Col lg={5}>
          <img src="https://www.seoclerk.com/pics/want56247-1t7EPh1510341013.jpg" alt="no image" className='img-fluid' />
        </Col>
      </Row>


    </>
  )
}

export default Landingpage