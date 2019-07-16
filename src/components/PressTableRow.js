import React from 'react'

import './PressTableRow-module.css'

export default function PressTableRow({ pressData }) {
  const { date, link, title, publishedBy } = pressData.node
  const dateObj = new Date(date)
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
        <a target='_blank' href={link}>
            {title}
        </a>
      </td>
      <td>{publishedBy}</td>
    </tr>
  )
}
