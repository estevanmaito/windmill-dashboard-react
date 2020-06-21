import React from 'react'
import classNames from 'classnames'

const Button = React.forwardRef(function Button(props, ref) {
  const { tag, disabled, children, size, icon, className, outline, ...other } = props

  // TODO: remove click handler if disabled and tag !== button
  // to avoid navigation
  // TODO: w-full size block

  const baseStyle =
    'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 border font-medium focus:outline-none'
  const primaryStyle = 'text-white bg-purple-600 border-transparent'
  const sizeLarger = 'px-10 py-4 rounded-lg'
  const sizeLarge = 'px-5 py-3 rounded-lg'
  const sizeRegular = 'px-4 py-2 rounded-lg text-sm'
  const sizeSmall = 'px-3 py-1 rounded-md text-sm'
  const sizeIcon = 'px-2 py-2 rounded-lg'
  const activeStyle = 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple'
  const disabledStyle = 'opacity-50 cursor-not-allowed'

  const outlineStyle =
    'text-white text-gray-700 border-gray-300 dark:text-gray-400 focus:outline-none'
  const activeOutlineStyle =
    'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray'

  // Render button as default
  // TODO: consider input type
  const Component = tag || 'button'

  function buttonSize(size) {
    switch (size) {
      case 'larger':
        return sizeLarger
      case 'large':
        return sizeLarge
      case 'regular':
        return sizeRegular
      case 'small':
        return sizeSmall
      case 'icon':
        return sizeIcon
      default:
        return sizeRegular
    }
  }

  const cls = classNames(
    baseStyle,
    !disabled && !outline && activeStyle,
    disabled && disabledStyle,
    outline ? outlineStyle : '',
    outline && !disabled && activeOutlineStyle,
    !outline && primaryStyle,
    buttonSize(size),
    className
  )
  return (
    <Component className={cls} ref={ref} disabled={disabled} {...other}>
      {children}
    </Component>
  )
})

export default Button
