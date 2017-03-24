import React, { PureComponent, PropTypes } from 'react'

//material-ui components
import FlatButton from 'material-ui/FlatButton'

const styles = {
  button: {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
}

class DeleteButton extends PureComponent {

  render(){
    return (

      <FlatButton label="Delete Button"
                  style={styles.button}
                    />
    )
  }
}

export default DeleteButton
