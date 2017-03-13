import React, { PureComponent, PropTypes } from 'react'

// Components
import ContactRow from './ContactRow'

// Actions && Reducers
import networkList from '~/reducers/networklists'

// Material UI Components
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';



class NetworkList extends PureComponent {

  static propTypes = {

  }

  constructor(props){
    super(props)

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '1750px',
    };
  }

  renderContactRow(row, index) {
    return <ContactRow key={index} {...row} index={index}  />
  }

  render() {
    const { contacts } = this.props

    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="5" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn className="unicorn" tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">First name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Last Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Email</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Company</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {contacts.map(this.renderContactRow.bind(this))}
          </TableBody>
          <TableFooter adjustForCheckbox={this.state.showCheckboxes} >
            <TableRow>
              <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default NetworkList
