import React from 'react'
import AboutText from './AboutText';
import ImageHolder from './ImageHolder'

import { Row } from 'reactstrap'; 

const AboutContainer  = ({ authorData }) => {
    return (
      <Row>
        <AboutText authorData={authorData} />
        <ImageHolder authorData={authorData} />
      </Row>
    )
}

export default AboutContainer;
