import {Meteor} from 'meteor/meteor'
import CoreMembers from '/lib/model/coreMember'

Meteor.methods({
  'coreMember.insert'(values) {
    check(values, Object);

    const vl = {
      name: values.name,
      job: values.job,
      summray: values.summray,
      imageUrl: values.imageUrl,
      createdAt: new Date()
    };
    CoreMembers.insert(vl);
  },
  'coreMember.update'(values) {
    check(values, Object);

    // const swTF = values.active ? '已参与' : '未参与';

    CoreMembers.update({_id: values._id}, {
      $set: {
        name: values.name,
        job: values.job,
        summray: values.summray,
        imageUrl: values.imageUrl,
        updatedAt: new Date()
      }
    });
  },
  'coreMember.remove'(coreMemberId) {
    check(coreMemberId, String);

    CoreMembers.remove(
      {_id: coreMemberId}
    )
  }
});
