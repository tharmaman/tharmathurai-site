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
            <h3 style={{marginTop: '0rem'}}>About The Author</h3>
          </Col>
        </Row>
        <Row>
          <AboutText authorData={authorData} />
        </Row>
      </Col>
      <Col className="justify-content-center" sm="5" xs="12">
        <ImageHolder className="justify-content-center" authorData={authorData} />
        <SocialWidget className="justify-content-center" authorData={authorData} />
      </Col>
    </Row>
  )
}

export default AboutCard
