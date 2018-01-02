
//初始化数据
function tabbarinit() {
 return [
      { "current":0,
        "pagePath": "/pages/index/index",
        "iconPath": "/imgs/home.png",
        "selectedIconPath": "/imgs/home_on.png",
        "text": "主页"
      },
      {
        "current": 0,
        "pagePath": "/pages/news/news",
        "iconPath": "/imgs/message.png",
        "selectedIconPath": "/imgs/message_on.png",
        "text": "资讯"

      },
      {
        "current": 0,
        "pagePath": "/pages/category/category",
        "iconPath": "/imgs/category.png",
        "selectedIconPath": "/imgs/category_on.png",
        "text": "分类"
      },
      {
        "current": 0,
        "pagePath": "/pages/buy/buy",
        "iconPath": "/imgs/buy.png",
        "selectedIconPath": "/imgs/buy_on.png",
        "text": "购物"
      }
    ]

}

/**
 * tabbar主入口
 * @param  {String} bindName 
 * @param  {[type]} id       [表示第几个tabbar，以0开始]
 * @param  {[type]} target   [当前对象]
 */
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}


module.exports = {
  tabbar: tabbarmain
}