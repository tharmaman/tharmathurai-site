import React from 'react'

export default function TableRow({ eventData }) {
  console.log('inside table row')
  console.log(eventData)
  const { address, time, eventName } = eventData.node
  const dateObj = new Date(time)
  const options = { weekday: 'short', month: 'short', day: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric'};
  const dateString = dateObj.toLocaleDateString("en-US", options)
  console.log(dateString)
  return (
    <tr>
      <th scope="row">{dateString}</th>
      <td>{eventName}</td>
      <td>{address}</td>
    </tr>
  )
}
