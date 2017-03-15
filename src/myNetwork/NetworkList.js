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
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize = () => {
    let lol = document.documentElement.clientWidth
    console.log('loggin window width', lol)

  }

  checkSize = () => {
    if ($('td.large-only').css('display') === 'table-cell' ) {
      $('td[colspan]').attr('colspan', '5')

    } else {
      $('td[colspan]').attr('colspan', '3')

    }
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
    const { contacts, avatar} = this.props

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
              <TableHeaderColumn className="th-top-row" colSpan="6" tooltip="">
                Delete & Tools buttons
              </TableHeaderColumn>
            </TableRow>

            <TableRow className="yoloswag">
              <TableHeaderColumn className="th-name-email small" colSpan="5" tooltip="Name & Email">Name & Email</TableHeaderColumn>
              <TableHeaderColumn className="th-list-tools medium" colSpan="1" tooltip="Lists/Tools">Lists/Tools</TableHeaderColumn>
              <TableHeaderColumn className="th-company large" colSpan="" tooltip="The Status">Company</TableHeaderColumn>
            </TableRow>

          </TableHeader>

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
          >
            {contacts.map( (contact, index) => (
              <TableRow style={styles.tableRow} key={index} selected={contact.selected}>
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
              </TableRow>
              ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableRowColumn colSpan="6" style={styles.footer}>
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
