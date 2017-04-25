import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const Plugins = (props) => {
  return (
    <div className={props.pluginWrapClassName}>
      <p className={props.textClassName}>Get notified of new contacts, download plugin:</p>
      <FlatButton label={props.gmailBtnlabel} onClick={() => console.log('email btn clicked')}/>
      <FlatButton label={props.slackBtnlabel} onClick={() => console.log('slack btn clicked')}/>
    </div>
  )
}

export default Plugins
