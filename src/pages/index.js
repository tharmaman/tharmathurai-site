import React from 'react'

import Layout from '../components/layout'
import { Jumbotron, Container } from 'reactstrap'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">The Sadness Of Geography</h1>
        <p className="lead">
          My Life as a Tamile Exile
        </p>
      </Container>
    </Jumbotron>
    <Container fluid>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Container>
  </Layout>
)

export default IndexPage
