import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { Container, Row, Button } from 'reactstrap';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutCard from '../components/AboutCard';
import EventsCard from '../components/EventsCard';
import PressCard from '../components/PressCard.js';
import SubscribeCard from '../components/SubscribeCard';
import OrderModal from '../components/OrderModal';
import SexyCountdown from 'react-sexy-countdown';
import '../assets/css/main.css';

class IndexPage extends Component {
  state = {
    isReleased: false,
    isModalOpen: false,
  };

  componentDidMount() {
    let d1 = new Date();
    // let test = new Date('2018-10-15T18:04:00-04:00')
    let d2 = new Date('2019-07-06T00:00:00-04:00');
    if (d1 > d2) {
      this.setState(prevState => ({
        ...prevState,
        isReleased: true,
      }));
    }
  }

  handleCountdown = () => {
    this.setState(prevState => ({
      ...prevState,
      isReleased: true,
    }));
  };

  handleOpenModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: true,
    }));
  };

  handleCloseModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  render() {
    const { data } = this.props;
    const authorData = data.allContentfulPerson.edges[0].node;
    const eventData = data.allContentfulEvent.edges;
    const pressData = data.allContentfulPress.edges;
    const JSONdate = '2019-07-06T00:00:00-04:00';
    // const testDate = '2018-10-15T18:04:00-04:00'
    let renderButton = !this.state.isReleased ? (
      <div className="order-now">
        <Button onClick={() => this.handleOpenModal()}>Pre-order Now</Button>
      </div>
    ) : (
      <div className="order-now">
        <Button onClick={() => this.handleOpenModal()}>ORDER NOW</Button>
      </div>
    );
    let renderCountdown = !this.state.isReleased ? (
      <SexyCountdown
        date={JSONdate}
        onEndCountdown={() => this.handleCountdown()}
      />
    ) : (
      null
    );

    // destructure modal state
    const { isModalOpen } = this.state;

    // conditinally render modal
    const renderModal = this.state.isModalOpen ? (
      <OrderModal open={isModalOpen} onClose={this.handleCloseModal} />
    ) : null;

    return (
      <Layout>
        <Container fluid>
          <Navbar />
          <div
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3vh 2vh 0.25vh 2vh',
            }}
          >
            <div className="book-cover-container">
              {renderModal}
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/tharmaman/image/upload/v1544491500/SadnessofGeographymobile3.jpg"
                  media="(max-width: 430px)"
                />
                <source srcSet="https://res.cloudinary.com/tharmaman/image/upload/v1544491049/sadnessCover.jpg" />
                <img
                  src="https://res.cloudinary.com/tharmaman/image/upload/v1544491049/sadnessCover.jpg"
                  alt="book-cover"
                  className="book-cover"
                />
              </picture>
              {renderButton}
            </div>
          </div>
        </Container>
        {/* you can remove this after time passes */}
        {renderCountdown}
        {this.state.isReleased ? null : <br />}
        <AboutCard authorData={authorData} />
        <br />
        <Row>
          <EventsCard eventData={eventData} />
        </Row>
        <br />
        <Row>
          <PressCard pressData={pressData} />
        </Row>
        <br />
        <Row>
          <SubscribeCard />
        </Row>
        <footer>
          <div
            style={{
              backgroundColor: '#f8f9fa',
              color: 'Grey',
              fontSize: '0.65em',
            }}
            className="footer-copyright text-center py-3 px-2"
          >
            <a
              style={{ backgroundImage: 'none', color: '#ff5700' }}
              href="mailto:dtcorreo@gmail.com"
            >
              © 2018 Copyright Logathasan Tharmathurai.
            </a>{' '}
            <div id="footer">Made in React ⚛️ by his son.</div>
          </div>
        </footer>
      </Layout>
    );
  }
}

export default IndexPage;

export const authorQuery = graphql`
  query indexQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "2fvgTYuU9mE6gwGkwYQKOs" } }
    ) {
      edges {
        node {
          name
          email
          role
          email
          twitter
          instagram
          image {
            file {
              url
            }
          }
          shortBio {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulEvent(
      limit: 4
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [time], order: ASC }
    ) {
      edges {
        node {
          address
          time
          eventName
          eventLink
        }
      }
    }
    allContentfulPress(
      limit: 4
      sort: { fields: [date], order: ASC }
    ) {
      edges {
        node {
          title
          link
          publishedBy
          date
        }
      }
    }
  }
`;
