import React from 'react'

const ProceedWarning = (props) => {
  let button = null

  if (props.appended) {
      button = <p className='proceed-warning'>You need atleast 2 lists to proceed</p>;
  } else {
      button = '';
  }
  return (
    <div className='warning'>
      { button }
    </div>
  )
}

export default ProceedWarning
