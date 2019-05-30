import React from 'react'
import { Row } from 'reactstrap'

const ImageHolder = ({ authorData }) => {
  const { url } = authorData.image.file;


  return (
    <Row>
      <img
        className="rounded-circle"
        src={`https:${url}`}
        alt="A Picture Of The Author"
        width="400vw"
        height="360vh"
      />
    </Row>
  )
}

export default ImageHolder
