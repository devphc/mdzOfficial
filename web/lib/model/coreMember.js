import { Mongo } from 'meteor/mongo'

const CoreMembers = new Mongo.Collection('coreMembers')

CoreMembers.deny({
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

export default CoreMembers
