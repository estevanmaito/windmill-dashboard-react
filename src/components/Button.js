import React from 'react'
import classNames from 'classnames'

const Button = React.forwardRef(function Button(props, ref) {
  const { tag, disabled, children, size, icon, className, layout, block, ...other } = props

  // TODO: remove click handler if disabled and tag !== button
  // to avoid navigation
  // TODO: w-full size block

  const baseStyle =
    'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none'
  const blockStyle = block ? 'w-full' : null
  const sizeLarger = 'px-10 py-4 rounded-lg'
  const sizeLarge = 'px-5 py-3 rounded-lg'
  const sizeRegular = 'px-4 py-2 rounded-lg text-sm'
  const sizeSmall = 'px-3 py-1 rounded-md text-sm'
  const sizeIcon = 'px-2 py-2 rounded-lg'
  const primary = {
    base: 'text-white bg-purple-600 border border-transparent',
    active: 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple',
    disabled: 'opacity-50 cursor-not-allowed',
  }
  const outline = {
    base: 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none',
    active:
      'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray',
    disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
  }
  const link = {
    base: 'text-gray-600 dark:text-gray-400 focus:outline-none',
    active: 'hover:bg-gray-100 focus:shadow-outline-gray',
    disabled: 'opacity-50 cursor-not-allowed',
  }
  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */
  const dropdownStyle =
    'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'

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
  // larger, large, regular (default), small, ?icon?
  let sizeStyle = buttonSize(size)

  function buttonLayout(layout) {
    switch (layout) {
      case 'outline':
        return outline.base + ' ' + outline[disabled ? 'disabled' : 'active']
      case 'link':
        return link.base + ' ' + link[disabled ? 'disabled' : 'active']
      case 'dropdown':
        return dropdownStyle
      case 'primary':
      default:
        return primary.base + ' ' + primary[disabled ? 'disabled' : 'active']
    }
  }
  // primary (default), outline, link
  let layoutStyle = buttonLayout(layout)

  const cls =
    layout === 'dropdown'
      ? classNames(layoutStyle, className)
      : classNames(baseStyle, sizeStyle, layoutStyle, blockStyle, className)
  return (
    <Component className={cls} ref={ref} disabled={disabled} {...other}>
      {children}
    </Component>
  )
})

export default Button
