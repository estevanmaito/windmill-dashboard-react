import React from 'react'
import Button from '../Button'

const DropdownItem = React.forwardRef(function DropdownItem(props, ref) {
  const { className, children, ...other } = props
  return (
    <li>
      <Button layout="dropdown" ref={ref} className={className} {...other}>
        {children}
      </Button>
    </li>
  )
})

export default DropdownItem
