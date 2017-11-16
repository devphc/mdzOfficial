import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import Contacts from '../../lib/model/contact'

Meteor.methods({
  'contact.insert'(values) {
    check(values, Object);

    const {name, tel, email, ly} = values;
    const vl = {
      name,
      tel,
      email,
      ly,
      key: Date.parse(new Date()),
      createdAt: new Date()
    };
    Contacts.insert(vl);
  }
});
