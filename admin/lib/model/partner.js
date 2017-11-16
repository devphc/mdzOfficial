import { Mongo } from 'meteor/mongo'

const Partners = new Mongo.Collection('partners')

Partners.deny({
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

export default Partners
