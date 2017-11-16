import {Meteor} from 'meteor/meteor'
import Contacts from '/lib/model/contact'

Meteor.methods({
  'contact.update'(value) {
    check(value, Object);

    Contacts.update({_id: value._id}, {
      $set: {
        name: value.name,
        tel: value.tel,
        email: value.email,
        ly: value.ly,
        updatedAt: new Date()
      }
    });
  },
  'contact.remove'(contactId) {
    check(contactId, String);

    Contacts.remove(
      {_id: contactId}
    )
  }
});
