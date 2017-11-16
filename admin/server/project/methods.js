import {Meteor} from 'meteor/meteor'
import Projects from '/lib/model/project'

Meteor.methods({
  'project.insert'(values) {
    check(values, Object);

    const vl = {
      title: values.title,
      imageUrl: values.imageUrl,
      createdAt: new Date()
    };
    Projects.insert(vl);
  },
  'project.update'(img) {
    check(img, Object);

    Projects.update({_id: img._id}, {
      $set: {
        title: img.title,
        imageUrl: img.imageUrl,
        updatedAt: new Date()
      }
    });
  },
  'project.remove'(projectId) {
    check(projectId, String);

    Projects.remove(
      {_id: projectId}
    )
  }
});
