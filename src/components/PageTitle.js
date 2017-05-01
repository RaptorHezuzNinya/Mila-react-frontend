import React from 'react'
import './PageTitle.sass'

const PageTitle = ({titleClassName, pageTitleContentH2, pageTitleContentH3}) => {
  if (!pageTitleContentH3) {
    return (
      <div className={titleClassName}>
        <h2>{pageTitleContentH2}</h2>
      </div>
    )
  }
  
  return (
    <div className={titleClassName}>
      <h2>{pageTitleContentH2}</h2>
      <h3>{pageTitleContentH3}</h3>
    </div>
  )
}

export default PageTitle
