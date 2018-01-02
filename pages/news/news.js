//index.js
//获取应用实例
const app = getApp()
var template = require('../../template/template.js');
Page({
  data: {

  },

  onLoad: function () {
    template.tabbar("tabBar", 1, this)
  },

})
