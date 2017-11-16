import { Meteor } from 'meteor/meteor'

const Users = Meteor.users

Users.deny({
  insert () {
    return true
  },
  update () {
    return true
  },
  remove () {
    return true
  }
})

export default Users
