import React from 'react'
import classNames from 'classnames'

const Input = React.forwardRef(function Input(props, ref) {
  const { valid, disabled, className, type = 'text', ...other } = props
  const baseStyle =
    'block w-full text-sm dark:border-gray-600 focus:outline-none dark:text-gray-300 form-input'
  const activeStyle =
    'focus:border-purple-400 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700'
  const disabledStyle = 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800'
  const validStyle =
    'border-green-600 dark:bg-gray-700 focus:border-green-400 focus:shadow-outline-green'
  const invalidStyle =
    'border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:shadow-outline-red'
  const radioStyle =
    'text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
  const checkStyle =
    'text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'

  function hasValidation(valid) {
    return valid !== undefined
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
  }

  function typeStyle(type) {
    switch (type) {
      case 'radio':
        return radioStyle
      case 'checkbox':
        return checkStyle
      default:
        return baseStyle
    }
  }

  const cls = classNames(
    typeStyle(type),
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  )

  return <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
})

export default Input
