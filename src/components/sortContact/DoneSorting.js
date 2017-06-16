import React, { PureComponent } from 'react'
import PageTitle from '../PageTitle'
import FlatButton from 'material-ui/FlatButton'
import GroupAdd from 'material-ui/svg-icons/social/group-add'

const DoneSorting = ({ deletedSortContacts, past }) => {
  return (
    <div className="done-sort-holder">
      <PageTitle
        titleClassName="done-sort-title"
        pageTitleContentH2="Well done!"
        pageTitleContentH3="All sorted for now - feels good huh?"
      />
      <div className="done-card-wrapper">
        <div className="done-card">
          <div className="icon-number">
            <GroupAdd className="icon" color="#f2f6fa" />
            <p className="number">{past.length - deletedSortContacts.length}</p>
          </div>
          <p className="done-text">Contacts added to your network</p>
        </div>
      </div>
      {/* <div className="wrapper-btn"> */}
      <div className="button-holder">
        <FlatButton className="btn-l-a my-network" label="to my network" />
        <FlatButton className="btn-l-a" label="sort more contacts" />
      </div>
    </div>
  )
  // </div>
}

export default DoneSorting
