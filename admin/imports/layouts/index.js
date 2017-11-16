import React from 'react'
import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data'
import {Roles} from 'meteor/alanning:roles'

import {Route, Redirect} from 'react-router-dom'

import HeaderContentFooter from '../layouts/HeaderContentFooter'
import Login from '../components/login/Login'
import Banner from '../components/banner/Banner'
import Project from '../components/project/Project'
import Example from '../components/example/Example'
import Partner from '../components/partner/Partner'
import CoreMember from '../components/coreMember/CoreMember'
import Contact from '../components/contact/Contact'
// import Section from '../components/NewAccountForm'

const Index = ({match, location, user, roles}) => {
  // console.log('=== BEG: Index layout ===')
  // console.log('match:', JSON.stringify(match))
  // console.log('location:', JSON.stringify(location))
  // console.log('user:', user)
  // console.log('roles:', roles)
  // console.log('=== END: Index layout === ')

  if (user) {
    return (
      <HeaderContentFooter location={location} user={user} roles={roles}>
        <Route
          exact
          path='/'
          render={({match}) => <Banner/>}
        />
        <Route path='/project' render={({match}) => <Project/>}/>
        <Route path='/example' render={({match}) => <Example/>}/>
        <Route path='/partner' render={({match}) => <Partner/>}/>
        <Route path='/coreMember' render={({match}) => <CoreMember/>}/>
        <Route path='/contact' render={({match}) => <Contact/>}/>
        {/*<Route path='/section' render={({match}) => <Section/>}/>*/}
        <Route path='/login' render={() => <Redirect to='/'/>}/>
      </HeaderContentFooter>
    )
  } else {
    return (
      <HeaderContentFooter location={location} user={user}>
        <Route path='/' component={Login}/>
      </HeaderContentFooter>
    )
  }
}

export default createContainer(() => {
  const userId = Meteor.userId()

  return {
    user: Meteor.user(),
    roles: Roles.getRolesForUser(userId)
  }
}, Index)
