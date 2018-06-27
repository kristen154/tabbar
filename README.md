# tabbar
WeChat small program tabbar  
1、在template.js按照对应的key配置对应数据，其中current表示是否 选择当前的tab，直接配置为0即可  
2、在对应的js引用template文件夹中的templalte.js------>var template = require('../../template/template.js');  
3、然后在onLoad生命周期中注册对应的tabbar-------> template.tabbar("tabBar", 0, this)//0表示第一个tabbar,1表示第二个tabbar如此类推  
4、在对应的wxml中引入template.wxml------><import src="../../template/template.wxml"/>  
5、使用模板-------------><template is="tabBar" data="{{tabBar:bindData.tabBar}}"/>  
  
注意：第5点data属性中格式必定为该格式，原因如下：   
1、与template.wxml中的绑定的tabBar对应   
<block wx:for="{{tabBar}}" wx:for-item="item" wx:key="tabBar">......</block>   
2、template.js中使用that.setData({ bindData });表明bindData作为key   
3、index.js或其他页面js使用template.tabbar("tabBar", 0, this)来使用注册template,其中的"tabBar"对应bindData.tabBar中tabBar  
博客链接：https://blog.csdn.net/qq_29729735/article/details/78933721
 
 
