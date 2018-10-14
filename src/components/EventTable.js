import React from 'react'
import { Table } from 'reactstrap'
import TableRow from './TableRow'

import './EventTable-module.css'

const EventTable = ({ eventData }) => {
  console.log(eventData)
  const body = eventData.map((node, i) => {
    return <TableRow key={i} eventData={node} />
  })

  return (
    <div className="table-responsive">
      <Table id="responsiveTable">
        <thead>
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
}

export default EventTable
