import React from 'react'
import { Col } from 'reactstrap'

export default ({ authorData }) => {
  const imageStyle = {
    left: '50%',
    right: '50%',
  }
  
  return (
    <Col sm='5'>
      <div class="row text-center">
        <img className="rounded-circle" src={authorData.image.resize.src} alt="author picture"/>
      </div>
    </Col>
  )
}
