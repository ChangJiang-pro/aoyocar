// pages/classify/goods/index.js
const app = getApp();
Page({
  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuBotton: app.globalData.menuBotton,
    menuHeight: app.globalData.menuHeight,
    tabs:[
      {
        id:0,
        title:"综合",
        isActive:true
      },
      {
        id:1,
        title:"综合1",
        isActive:false
      },
      {
        id:2,
        title:"综合2",
        isActive:false
      }
    ],
    //商品列表数组
    goodList:[]
  },
  // 请求数据
  FindParams: {
    query: '',
    appClassId: '',
    pagenum: 0,
    pagesize: 10
  },

  onLoad: function (options) {
    console.log(options)
    this.FindParams.appClassId = options.appClassId
    console.log(this.FindParams)
    this.getGoodList();
  },
  getGoodList:function(){
    var that = this;
    wx.request({
      url: "http://localhost:8081/AoyoAppClassGoodsController/findAllByAppClassId",
      data:this.FindParams,
      success:(res)=>{
        console.log(res)
        that.setData({
          goodList:res.data.data
        })
      }
    })
  },

  BindTablsItemTtitle:function(e){
    // 获取子组件传来的index
    var index = e.detail
    // 获取tabs数组
    var tabs = this.data.tabs
    console.log(tabs)
    // 遍历，等于传来的index等于tabs里的index, isactive= true
    tabs.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false)
    //赋值
    this.setData({
      tabs
    })
  } 
})