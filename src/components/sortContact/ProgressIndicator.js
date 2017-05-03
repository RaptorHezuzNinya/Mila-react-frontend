import React, { PureComponent } from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import './ProgressIndicator.sass'

const styles = {
  progress: {
    color: '#cccccc'
  }
}
class ProgressIndicator extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      completed: 20
    }
  }

  render () {
    const { completed } = this.state
    const { mode } = this.props
    return (
      <div className='progress-indicator-holder'>
        <LinearProgress
          mode={mode}
          value={completed}
          style={styles.progress}
          color='#5DD9B2'/>
      </div>
    )
  }
}

export default ProgressIndicator
