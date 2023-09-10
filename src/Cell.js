import React from 'react'

const Cell = ({ key, cellData }) => {
  return (
    <td key={key}>
      {cellData}
    </td>
  )
}

export default Cell
