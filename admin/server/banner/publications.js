import {Meteor} from 'meteor/meteor'
import Banners from '/lib/model/banner'

Meteor.publish('allBanners', function () {
  return Banners.find();
});
