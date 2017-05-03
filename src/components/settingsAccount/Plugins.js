import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import './Plugins.sass'
const Plugins = (props) => {
  return (
    <div className={props.pluginHolderClassName}>
      <p className={props.textClassName}>Get notified of new contacts, download plugin:</p>
      <div className={props.btnHolderClassName}>
        <FlatButton label={props.gmailBtnlabel} className='btn-grey' onClick={() => console.log('email btn clicked')}/>
        <FlatButton label={props.slackBtnlabel} className='btn-grey' onClick={() => console.log('slack btn clicked')}/>
      </div>
    </div>
  )
}

export default Plugins
