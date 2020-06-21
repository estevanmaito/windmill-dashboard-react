import React from 'react'
import classNames from 'classnames'

function Avatar({ size, img, alt, className, ...other }) {
  const baseStyle = 'relative rounded-full'
  const sizeLarge = 'w-10 h-10'
  const regularStyle = 'w-8 h-8'
  const smallStyle = 'w-6 h-6'

  function avatarSize(size) {
    switch (size) {
      case 'large':
        return sizeLarge
      case 'small':
        return smallStyle
      case 'regular':
      default:
        return regularStyle
    }
  }

  const cls = classNames(baseStyle, avatarSize(size), className)

  return (
    <div className={cls} {...other}>
      <img className="object-cover w-full h-full rounded-full" src={img} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
    </div>
  )
}

export default Avatar
