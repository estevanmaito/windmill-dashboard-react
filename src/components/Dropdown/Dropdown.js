import React from 'react'

function Dropdown({ children, ...other }) {
  return (
    <ul
      className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
      {...other}
    >
      {children}
    </ul>
  )
}

export default Dropdown
