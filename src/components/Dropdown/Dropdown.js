import React, { useEffect } from 'react'
import Transition from '../Transition'
import FocusLock from 'react-focus-lock'

function Dropdown({ children, onClose, isOpen, ...other }) {
  function handleEsc(e) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })
  return (
    <Transition
      show={isOpen}
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div>
        <FocusLock returnFocus>
          <ul
            className="absolute right-0 w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
            aria-label="submenu"
            {...other}
          >
            {children}
          </ul>
        </FocusLock>
      </div>
    </Transition>
  )
}

export default Dropdown
