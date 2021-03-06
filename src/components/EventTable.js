import React from 'react'
import { Table } from 'reactstrap'
import EventTableRow from './EventTableRow'

import './EventTableRow-module.css'

const EventTable = ({ eventData }) => {
  const filteredEventData = eventData.filter((node) => node.node.eventName !== 'DoNotDelete')
  const body = filteredEventData.map((node, i) => {
    return <EventTableRow key={i} eventData={node} />
  })
  const output = (filteredEventData.length === 0) ? (
    <h4 style={{marginTop: '1rem'}} id='stayTuned' className="text-center">~ Stay Tuned! ~</h4>
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
  return (
    <div>
      {output}
    </div>
  )
}

export default EventTable
