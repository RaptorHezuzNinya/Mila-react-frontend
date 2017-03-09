import React, { PureComponent, PropTypes } from 'react'

// Actions && Reducers
import networkList from '~/reducers/networklists'

// Material UI Components
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class NetworkList extends PureComponent {

  static propTypes = {

  }

  render(){
    const { name, avatar, listId } = this.props
    console.log("logging props",this.props)
    return (

      <div className="networklist">
        { name }
      </div>

    )
  }
}

export default NetworkList
