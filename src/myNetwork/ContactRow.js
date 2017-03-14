import React, { PureComponent, PropTypes } from 'react'

// Material UI Components
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, able} from 'material-ui/Table';
// Styles
import './ContactRow.sass'

class ContactRow extends PureComponent {
  render() {
    const { index, lastName, firstName, email,  companyName } = this.props

    console.log(this.props)
    return (
      <TableRow >
        <TableRowColumn>
          <p>{lastName + ',' + ' ' + firstName}</p>
          <p>{email}</p>
        </TableRowColumn>
        <TableRowColumn className="td-company">{companyName}</TableRowColumn>
      </TableRow>

    )
  }
}

export default ContactRow
