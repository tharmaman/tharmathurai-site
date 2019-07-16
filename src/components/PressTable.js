import React from 'react'
import { Table } from 'reactstrap'
import PressTableRow from './PressTableRow'

import './PressTableRow-module.css'

const PressTable = ({ pressData }) => {
  const body = pressData.map((node, i) => {
    return <PressTableRow key={i} pressData={node} />
  })
  const output = (pressData.length === 0) ? (
    <h4 style={{marginTop: '1rem'}} id='stayTuned' className="text-center">~ Stay Tuned! ~</h4>
  ) : (
    <div className="table-responsive table-borderless">
      <Table id="responsiveTable">
        <thead id="header">
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Published By</th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </Table>
    </div>
  )
  return (
    <div>
      {output}
    </div>
  )
}

export default PressTable
