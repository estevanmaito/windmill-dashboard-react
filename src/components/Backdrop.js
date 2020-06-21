import React from 'react'

function Backdrop(props) {
  return (
    <div
      className="fixed inset-0 z-20 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      {...props}
    ></div>
  )
}

export default Backdrop
