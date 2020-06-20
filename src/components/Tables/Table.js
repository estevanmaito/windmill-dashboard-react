import React from 'react'

function Table({ children }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-no-wrap">{children}</table>
    </div>
  )
}

export default Table
