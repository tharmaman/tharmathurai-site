import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Jumbotron, Container, Row } from 'reactstrap'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutCard from '../components/AboutCard'
import EventsCard from '../components/EventsCard'
import SubscribeCard from '../components/SubscribeCard'
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

const IndexPage = ({ data }) => {
  const authorData = data.allContentfulPerson.edges[0].node
  const eventData = data.allContentfulEvent.edges
  return (
    <Layout>
      <Container fluid >
        <Navbar />
        <Jumbotron fluid style={jumbotronStyle}>
          <Container fluid>
            <h1 id="lead" className="display-3">
              The Sadness Of Geography
            </h1>
            <p className="lead" style={leadStyle}>
              My Life as a Tamil Exile
            </p>
          </Container>
        </Jumbotron>
        <AboutCard authorData={authorData} />
        <br />
        <Row>
          <EventsCard eventData={eventData} />
        </Row>
        <br />
        <Row>
          <SubscribeCard />
        </Row>
        <footer >
        <div style={{backgroundColor: 'whitesmoke', color: 'Grey',fontSize: '0.65em'}} className="footer-copyright text-center py-3">
          © 2018 Copyright
          Logathasan Tharmathurai. Made with React ⚛️ by his son.
        </div>
      </footer>
      </Container>
    </Layout>
  )
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
