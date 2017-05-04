import React, { PureComponent, PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import './NavigateContacts.sass'

const styles = {
  iconStyle: {
    color: '#f2f6fa',
    fontSize: 40
  },
  button: {
    height: 100,
    width: 100
  },
  hoveredStyle: {
    backgroundColor:'rgba(41, 47, 54, 0.3)'
  },
}

class NavigateContacts extends PureComponent {
  render () {
    return (
      <div className='navigate-contacts-holder'>
        <div className='button-contact-navigate'>
          <IconButton
            iconClassName='material-icons'
            hoveredStyle={styles.hoveredStyle}
            iconStyle={styles.iconStyle}
            style={styles.button}>
            navigate_next
          </IconButton>
        </div>
        <div className='button-contact-navigatez'>
          <IconButton
            iconClassName='material-icons'
            hoveredStyle={styles.hoveredStyle}
            iconStyle={styles.iconStyle}
            style={styles.button}>
            navigate_before
          </IconButton>
        </div>
      </div>
    )
  }
}

export default NavigateContacts
