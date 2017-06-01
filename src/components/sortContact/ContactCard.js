import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import ContactDetails from './ContactDetails'
import Paper from 'material-ui/Paper'
import './ContactCard.sass'
import { inlineContactCardStyles as styles } from '../../helpers/inlineStyles'

class ContactCard extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  //
  // renderContactAvatar () {
  //   const { currentContact } = this.props
  //   return currentContact.map((c) => {
  //     return (
  //       <div className='avatar-holder' key={c.id}>
  //         <img src={c.avatar} alt='user avatar'/>
  //       </div>
  //     )
  //   })
  // }
  //
  // renderContactEmail() {
  //   const { currentContact } = this.props
  //   return currentContact.map((c) => {
  //     return (
  //       <div className='email-adress' key={c.id}>
  //         <p>{c.email}</p>
  //       </div>
  //     )
  //   })
  // }
  //
  // renderEmailHeader () {
  //   const { currentContact } = this.props
  //   return currentContact.map((c) => {
  //     return (
  //       <div className='email-header-holder' key={c.id}>
  //         <p>{c.message}</p>
  //       </div>
  //     )
  //   })
  // }

  render () {
    console.log(this.props.currentContact)
    return (
      <div className='contact-card-holder'>
        <Paper style={styles.paper} zDepth={2}>
          <div className='paper-content-holder'>
            <ContactDetails onSubmit={this.props.onSubmit} />
            {/* {this.renderContactAvatar()}
            {this.renderContactEmail()}
            {this.renderEmailHeader()} */}
          </div>
        </Paper>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentContact: state.sortContact.present[0]
  }
}
export default connect(mapStateToProps)(ContactCard)
