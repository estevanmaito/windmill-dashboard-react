import React from 'react'
import classNames from 'classnames'

const Select = React.forwardRef(function Select(props, ref) {
  const { children, className, multiple, ...other } = props
  const baseStyle =
    'block w-full text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
  const selectStyle = 'form-select'
  const multipleStyle = 'form-multiselect'

  const cls = classNames(baseStyle, !multiple && selectStyle, multiple && multipleStyle, className)

  return (
    <select className={cls} ref={ref} multiple={!!multiple} {...other}>
      {children}
    </select>
  )
})

export default Select
