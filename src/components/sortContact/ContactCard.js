import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import './ContactCard.sass'

const styles = {
  paper: {
    justifyContent: 'center',
    flex: '0 0 100%',
    height: 230
  }
}

class ContactCard extends PureComponent {
  render () {
    return (
      <div className='contact-card-holder'>
        <Paper style={styles.paper} zDepth={3}/>
      </div>
    )
  }
}

export default ContactCard
