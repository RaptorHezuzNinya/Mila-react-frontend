import React, { PureComponent, PropTypes } from 'react'

// Components

// Actions && Reducers
import networkList from '~/reducers/networklists'

// Material UI Components
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class NetworkList extends PureComponent {

  static propTypes = {

  }


  render(){
    const { name, avatar, listId, networkLists } = this.props
    console.log('logging props', this.props)
    return {

    }
  }
}

export default NetworkList
