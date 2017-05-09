import React, { PureComponent, PropTypes } from 'react'
import SnackBar from 'material-ui/SnackBar'

class SnackBar extends PureComponent {
  static propTypes = {

  }

  render () {
    return (
      <div className='snackbar-holder'>
        <SnackBar />
      </div>
    )
  }
}

export default SnackBar
