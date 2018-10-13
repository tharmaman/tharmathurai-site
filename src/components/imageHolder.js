import React from 'react'
import { Col } from 'reactstrap'

const ImageHolder = ({ authorData }) => {  
  return (
    <Col sm='5'>
      <div class="row text-center">
        <img className="rounded-circle" src={authorData.image.resize.src} alt="author picture"/>
      </div>
    </Col>
  )
}

export default ImageHolder
