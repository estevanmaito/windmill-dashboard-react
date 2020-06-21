import React from 'react'
import classNames from 'classnames'

function Badge({ children, type }) {
  const baseStyle = 'px-2 py-1 text-xs font-medium leading-none rounded-full'
  const success = 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100'
  const danger = 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700'
  const warning = 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600'
  const neutral = 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700'
  const primary = 'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600'

  function badgeColor(type) {
    switch (type) {
      case 'success':
        return success
      case 'danger':
        return danger
      case 'warning':
        return warning
      case 'neutral':
        return neutral
      case 'primary':
        return primary
      default:
        return primary
    }
  }

  const className = classNames(baseStyle, badgeColor(type))

  return <span className={className}>{children}</span>
}

export default Badge
