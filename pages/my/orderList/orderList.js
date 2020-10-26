// pages/my/orderList/orderList.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuBotton: app.globalData.menuBotton,
        menuHeight: app.globalData.menuHeight,
        active: 0,
        list:[{
            shopName:"扳手维修蔡瀛州店",
            type:"待支付",
            shopimg:"../../../img/carL.png",
            shoppName:"米其林轮胎Michelin汽车轮胎2055R16 91W",
            shoppType:"19款 13.3寸 普通款 共1件",
            shoppMoney:"250",
            shoppNumber:"1"
        },
        {
            shopName:"扳手维修蔡瀛州店",
            type:"进行中",
            shopimg:"../../../img/carL.png",
            shoppName:"米其林轮胎Michelin汽车轮胎2055R16 91W",
            shoppType:"20款 19寸 普通款 共2件",
            shoppMoney:"750",
            shoppNumber:"2"
        },
        {
            shopName:"扳手维修蔡瀛州店",
            type:"待评价",
            shopimg:"../../../img/carL.png",
            shoppName:"米其林轮胎Michelin汽车轮胎2055R16 91W",
            shoppType:"19款 13.3寸 普通款 共4件",
            shoppMoney:"350",
            shoppNumber:"4"
        },
        {
            shopName:"扳手维修蔡瀛州店",
            type:"已完成",
            shopimg:"../../../img/carL.png",
            shoppName:"米其林轮胎Michelin汽车轮胎2055R16 91W",
            shoppType:"16款 17寸 普通款 共4件",
            shoppMoney:"100",
            shoppNumber:"4"
        }]
    },
    onChange(event) {
        console.log(event.detail.name)
    },
    // 去评价
    goevaluate:function(){
        wx.navigateTo({
            url: '/pages/my/evaluate/evaluate'
        })
    },
    backMy: function () {
        wx.navigateBack({
            delta: 1
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})