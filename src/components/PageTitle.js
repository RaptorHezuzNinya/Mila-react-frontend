import React from 'react'
import './PageTitle.sass'

const PageTitle = (props) => {
  return (
    <div className={props.titleClassName}>
      <h2>{props.pageTitleContentH2}</h2>
      <h3>{props.pageTitleContentH3}</h3>
    </div>
  )
}

export default PageTitle
