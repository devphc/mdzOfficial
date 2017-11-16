import {Meteor} from 'meteor/meteor'
import Examples from '../../lib/model/example'

Meteor.publish('allExamples', function () {
  return Examples.find();
});