import React from 'react'
import Media from 'react-media'

const ResponsiveContent = () => {
  return (
    <div>
      <Media query="(max-width: 769px)" render={() => (
        <div className='mobile-content'>
          <p>
            Ok, In the mean time, tell me: Which lists shall we use to sort your contacts? Do you (want to) keep a newslettes, sales-funnel, prospects?
          </p>
        </div>
      )} />
      <Media query="(min-width: 769px)" render={() => (
        <div className='desktop-content'>
          <h3>How do we sort your contacts?</h3>
          <p>
            Email a quick update to key partners? Follow-up on prospects? Keep track of freelancers? Just create a list for it.
          </p>
        </div>
      )} />
    </div>
  )
}

export default ResponsiveContent
