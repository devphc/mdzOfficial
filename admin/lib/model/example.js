import { Mongo } from 'meteor/mongo'

const Examples = new Mongo.Collection('examples')

Examples.deny({
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

export default Examples
