import React from 'react'

function TableBody({ children }) {
  return (
    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">{children}</tbody>
  )
}

export default TableBody
