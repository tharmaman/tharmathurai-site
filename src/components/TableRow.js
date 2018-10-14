import React from 'react'

import './TableRow-module.css'

export default function TableRow({ eventData }) {
  const { address, time, eventName } = eventData.node
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
      <td>{eventName}</td>
      <td>{address}</td>
    </tr>
  )
}
