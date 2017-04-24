import React from 'react'

const PageTitle = (props) => {
  return (
    <div className={props.pageTitleClassName}>
      <h2>{props.pageTitleContent}</h2>
    </div>
  )
}

export default PageTitle
