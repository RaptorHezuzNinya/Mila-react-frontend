import React, { PureComponent } from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import './ProgressIndicator.sass'

// const styles = {
//   progress: {
//     color: '#cccccc'
//   }
// }

class ProgressIndicator extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {

    const { mode, completedProgress } = this.props
    return (
      <div className='progress-indicator-holder'>
        <LinearProgress
          mode={mode}
          value={completedProgress}
          color='#5DD9B2' />
      </div>
    )
  }
}

export default ProgressIndicator
