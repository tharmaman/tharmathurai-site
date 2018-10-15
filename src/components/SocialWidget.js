import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Row, Col } from 'reactstrap'

const SocialWidget = ({ authorData }) => {
  const iconNoUnderline = {
    backgroundImage: 'none',
  }
  return (
    <Row className="justify-content-center align-items-center">
      <Col xs="3" className="mx-auto">
        <SocialIcon style={iconNoUnderline} url={authorData.twitter} />
      </Col>
      <Col xs="3" className="mx-auto">
        <SocialIcon style={iconNoUnderline} url={authorData.instagram} />
      </Col>
      <Col xs="3" className="mx-auto">
        <SocialIcon
          style={iconNoUnderline}
          url={`mailto:${authorData.email}`}
        />
      </Col>
    </Row>
  )
}

export default SocialWidget
