import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Col } from 'reactstrap';
import EventTable from './EventTable'

const EventsCard = ({ eventData }) => {
  return (
    <Col xs='12'>
      <Card>
        <CardBody>
          <CardTitle className="text-center">Upcoming Events</CardTitle>
          <EventTable eventData={eventData} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default EventsCard;