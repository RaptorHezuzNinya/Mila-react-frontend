import React, { PureComponent, PropTypes } from 'react'

class Footer extends PureComponent {
  // constuctor(props){
  //   super(props)
  //   this.state = {
  //
  //   }
  // }

  static propTypes = {

  }

  render() {
    const { holderClass } = this.props
    return (
      <div className={holderClass}>
        Footer Comp
      </div>
    )
  }
}

export default Footer
