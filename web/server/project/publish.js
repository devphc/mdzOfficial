import {Meteor} from 'meteor/meteor'
import Projects from '../../lib/model/project'

Meteor.publish('allProjects', function () {
  return Projects.find({}, {});
});