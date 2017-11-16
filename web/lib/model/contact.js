import { Mongo } from 'meteor/mongo'

const Contacts = new Mongo.Collection('contacts')

Contacts.deny({
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

export default Contacts
