import React from 'react'
// sass can be found in sass file of comp proceedwarning is rendered
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
