import {Meteor} from 'meteor/meteor'
import Banners from '/lib/model/banner'
// import {HTTP} from 'meteor/http'

Meteor.methods({
  'banner.insert'(values) {
    check(values, Object);

    const vl = {
      imageUrl: values.imageUrl,
      createdAt: new Date()
    };

    Banners.insert(vl);
  },
  'banner.update'(img) {
    check(img, Object);

    Banners.update({_id: img._id}, {
      $set: {
        imageUrl: img.imageUrl,
        updatedAt: new Date()
      }
    });
  },
  'banner.remove'(bannerId) {
    check(bannerId, String);

    Banners.remove(
      {_id: bannerId}
    )
  },
  // 'banner.fetch'() {
  //
  //   const result = HTTP.call('POST', 'http://139.196.107.200:9090/api/view/dashboard?accesstoken=234567&loginname=shunfeng', {
  //     data: {"start": "20171113", "end": "20171113"}
  //   });
  //
  //   console.log(result)
  //   return result;
  // },
});
