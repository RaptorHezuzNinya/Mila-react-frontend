import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'

const styles = {
  paper: {
    
  }
}
class ContactCard extends PureComponent {
  render () {
    return (
      <div className='contact-card-wrapper'>
        <Paper style={styles.paper}/>
      </div>
    )
  }
}
