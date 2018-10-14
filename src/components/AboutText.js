import React from 'react'
import { Col } from 'reactstrap'
import SanitizedHTML from 'react-sanitized-html'

const AboutText = ({ authorData }) => {
  const { shortBio } = authorData
  const dirty = shortBio.childMarkdownRemark.html

  return (
    <Col sm="12">
      <SanitizedHTML html={dirty} />
    </Col>
  )
}

export default AboutText
