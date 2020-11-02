// pages/index/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    imgUrls: [],
    //活动数组
    Services:[],
    indicatorDots: true, //小点，根据图的数量自动增加小点
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 1000, //滑动时间
  },

 //首页type
 indexType: function () {
   var that= this;
  wx.request({
      url: "http://localhost:8081/AoyoGroupFeaturedServicesController/findAllAoyoGroupFeaturedServices",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res.data.data)
        that.setData({
          Services:res.data.data
        })
      }
  })
},

//首页type功能
getTypePage(e) {
  var id = e.currentTarget.dataset.id;
  var path = e.currentTarget.dataset.path;
  console.log(id)
  console.log(path)
  if (id == 5) {
      wx.navigateTo({
          url: path
      })
  }
  if (id == 4) {
      wx.navigateTo({
          url: path
      })
  }
  if (id == 3) {
      wx.navigateTo({
          url: path

      })
  }
  if (id == 2) {
      wx.navigateTo({
          url: path
      })
  }
  if (id == 1) {
      wx.navigateTo({
          url: path
      })
  }
},

  //轮播图片
  text: function() {
    var that = this;//这部必须有，非常重要
    wx.request( {//从后端获取数据
      url: 'http://localhost:8081/AoyoCustomController/findAoyoCustomURL',//后端传数据的路径
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        that.setData({
          imgUrls:res.data.data
      })//这里的imgUrls和<wxml>的imgUrls是同一个变量，就是将从后端获取到的数据赋值给imgUrls，传到前面使用
        wx.hideLoading();//隐藏加载
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.text();
    this.indexType()
  }
})