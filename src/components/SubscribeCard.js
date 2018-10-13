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
} from 'reactstrap'

class EventsCard extends Component {
  state = {
    name: null,
    email: null,
    isLoading: false,
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
        this.setState({
          isLoading: false,
        })
        console.log('msg', `${result}: ${msg}`)
        if (result !== 'success') {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        this.setState({
          isLoading: false,
        })
        console.log('err', err)
        alert(err)
      })
  }

  render() {
    return (
      <Col sm="6">
        <Card>
          <CardBody>
            <CardTitle>Stay Up To Date With News</CardTitle>
            
            <Form onSubmit={this._handleSubmit}>
              <FormGroup>
                <Input
                  onChange={this._handleChange}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this._handleChange}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </FormGroup>
              <Button size="lg" color="primary" block>
                Subscribe
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default EventsCard
