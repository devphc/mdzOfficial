import {Meteor} from 'meteor/meteor'
import CoreMembers from '/lib/model/coreMember'

Meteor.publish('allCoreMembers', function () {
  return CoreMembers.find();
});
