import {Meteor} from 'meteor/meteor'
import Partners from '../../lib/model/partner'

Meteor.publish('allPartners', function () {
  return Partners.find();
});