import React from 'react'
import {render} from 'react-dom'

import App from './App'
import './Index.css'

Meteor.startup(() => {
  render(<App/>, document.getElementById('root'))
})
