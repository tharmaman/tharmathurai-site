import React from 'react'

import Layout from '../components/layout'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutCard from '../components/AboutCard'

const jumbotronStyle = {
  backgroundImage:
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url(https://res.cloudinary.com/tharmaman/image/upload/v1539364099/header-background3.jpg)',
  backgroundSize: 'cover',
  color: 'White',
}

const leadStyle = {
  color: 'white',
}

// const displayStyle = {
//   // textShadow: '4px 0 0',
//   // textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
// }

const IndexPage = ({ data }) => {
  const authorData = data.allContentfulPerson.edges[0].node
  return (
    <Layout>
      <Container fluid>
        <Navbar />
        <Jumbotron fluid style={jumbotronStyle}>
          <Container fluid>
            <h1 className="display-3">The Sadness Of Geography</h1>
            <p className="lead" style={leadStyle}>
              My Life as a Tamile Exile
            </p>
          </Container>
        </Jumbotron>
        <Row>
          <Col xs="12">
            <h2>About The Author</h2>
          </Col>
        </Row>
        <AboutCard authorData={authorData} />
      </Container>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
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
  }
`
