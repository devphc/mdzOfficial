import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'

const noUser = Meteor.users.find().count() === 0

if (noUser) {
  const username = 'super'
  const email = 'super@super.com'
  const password = 'super'
  const role = 'super'
  const userId = Accounts.createUser({ username, email, password })
  Roles.addUsersToRoles(userId, role, Roles.GLOBAL_GROUP)
}
