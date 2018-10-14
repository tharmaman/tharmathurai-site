import React, { Component } from 'react'

import addToMailchimp from 'gatsby-plugin-mailchimp'
import DOMPurify from 'dompurify'
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
    console.log({
      [`${event.target.name}`]: event.target.value,
    })
    this.setState({
      [`${event.target.name}`]: event.target.value,
    })
  }

  _handleSubmit = event => {
    event.preventDefault()
    this.setState({
      isLoading: true,
    })
    console.log('submit', this.state)
    addToMailchimp(this.state.email, { FNAME: this.state.name })
      .then(({ msg, result }) => {
        console.log(this.state)
        console.log('msg', `${result}: ${msg}`)
        console.log(msg)
        console.log(result)
        if (result === 'success') {
          this.setState({
            isLoading: false,
            isSubmitted: true,
            isSuccessful: true,
            name: '',
            email: '',
            msg: msg,
          })
          console.log(this.state)
        } else {
          console.log('boop')
          this.setState({
            isLoading: false,
            isSubmitted: true,
            isSuccessful: false,
            msg: msg,
          })
          console.log(this.state)
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
        console.log('err', err)
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
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(this.state.msg),
            }}
          />
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
            <CardTitle className="text-center">Stay Up To Date With the Latest News</CardTitle>
            {Body}
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default EventsCard
