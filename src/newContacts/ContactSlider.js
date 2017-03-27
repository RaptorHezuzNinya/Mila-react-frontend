import React, { PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'

// Actions and Reducers
import contact from '~/reducers/contacts'

// Components
import Contact from './Contact'

class ContactSlider extends PureComponent {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
    contacts: ['john', 'jane', 'joe', 'jenny', 'simon', 'arya'],
    finished: false,
    currentPage: 1,
    cardsPerPage: 1
    }

    this.handleNext = this.handleNext.bind(this)
  }

  handleNext = () => {
    const { currentPage } = this.state
    this.setState({
      currentPage: currentPage + 1,
    })
    console.log('clicked')
  }

  render() {
    const { contacts, currentPage, cardsPerPage } = this.state

    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const currentTestcards = contacts.slice(indexOfFirstCard, indexOfLastCard)

    const renderTestcards = currentTestcards.map((contact, index) => {
      return <li key={index}>{contact}</li>
    })

    console.log('testcards', this.state)

    return (
      <div>
        <h3>I'm a slider!</h3>

        <div>{renderTestcards}</div>

        <button
          onClick={this.handleNext}>
          click check
        </button>

      </div>
    )
  }
}

const mapStateToProps = ({ contacts }) => ({ contacts })

export default connect(mapStateToProps)(ContactSlider)
