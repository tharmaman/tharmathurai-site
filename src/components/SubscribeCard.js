import React, { Component } from 'react'

import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
  Alert,
} from 'reactstrap'
import Loader from 'react-loader-spinner'
import SanitizedHTML from 'react-sanitized-html'
import '../assets/css/main.css'

class EventsCard extends Component {
  state = {
    name: null,
    email: null,
    isSubmitted: false,
    isSuccessful: false,
    isLoading: false,
    msg: null,
  }

  _handleChange = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    })
  }

  _handleSubmit = event => {
    event.preventDefault()
    this.setState({
      isLoading: true,
    })
    addToMailchimp(this.state.email, { FNAME: this.state.name })
      .then(({ msg, result }) => {
        if (result === 'success') {
          this.setState({
            isLoading: false,
            isSubmitted: true,
            isSuccessful: true,
            name: '',
            email: '',
            msg: msg,
          })
        } else {
          this.setState({
            isLoading: false,
            isSubmitted: true,
            isSuccessful: false,
            msg: msg,
          })
        }
        if (result !== 'success') {
          throw msg
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          isSubmitted: true,
          isSuccessful: false,
          msg: err,
        })
      })
  }

  render() {
    let AlertTing
    if (this.state.isSubmitted && this.state.isSuccessful) {
      AlertTing = <Alert color="success">{this.state.msg} </Alert>
    } else if (this.state.isSubmitted && !this.state.isSuccessful) {
      AlertTing = (
        <Alert color="danger">
          <div
            style={{ textShadow: 'none !important' }}
          >
            <SanitizedHTML html={this.state.msg} />
          </div>
        </Alert>
      )
    }

    const Body = !this.state.isLoading ? (
      <Form onSubmit={this._handleSubmit}>
        <div className="form-row">
          <FormGroup className='col-md-5'>
            <Input
              onChange={this._handleChange}
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </FormGroup>
          <FormGroup className='col-md-7'>
            <Input
              onChange={this._handleChange}
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </FormGroup>
        </div>
        <Button size="lg" color="primary" block>
          Subscribe
        </Button>
      </Form>
    ) : (
      <Row className="justify-content-center">
        <Loader type="Oval" color="#157ffb" height="200" width="200" />
      </Row>
    )

    return (
      <Col xs="12">
        <Card>
          <CardBody>
            {AlertTing}
            <h3 style={{marginTop:'0'}} className="text-center">Stay Up To Date With the Latest News</h3>
            {Body}
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default EventsCard
