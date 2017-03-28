import React, { PureComponent, PropTypes } from 'react'

// Components
import DeleteButton from '../components/DeleteButton'
// Actions && Reducers
import networkList from '~/reducers/networklists'

// Material UI Components
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'

// styles & icons
import './Networklist.sass'
import '../assets/styles/base/layout.sass'

const styles = {
  footer: {
    textAlign: 'center'
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
      height: '100%',
    };
    // this.onRowSelection = this.onRowSelection.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this))
    this.onResize()
  }

  onResize = () => {
    const width = document.documentElement.clientWidth
    // hier call ik zo checkSize(width)
    this.changeTable(width)
  }

  changeTable(width) {
    const thTopCol = document.getElementsByClassName('th-top-col')

    const thNameEmail = document.getElementsByClassName('th-name-email')
    const thCompany = document.getElementsByClassName('th-company')
    const thEmails = document.getElementsByClassName('th-emails')
    const thLast = document.getElementsByClassName('th-last')
    const thAddBy = document.getElementsByClassName('th-add-by')
    const thListApp = document.getElementsByClassName('th-list-app')

    if (width < 480) {
      thNameEmail[0].setAttribute('colSpan', '12')
      thCompany[0].setAttribute('colSpan', '0')

    } if (width >= 480) {
      thNameEmail[0].setAttribute('colSpan', '8')
      thCompany[0].setAttribute('colSpan', '4')

    } if (width >= 769) {
      thTopCol[0].setAttribute('colSpan', '12')

      thNameEmail[0].setAttribute('colSpan', '4')
      thCompany[0].setAttribute('colSpan', '3')

      thLast[0].setAttribute('colSpan', '2')
      thListApp[0].setAttribute('colSpan', '3')

    } if (width >= 960) {
      thTopCol[0].setAttribute('colSpan', '16')

      thNameEmail[0].setAttribute('colSpan', '5')
      thCompany[0].setAttribute('colSpan', '4')

      thEmails[0].setAttribute('colSpan', '1')
      thLast[0].setAttribute('colSpan', '3')
      thListApp[0].setAttribute('colSpan', '3')

    } if (width > 1280 ) {
      thTopCol[0].setAttribute('colSpan', '16')

      thNameEmail[0].setAttribute('colSpan', '4')
      thCompany[0].setAttribute('colSpan', '4')

      thEmails[0].setAttribute('colSpan', '1')
      thLast[0].setAttribute('colSpan', '2')
      thAddBy[0].setAttribute('colSpan', '2')
      thListApp[0].setAttribute('colSpan', '3')
    }
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    })
    console.log(event.target.name)
  }

  handleChange = (event) => {
    this.setState({height: event.target.value})
  }

  // onRowSelection = (rows) => {
  //   console.log(rows)
  // }

  onRowSelection = (rows) => {
    const { contacts } = this.props
    const contactPerRow = [];
    // console.log('logging rows', rows, '&&', 'logging contacts', contacts)
    contacts.map((contact, i) => {
      contact.selected = rows.indexOf(i) > -1;
      contactPerRow.push(contact);
    });
    // console.log('loggign selectedContacts', contactPerRow)



    const yolo = contactPerRow.map(function(contact) { return contact.selected;});
    console.log('logging mapped selectedContacts', yolo)

    this.filterSelected(yolo)
    // console.log('yolo object', yolo)
    // yolo.filter((contact) => {
    //   return console.log(contact.selected === 'true')
    // })

    // var selectedzz = yolo.filter();

    // this.setState({contacts: selectedContacts}, () => {
    //   console.log(this.props.contacts);
    // });
 }

  filterSelected(contact) {
    const all = contact.selected === 'true'
    return console.log('all', all)
  }

  // const allSelected = selectedContacts.filter((contact) => {
  //   return contact.selected === 'true'
  // })


  // handleRowSelection = (selectedRows) => {
  //   if (selectedRows === 'all') {
  //     console.log('selectedrows', selectedRows.id)
  //   } else {
  //     selectedRows.map((row) => {
  //       console.log('row', row.index)
  //
  //       console.log('logging: event.target.name', event.target)
  //       console.log('selectedrows', selectedRows)
  //
  //     })
  //   }
  // }

  render() {
    const { contacts } = this.props
    return (
      <div className="wrapper">
        <Table
          className="container-table"
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          // onRowSelection={ this.handleRowSelection }
          onRowSelection={ this.onRowSelection }
        >
          <TableHeader
            className="table-head"
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow className="tr-1st-row">
              <TableHeaderColumn className="th-top-col" tooltip="" colSpan="12">
                <DeleteButton usedDeskClassName="delete-button-network-desk"
                              usedMobClassName="delete-button-network-mob"
                />
              </TableHeaderColumn>
            </TableRow>

            <TableRow className="tr-2nd-row">
              <TableHeaderColumn className="th-name-email" id="th-name-email" tooltip="Name & Email" colSpan="12" >Name & Email </TableHeaderColumn>
              <TableHeaderColumn className="th-company" tooltip="The Status" colSpan="0">Company & Role</TableHeaderColumn>
              <TableHeaderColumn className="th-emails" tooltip="Emails" colSpan="0">Emails</TableHeaderColumn>
              <TableHeaderColumn className="th-last" tooltip="Last contacted" colSpan="0">Last contacted</TableHeaderColumn>
              <TableHeaderColumn className="th-add-by" tooltip="Added by" colSpan="0">Added by</TableHeaderColumn>
              <TableHeaderColumn className="th-list-app" tooltip="Lists & App" colSpan="0">List & Apps</TableHeaderColumn>
            </TableRow>
          </TableHeader>


          <TableBody
            className="tablebody-container"
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
          >
            {contacts.map( (contact, index) => (

            <TableRow key={index} selected={contact.selected} className="tablerow-container">

              <TableRowColumn className="col-avatar">
                <Avatar src={contact.avatar}
                        className="avatar"
                />
              </TableRowColumn>
              <TableRowColumn className="col-name-email">
                <p className="name-email">
                  { contact.firstName + ' ' + contact.lastName } <br/> { contact.email }
                </p>
              </TableRowColumn>
              <TableRowColumn className="col-company">
                <p className="company-name">
                  { contact.companyName }
                </p>
              </TableRowColumn>
              <TableRowColumn className="col-emails">
                <p className="emails">
                  21
                </p>
              </TableRowColumn>
              <TableRowColumn className="col-last">
                <p className="last">
                  14-03-2017 16:03:52
                </p>
              </TableRowColumn>
              <TableRowColumn className="col-add-by">
                <p className="list-app">
                  Bertus Abma
                </p>
              </TableRowColumn>
              <TableRowColumn className="col-list-app">
                <p className="list-app">
                  Lists//App
                </p>
              </TableRowColumn>
            </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableRowColumn style={styles.footer} colSpan="12">
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
