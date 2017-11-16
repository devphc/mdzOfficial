import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import {
  VIEW_SECTION,
  VIEW_ALL_ORDER,
  VIEW_OWNER_ORDER
} from '/lib/helper/roles'

const DEVELOPMENT = Meteor.isDevelopment

Meteor.publish('allUsers', function () {
  if (DEVELOPMENT) Meteor._sleepForMs(500)
  const userId = this.userId
  const hasPermission = Roles.userIsInRole(userId, VIEW_SECTION)
  if (hasPermission) {
    return Meteor.users.find(
      {},
      {
        fields: { services: 0 },
        sort: { createdAt: -1 }
      }
    )
  } else {
    this.stop()
  }
})

Meteor.publish('oneUser', function (id) {
  const userId = this.userId
  const hasPermission = Roles.userIsInRole(userId, VIEW_SECTION)
  if (hasPermission) {
    return Meteor.users.find(
      { _id: id },
      {
        fields: { services: 0 },
        sort: { createdAt: -1 }
      }
    )
  } else {
    this.stop()
  }
})

Meteor.publish('Users.currentUser', function () {
  const userId = this.userId
  return Meteor.users.find(
    { _id: userId },
    {
      fields: { services: 0 },
      sort: { createdAt: -1 },
      limit: 1
    }
  )
})

Meteor.publish('Users.section.name', function () {
  const userId = this.userId
  const CAN_VIEW_ALL_ORDER = Roles.userIsInRole(userId, VIEW_ALL_ORDER)
  const CAN_VIEW_OWNER_ORDER = Roles.userIsInRole(userId, VIEW_OWNER_ORDER)
  if (CAN_VIEW_ALL_ORDER) {
    return Meteor.users.find(
      { role: 'section' },
      {
        fields: { role: 1, title: 1, createdAt: 1 },
        sort: { createdAt: 1 }
      }
    )
  } else if (CAN_VIEW_OWNER_ORDER) {
    return Meteor.users.find(
      {
        role: 'section',
        $or: [{ _id: userId }, { level1Id: userId }, { level2Id: userId }]
      },
      {
        fields: { role: 1, title: 1, createdAt: 1 },
        sort: { createdAt: 1 }
      }
    )
  } else {
    this.stop()
  }
})
