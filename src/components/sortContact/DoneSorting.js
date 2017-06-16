import React, { PureComponent } from 'react'
import PageTitle from '../PageTitle'
import FlatButton from 'material-ui/FlatButton'
import GroupAdd from 'material-ui/svg-icons/social/group-add'
import './DoneSorting.sass'

class DoneSorting extends PureComponent {
  render() {
    return (
      <div className="done-sort-holder">
        <PageTitle
          titleClassName="done-sort-title"
          pageTitleContentH2="Well done!"
          pageTitleContentH3="All sorted for now - feels good huh?"
        />
        <div className="done-card">
          <div><GroupAdd /></div>
          <p>24</p>
          <p>Contacts added to your network</p>
        </div>
        <div className="button-holder">
          <FlatButton className="btn-l-a my-network" label="to my network" />
          <FlatButton className="btn-l-a" label="sort more contacts" />
        </div>
      </div>
    )
  }
}

export default DoneSorting
