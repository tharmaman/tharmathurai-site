import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const EventsCard = (props) => {
  return (
    <Col sm='6'>
      <Card>

        <CardBody>
          <CardTitle>Upcoming Events</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EventsCard;