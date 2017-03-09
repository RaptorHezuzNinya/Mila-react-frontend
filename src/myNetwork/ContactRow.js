import React, { PureComponent, PropTypes } from 'react'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class ContactRow extends PureComponent {
  render() {
    const { index, lastName, firstName, email,  companyName } = this.props
    console.log(this.props)
    return (
      <TableRow>
        <TableRowColumn>{index + 1}</TableRowColumn>
        <TableRowColumn>
          <p>{lastName + ',' + ' ' + firstName}</p>
          <p>{email}</p>
        </TableRowColumn>
        <TableRowColumn>{companyName}</TableRowColumn>
      </TableRow>
    )
  }
}

export default ContactRow
