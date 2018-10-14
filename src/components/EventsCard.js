import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Col } from 'reactstrap';
import EventTable from './EventTable'

const EventsCard = ({ eventData }) => {
  return (
    <Col sm='6'>
      <Card>
        <CardBody>
          <CardTitle>Upcoming Events</CardTitle>
          <EventTable eventData={eventData} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default EventsCard;