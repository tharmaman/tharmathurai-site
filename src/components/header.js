import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0, color: 'White' }}>
        <Link
          to="/"
          style={{
            color: 'White',
            textDecoration: 'none',
            textShadow: 'none',
            backgroundImage:
              'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #ff5700 1px, #ff5700 2px, rgba(0, 0, 0, 0) 2px)',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
