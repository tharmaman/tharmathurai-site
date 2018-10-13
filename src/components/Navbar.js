import React from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap'

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:'WhiteSmoke'}} color="light" light expand="md">
          <NavbarBrand href="/">logathasan tharmathurai</NavbarBrand>
        </Navbar>
      </div>
    )
  }
}
