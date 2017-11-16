import {Meteor} from 'meteor/meteor'
import Contacts from '/lib/model/contact'

Meteor.publish('allContacts', function () {
  return Contacts.find();
});
