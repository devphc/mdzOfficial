import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from '../layouts'

import 'antd/dist/antd.css'
import './App.css'

const App = () =>
  <Router>
    <Route path='/' component={Layout} />
  </Router>

export default App
