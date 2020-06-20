import React from 'react'
import classNames from 'classnames'

const Textarea = React.forwardRef(function Textarea(props, ref) {
  const { className, children, ...other } = props

  const baseStyle =
    'block w-full text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'

  const cls = classNames(baseStyle, className)

  return (
    <textarea className={cls} ref={ref} {...other}>
      {children}
    </textarea>
  )
})

export default Textarea
