import React, { PureComponent, PropTypes } from 'react'

class HintFooter extends PureComponent {
  static propTypes = {
    holderClass: PropTypes.string.isRequired,
    hintText: PropTypes.string.isRequired
  }

  render() {
    const { holderClass, hintText } = this.props
    return (
      <div className={holderClass}>
        <p className={hintText}>
          Tip #1: Use keyboard shortcuts to sort contacts faster!
        </p>
      </div>
    )
  }
}

export default HintFooter
