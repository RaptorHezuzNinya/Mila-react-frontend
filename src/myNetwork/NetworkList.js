import React, { PureComponent, PropTypes } from 'react'

// Components

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
  },
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
      colSpan: '12',
    };
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
    const thNameEmail = document.getElementsByClassName('th-name-email')
    const thCompany = document.getElementsByClassName('th-company')
    const thEmails = document.getElementsByClassName('th-emails')
    const thLast = document.getElementsByClassName('th-last')
    const thAddBy = document.getElementsByClassName('th-add-by')
    const thListApp = document.getElementsByClassName('th-list-app')

    // const colNameEmail = document.getElementsByClassName('col-name-email')


    if (width < 480) {
      thNameEmail[0].setAttribute('colSpan', '12')

      // colNameEmail[0].setAttribute('colSpan', '12')
    } else if (width >= 480) {
      thNameEmail[0].setAttribute('colSpan', '8')
      thCompany[0].setAttribute('colSpan', '4')

    } if (width >= 769) {
      thNameEmail[0].setAttribute('colSpan', '3')
      thCompany[0].setAttribute('colSpan', '3')
      thEmails[0].setAttribute('colSpan', '2')
      thLast[0].setAttribute('colSpan', '2')
      thListApp[0].setAttribute('colSpan', '2')
    } else if (width > 960) {
      thNameEmail[0].setAttribute('colSpan', '3')
      thCompany[0].setAttribute('colSpan', '3')
      thEmails[0].setAttribute('colSpan', '1')
      thLast[0].setAttribute('colSpan', '2')
      thAddBy[0].setAttribute('colSpan', '1')
      thListApp[0].setAttribute('colSpan', '2')
    }
  };


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
    const { contacts} = this.props

    return (
      <div>
        <Table
          className="table-container"
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >

          <TableHeader
            className="table-head"
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow className="tr-1st-row">
              <TableHeaderColumn className="th-top-col" tooltip="" colSpan={this.state.colSpan}>
                Delete & Tools buttons
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
            className="tablebody"
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
          >

            {contacts.map( (contact, index) => (
              <TableRow style={styles.tableRow} key={index} selected={contact.selected} colSpan="12">
                <TableRowColumn className="col-avatar">
                  <Avatar src={contact.avatar}
                          style={styles.avatar}
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
                    Emails
                  </p>
                </TableRowColumn>
                <TableRowColumn className="col-last">
                  <p className="last">
                    Last contacted
                  </p>
                </TableRowColumn>
                <TableRowColumn className="col-add-by">
                  <p className="list-app">
                    Added by
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
