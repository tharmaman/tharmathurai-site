import React from 'react'
import { Col, Row } from 'reactstrap'

const ImageHolder = ({ authorData }) => {
  return (
    <Col sm="5" className="centre">
      <Row className="mx-auto">
        <img
          className="mx-auto img-responsive rounded-circle"
          src="https://images.ctfassets.net/uuvysubhnru6/5DI2sFLaN228auiuMiAeC0/34fddde422c9fa461a2a71c5d6e04ff6/face.jpeg"
          alt="this is handled in webpack"
        />
      </Row>
    </Col>
  )
}

export default ImageHolder
