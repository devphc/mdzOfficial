import { Mongo } from 'meteor/mongo'

const Banners = new Mongo.Collection('banners')

Banners.deny({
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

export default Banners
