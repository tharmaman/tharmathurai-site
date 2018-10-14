import React from 'react'
import { Table } from 'reactstrap'
import TableRow from './TableRow'

import './EventTable-module.css'

const EventTable = ({ eventData }) => {
  console.log(eventData)
  const body = eventData.map((node, i) => {
    return <TableRow key={i} eventData={node} />
  })

  const output = (eventData.length !== 0) ? (
    <h6 id='stayTuned' className="text-center">~ Stay Tuned! ~</h6>
  ) : (
    <div className="table-responsive table-borderless">
      <Table id="responsiveTable">
        <thead id="header">
          <tr>
            <th>When</th>
            <th>What</th>
            <th>Where</th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </Table>
    </div>
  )

  console.log('output',output)

  const ting = (
    <div className="table-responsive table-borderless">
      <Table id="responsiveTable">
        <thead id="header">
          <tr>
            <th>When</th>
            <th>What</th>
            <th>Where</th>
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

export default EventTable
