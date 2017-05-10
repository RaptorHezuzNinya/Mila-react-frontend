import React, { PureComponent, PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import './NavigateContacts.sass'

const styles = {
  iconStyle: {
    color: '#f2f6fa',
    fontSize: 40,
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    height: 100,
    width: 50
  },
  hoveredStyle: {
    backgroundColor:'rgba(41, 47, 54, 0.3)'
  },
}

class NavigateContacts extends PureComponent {
  static propTypes = {
    handlePrevContact: PropTypes.func.isRequired,
    handleNextContact: PropTypes.func.isRequired
  }
  render () {
    return (
      <div className='navigate-contacts-holder'>
        <div className='button-contact-navigatez'>
          <IconButton
            onClick={this.props.handlePrevContact}
            iconClassName='material-icons'
            hoveredStyle={styles.hoveredStyle}
            iconStyle={styles.iconStyle}
            style={styles.button}>
            navigate_before
          </IconButton>
        </div>
        <div className='button-contact-navigate'>
          <IconButton
            onClick={this.props.handleNextContact}
            iconClassName='material-icons'
            hoveredStyle={styles.hoveredStyle}
            iconStyle={styles.iconStyle}
            style={styles.button}>
            navigate_next
          </IconButton>
        </div>
      </div>
    )
  }
}

export default NavigateContacts
