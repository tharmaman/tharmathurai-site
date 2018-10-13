import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export default class Example extends React.Component {
  render() {
    return (
      <Navbar
        style={{ backgroundColor: 'WhiteSmoke'}}
        color="light"
        light
        expand="md"
        className="justify-content-center"
      >
        <NavbarBrand  href="/">logathasan tharmathurai</NavbarBrand>
      </Navbar>
    )
  }
}
