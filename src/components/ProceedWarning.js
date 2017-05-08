import React from 'react'

const ProceedWarning = ({proceedWarning, holderClass, textClass, warningText}) => {
  let button = null

  if (proceedWarning) {
      button = <p className={textClass}>{warningText}</p>;
  } else {
      button = '';
  }
  return (
    <div className={holderClass}>
      { button }
    </div>
  )
}

export default ProceedWarning
