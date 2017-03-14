import React, { PureComponent, PropTypes } from 'react'

// Components
// import ContactRow from './ContactRow'

// Actions && Reducers
import networkList from '~/reducers/networklists'

// Material UI Components
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'

// styles & icons
import './Networklist.sass'

const styles = {
  avatar: {
    borderRadius: 0,
    width: 60,
    height: 60,
  },
  tableRow: {
    height: 89,
  }
}


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
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '1300px',
    };
  }

  renderContactRow(row, index) {
    return <ContactRow key={index} {...row} index={index}  />
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    })
  }

  handleChange = (event) => {
    this.setState({height: event.target.value})
  }

  render() {
    const { contacts, avatar } = this.props
    debugger
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
            className="th-top"
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow >
              <TableHeaderColumn className="th-top-row" colSpan="6" tooltip="" style={{textAlign: 'center'}}>
                Delete & Tools buttons
              </TableHeaderColumn>
            </TableRow>

            <TableRow>
              <TableHeaderColumn className="yolo2" colSpan="6" tooltip="Name & Email">Name & Email</TableHeaderColumn>
              <TableHeaderColumn className="th-company"tooltip="The Status">Company</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
          >
            {contacts.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{ row.firstName + ' ' + row.lastName } <br/> { row.email } </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>


          <TableFooter>
            <TableRow>
              <TableRowColumn colSpan="6" style={{textAlign: 'center'}}>
                Loading contacts...
              </TableRowColumn>
            </TableRow>
          </TableFooter>


        </Table>
      </div>
    );
  }
}

export default NetworkList
