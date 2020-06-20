import React from 'react'
import classNames from 'classnames'

function Card({ className, children, colored }) {
  const baseStyle = 'min-w-0 bg-white rounded-lg shadow-xs dark:bg-gray-800'
  const coloredStyle = 'min-w-0 rounded-lg shadow-xs'

  const cls = classNames(colored ? coloredStyle : baseStyle, className)
  return <div className={cls}>{children}</div>
}

export default Card
