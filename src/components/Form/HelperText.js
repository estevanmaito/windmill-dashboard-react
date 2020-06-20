import React from 'react'

function HelperText({ children, valid }) {
  function hasValidation(valid) {
    return valid !== undefined
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid
        ? 'text-xs text-green-600 dark:text-green-400'
        : 'text-xs text-red-600 dark:text-red-400'
    }

    return 'text-xs text-gray-600 dark:text-gray-400'
  }

  const cls = validationStyle(valid)

  return <span className={cls}>{children}</span>
}

export default HelperText
