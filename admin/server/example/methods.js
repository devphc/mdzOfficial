import {Meteor} from 'meteor/meteor'
import Examples from '/lib/model/example'

Meteor.methods({
  'example.insert'(values) {
    check(values, Object);

    const vl = {
      title: values.title,
      imageUrl: values.imageUrl,
      createdAt: new Date()
    };
    Examples.insert(vl);
  },
  'example.update'(img) {
    check(img, Object);

    Examples.update({_id: img._id}, {
      $set: {
        title: img.title,
        imageUrl: img.imageUrl,
        updatedAt: new Date()
      }
    });
  },
  'example.remove'(exampleId) {
    check(exampleId, String);

    Examples.remove(
      {_id: exampleId}
    )
  }
});
