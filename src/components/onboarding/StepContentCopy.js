import React from 'react'
import { PropTypes } from 'prop-types'

const StepContentCopy = ({ children, holderClass }) => {
  return (
    <div className={holderClass}>
      {children}
    </div>
  )
}

StepContentCopy.propTypes = {
  holderClass: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
}

export default StepContentCopy
