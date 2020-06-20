import React from 'react'
import classNames from 'classnames'

function TableContainer({ children, className }) {
  const baseStyle = 'w-full overflow-hidden rounded-lg shadow-xs'

  const cls = classNames(baseStyle, className)
  return <div className={cls}>{children}</div>
}

export default TableContainer
