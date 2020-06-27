import React from 'react'

function TableFooter({ children }) {
  return (
    <div className="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
      {children}
    </div>
  )
}

export default TableFooter
