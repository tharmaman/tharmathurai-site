import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Row, Col } from 'reactstrap'

const SocialWidget = ({ authorData }) => {
  const iconNoUnderline = {
    backgroundImage: 'none',
  }
  console.log(authorData.twitter)
  return (
    <Row>
      <Col sm="4">
        <SocialIcon style={iconNoUnderline} url={authorData.twitter} />
      </Col>
      <Col sm="4">
        <SocialIcon style={iconNoUnderline} url={authorData.instagram} />
      </Col>
      <Col sm="4">
        <SocialIcon
          style={iconNoUnderline}
          url={`mailto:${authorData.email}`}
        />
      </Col>
    </Row>
  )
}

export default SocialWidget
