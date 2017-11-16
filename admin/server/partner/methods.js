import {Meteor} from 'meteor/meteor'
import Partners from '/lib/model/partner'

Meteor.methods({
  'partner.insert'(values) {
    check(values, Object);

    const vl = {
      imageUrl: values.imageUrl,
      createdAt: new Date()
    };
    Partners.insert(vl);
  },
  'partner.update'(img) {
    check(img, Object);

    Partners.update({_id: img._id}, {
      $set: {
        imageUrl: img.imageUrl,
        updatedAt: new Date()
      }
    });
  },
  'partner.remove'(partnerId) {
    check(partnerId, String);

    Partners.remove(
      {_id: partnerId}
    )
  }
});
