import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import EventTable from './EventTable'

const EventsCard = ({ eventData }) => {
  return (
    <Col xs="12">
      <Card>
        <CardBody>
          <h3 style={{marginTop:'0', paddingBottom:'0.5rem'}} className="text-center">Upcoming Events</h3>
          <EventTable eventData={eventData} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default EventsCard
