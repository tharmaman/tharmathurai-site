import React from 'react'
import { Col } from 'reactstrap'
import DOMPurify from 'dompurify'

const AboutText = ({ authorData }) => {
  const { shortBio } = authorData;

  return (
    <Col sm="12">
      <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(shortBio.childMarkdownRemark.html)}} />
    </Col>
  )
}

export default AboutText;
