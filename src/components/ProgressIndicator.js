import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
// sass for this comp can be found where ever it is rendered
const ProgressIndicator = ({ mode, completedProgress, color, holderClass }) => {
  return (
    <div className={holderClass}>
      <LinearProgress mode={mode} value={completedProgress} color={color} />
    </div>
  );
  ProgressIndicator.propTypes = {
    mode: PropTypes.string.isRequired,
    completedProgress: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    holderClass: PropTypes.string.isRequired,
  };
};

export default ProgressIndicator;
