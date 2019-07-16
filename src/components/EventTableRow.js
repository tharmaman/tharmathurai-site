import React from 'react'

import './EventTableRow-module.css'

export default function EventTableRow({ eventData }) {
  const { address, time, eventName, eventLink } = eventData.node
  const dateObj = new Date(time)
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  }
  const dateString = dateObj.toLocaleDateString('en-US', options)
  return (
    <tr>
      <td id="time">{dateString}</td>
      <td>
        <a href={eventLink} target='_blank' >
          {eventName}
        </a>
      </td>
      <td>{address}</td>
    </tr>
  )
}
