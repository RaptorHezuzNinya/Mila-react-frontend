import React, { PureComponent, PropTypes } from 'react'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class ContactRow extends PureComponent {
  render() {
    const { row } = this.props
    return (
      <TableRow key={index} selected={row.selected}>
        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>
          <p>{row.firstName} + ' ' + {row.lastName}</p>
          <p>{row.email}</p>
        </TableRowColumn>
        <TableRowColumn>{row.lastName}</TableRowColumn>
        <TableRowColumn>{row.email}</TableRowColumn>
        <TableRowColumn>{row.companyName}</TableRowColumn>
      </TableRow>
    )
  }
}

export default ContactRow
