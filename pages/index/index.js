
const app = getApp()
Page({
  data: {

  },
  onLoad: function () {
    app.globalData.template.tabbar("tabBar", 0, this)//0表示第一个tabbar  
  },
})
