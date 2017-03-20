import React, { PropTypes, PureComponent } from 'react'

// Components
// import CreateNetwork from './CreateNetwork'
// material ui Components


  const customContentStyle = {
    width: '50%',
    height: '500px',
    maxWidth: 'none',
  }

class Modal extends PureComponent {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ]

    return (
      <div>
        <RaisedButton className="" label="+" onTouchTap={this.handleOpen} />
      </div>
    )
  }
}

export default Modal
