import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Random } from 'meteor/random'
import { Roles } from 'meteor/alanning:roles'

Meteor.methods({
  createUserAccount ({ username, email, role }) {
    const password = '111111'
    console.log(password)
    const userId = Accounts.createUser({ username, email, password })
    Roles.addUsersToRoles(userId, role, Roles.GLOBAL_GROUP)
    return { userId, password }
  },
  updateUserInfo ({ targetUserId, values }) {
    const userId = Meteor.userId()
    const targetValue = {
      ...values,
      updatedBy: userId,
      updatedAt: new Date()
    }
    Meteor.users.update({ _id: targetUserId }, { $set: targetValue })
    Roles.setUserRoles(targetUserId, values.role, Roles.GLOBAL_GROUP)
  }
})
