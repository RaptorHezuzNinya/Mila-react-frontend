import React, { PureComponent, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import ListIcon from 'material-ui/svg-icons/action/list'
import './NetworkButton.sass'

const NetworkButton = ({title}) => {
  return (
    <FlatButton
      className='networklist-button'
      label={title}
      icon={<ListIcon className='list-icon'/>}
    />
  )
}

export default NetworkButton
