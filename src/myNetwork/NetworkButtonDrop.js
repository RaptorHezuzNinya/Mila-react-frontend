import React, { PureComponent, PropTypes } from 'react'

// Material ui comp
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import ListIcon from 'material-ui/svg-icons/action/list'

// styles
import './NetworkButtonDrop.sass'

const styles = {
  customWidth: {
    width: '100%',
  }
}

class NetworkButtonDrop extends PureComponent {
  static propTypes = {
    networkLists: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {value: 1}
  }

  renderNetworkMenuItem(networkList, index, title){
    return <MenuItem
            className="dropdown-item"
            key={ index }
            { ...networkList }
            value={networkList.id}
            primaryText={networkList.title}
          />
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    const { name, networkLists } = this.props


    return (
      <div className="dropdown-container">
        <DropDownMenu
          className="dropdown-header"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          { networkLists.map(this.renderNetworkMenuItem.bind(this)) }
        </DropDownMenu>
      </div>

    )
  }
}

export default NetworkButtonDrop
