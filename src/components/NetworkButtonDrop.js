import React, { PureComponent, PropTypes } from 'react'

// Material ui comp

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const styles = {
  customWidth: {
    width: '100%',
  }
}

class NetworkButtonDrop extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {value: 1}
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    const { name } = this.props
    return (
      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText={name} />
        </DropDownMenu>
      </div>

    )
  }
}

export default NetworkButtonDrop
