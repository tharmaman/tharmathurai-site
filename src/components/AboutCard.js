import React from 'react'

import AboutText from './AboutText'
import ImageHolder from './ImageHolder'
import { Row, Col } from 'reactstrap'
import SocialWidget from './SocialWidget'

const AboutCard = ({ authorData }) => {

  return (
    <Row>
      <Col sm="7">
        <Row>
          <Col sm="12">
            <h3>About The Author</h3>
          </Col>
        </Row>
        <Row>
          <AboutText authorData={authorData} />
        </Row>
      </Col>
      <Col sm="5">
        <ImageHolder className="row justify-content-center" authorData={authorData} />
        <SocialWidget className="row justify-content-center" authorData={authorData} />
      </Col>
    </Row>
  )
}

export default AboutCard
