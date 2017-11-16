import React from 'react'

import IndexPage from '../pages/IndexPage'
import Project from '../pages/Project'
import AboutMdz from '../pages/AboutMdz'

import {Route} from 'react-router-dom'

import HeaderContentFooter from '../layouts/HeaderContentFooter'

const Index = ({match, location}) => {
  // console.log('=== BEG: Index layout ===')
  // console.log('match:', JSON.stringify(match))
  // console.log('location:', JSON.stringify(location))
  // console.log('=== END: Index layout === ')

  return (
    <HeaderContentFooter location={location}>
      <Route
        exact
        path='/'
        render={({match}) => <IndexPage/>}
      />
      <Route exact path='/index' render={({match}) => <IndexPage/>}/>
      <Route exact path='/project' render={({match}) => <Project/>}/>
      <Route exact path='/aboutMdz' render={({match}) => <AboutMdz/>}/>
    </HeaderContentFooter>
  )
};

export default Index
