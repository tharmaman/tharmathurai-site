import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export default class Example extends React.Component {
  render() {
    return (
      <div className="header">
        <NavbarBrand href="/" style={{ marginRight: 0, color: 'black' }}>
          logathasan tharmathurai
        </NavbarBrand>
      </div>
    )
  }
}
