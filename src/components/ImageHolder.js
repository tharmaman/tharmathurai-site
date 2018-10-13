import React from 'react'
import { Col, Row } from 'reactstrap'

const ImageHolder = ({ authorData }) => {
  return (
    <Col sm="5" className="centre">
      <Row className="mx-auto">
        <img
          className="mx-auto img-responsive rounded-circle"
          src={authorData.image.resize.src}
        />
      </Row>
    </Col>
  )
}

export default ImageHolder
