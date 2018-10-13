import React from 'react'
import { Col } from 'reactstrap'

const AboutText = ({ authorData }) => {
  const { shortBio } = authorData;

  return (
    <Col sm="7">
      <div dangerouslySetInnerHTML={{__html: shortBio.childMarkdownRemark.html}} />
    </Col>
  )
}

export default AboutText;
