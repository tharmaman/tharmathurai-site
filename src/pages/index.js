import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Jumbotron, Container, Row, Button } from 'reactstrap'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutCard from '../components/AboutCard'
import EventsCard from '../components/EventsCard'
import SubscribeCard from '../components/SubscribeCard'
import SexyCountdown from 'react-sexy-countdown'
import '../assets/css/main.css'

const jumbotronStyle = {
  backgroundImage:
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url(https://res.cloudinary.com/tharmaman/image/upload/v1539589118/header-background3-supermin.jpg)',
  backgroundSize: 'cover',
  color: 'White',
}

const leadStyle = {
  color: 'white',
}

class IndexPage extends Component {
  state = {
    isReleased: false,
  }

  componentDidMount() {
    let d1 = new Date()
    // let test = new Date('2018-10-15T18:04:00-04:00')
    let d2 = new Date('2019-07-06T00:00:00-04:00')
    if (d1 > d2) {
      this.setState({
        isReleased: true,
      })
    }
  }  

  handleCountdown = () => {
    this.setState({
      isReleased: true,
    })
  }

  render() {
    const { data } = this.props
    const authorData = data.allContentfulPerson.edges[0].node
    const eventData = data.allContentfulEvent.edges
    const JSONdate = '2019-07-06T00:00:00-04:00'
    // const testDate = '2018-10-15T18:04:00-04:00'
    let renderButton = !this.state.isReleased ? (
      <div />
    ) : (
      <Button
        size="lg"
        color="primary"
        onClick={() =>
          window.open('https://www.dundurn.com/books/Sadness-Geography')
        }
      >
        ORDER NOW
      </Button>
    )
    let renderCountdown = !this.state.isReleased ? (
      <SexyCountdown
        date={JSONdate}
        onEndCountdown={() => this.handleCountdown()}
      />
    ) : (
      <div />
    )
    return (
      <Layout>
        <Container fluid>
          <Navbar />
          <Jumbotron fluid style={jumbotronStyle}>
            <Container fluid>
              <h1 id="lead" className="display-3">
                The Sadness Of Geography
              </h1>
              <p className="lead" style={leadStyle}>
                My Life as a Tamil Exile
              </p>
              {renderButton}
            </Container>
          </Jumbotron>
          {/* you can remove this after time passes */}
          {renderCountdown}
          <br />
          <AboutCard authorData={authorData} />
          <br />
          <Row>
            <EventsCard eventData={eventData} />
          </Row>
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
              className="footer-copyright text-center py-3 px-4"
            >
              <a
                style={{ backgroundImage: 'none', color: '#ff5700' }}
                href="mailto:dtcorreo@gmail.com"
              >
                © 2018 Copyright Logathasan Tharmathurai.
              </a>{' '}
              Made in React ⚛️ by his son.
            </div>
          </footer>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage

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
        }
      }
    }
  }
`
