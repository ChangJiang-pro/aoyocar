// pages/my/serviceLog/serviceLog.js
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
        list:[{
            time:"2020-6-28",
            hous:"14.00",
            status:1,
            text:"交付用户"
        }
        ,{
            time:"2020-6-27",
            hous:"13.00",
            status:0,
            text:"开始更换机油"
        }
        ,{
            time:"2020-6-27",
            hous:"11.00",
            status:0,
            text:"开始检查车况"
        },{
            time:"2020-6-26",
            hous:"17.00",
            status:0,
            text:"车辆到店，开始检测"
        }
    ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(this.data.list.length){
            console.log("==================")
        }
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