import React, { PureComponent, PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import './NavigateContacts.sass'

const styles = {
  iconStyleNext: {
    color: '#f2f6fa',
    fontSize: 40,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  iconStylePrev: {
    color: '#f2f6fa',
    fontSize: 40,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  button: {
    height: 100,
    width: 100
  }
  // hoveredStyle: {
  //   backgroundColor:'rgba(41, 47, 54, 0.3)'
  // },
}

class NavigateContacts extends PureComponent {
  static propTypes = {
    handlePrevContact: PropTypes.func.isRequired,
    handleNextContact: PropTypes.func.isRequired
  }
  render () {
    return (
      <div className='navigate-contacts-holder'>
        <div className='contact-navigate-prev'>
          <IconButton
            onClick={this.props.handlePrevContact}
            iconClassName='material-icons'
            hoveredStyle={styles.hoveredStyle}
            iconStyle={styles.iconStylePrev}
            style={styles.button}>
            navigate_before
          </IconButton>
        </div>
        <div className='contact-navigate-next'>
          <IconButton
            onClick={this.props.handleNextContact}
            iconClassName='material-icons'
            hoveredStyle={styles.hoveredStyle}
            iconStyle={styles.iconStyleNext}
            style={styles.button}>
            navigate_next
          </IconButton>
        </div>
      </div>
    )
  }
}

export default NavigateContacts
