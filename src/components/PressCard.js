import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import PressTable from './PressTable'

const PressCard = ({ pressData }) => {
  return (
    <Col xs="12">
      <Card>
        <CardBody>
          <h3 style={{marginTop:'0', paddingBottom:'0.5rem'}} className="text-center">In The Press</h3>
          <PressTable pressData={pressData} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default PressCard
