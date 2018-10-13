import React from 'react'

import AboutText from './AboutText'
import ImageHolder from './ImageHolder'
import { Row, Col } from 'reactstrap'
import { SocialIcon } from 'react-social-icons'

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
        <Row>
          <Col sm="4">
            <SocialIcon url={authorData.twitter} />
          </Col>
          <Col sm="4">
            <SocialIcon url={authorData.instagram} />
          </Col>
          <Col sm="4">
            <SocialIcon url={`mailto:${authorData.email}`} />
          </Col>
        </Row>
      </Col>
      <ImageHolder authorData={authorData} />
    </Row>
  )
}

export default AboutCard
