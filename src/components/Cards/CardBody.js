import React from 'react'
import classNames from 'classnames'

function CardBody({ children, className }) {
  const baseStyle = 'p-4'

  const cls = classNames(baseStyle, className)

  return <div className={cls}>{children}</div>
}

export default CardBody
