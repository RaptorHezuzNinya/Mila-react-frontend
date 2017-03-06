import React, { PureComponent, PropTypes } from 'react'
import routes from '~/middleware/routes'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'

// Styles
import './ContactCard.sass'

class ContactCard extends PureComponent {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
  }

  render() {
    const { id, firstName } = this.props

    console.log('loggin props', this.props)
    console.log('logging state', this.state)

    return (
      <div className="card">
        <Card key={ id }>
          <CardHeader
            className="title"
            title={ firstName }
          />
        </Card>
      </div>
    )
  }
}

export default ContactCard
