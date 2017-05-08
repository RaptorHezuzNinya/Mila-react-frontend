import React, { PureComponent, PropTypes } from 'react'
import LinearProgress from 'material-ui/LinearProgress'
// sass for this comp can be found where ever it is rendered
class ProgressIndicator extends PureComponent {
  static propTypes = {
    mode: PropTypes.string.isRequired,
    completedProgress: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    holderClass: PropTypes.string.isRequired
  }

  render () {
    const { mode, completedProgress, color, holderClass } = this.props
    return (
      <div className={holderClass}>
        <LinearProgress
          mode={mode}
          value={completedProgress}
          color={color} />
      </div>
    )
  }
}

export default ProgressIndicator
