import React from 'react'
import classNames from 'classnames'

function Label({ children, check, radio, disabled, className }) {
  const baseStyle = 'block text-sm text-gray-700 dark:text-gray-400'
  const checkStyle = 'inline-flex items-center'
  const disabledStyle = 'opacity-50 cursor-not-allowed'

  const cls = classNames(
    baseStyle,
    // check and radio are interchangeable
    (check || radio) && checkStyle,
    disabled && disabledStyle,
    className
  )

  return <label className={cls}>{children}</label>
}

export default Label
