import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const EventsCard = (props) => {
  return (
    <Col sm='6'>
      <Card>

        <CardBody>
          <CardTitle>Upcoming Events</CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EventsCard;