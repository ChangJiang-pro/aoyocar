const app = getApp();
// pages/index/search/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuBotton: app.globalData.menuBotton,
        menuHeight: app.globalData.menuHeight,
        searchHistoryList: ["机油", "轮胎", "空调", "底盘装甲", "洗车", "电瓶", "刹车片"],
        searchHotList: ["机油", "轮胎", "空调", "底盘装甲", "洗车", "电瓶", "刹车片", "刹车盘", "贴膜", "雨刷", "行车记录仪", "碳纤维"],
        isshow: true
    },
    backHome: function () {
        wx.navigateBack({
            delta: 1
        })
    },
    //清空搜索历史
    delsteHisSearch: function () {
        var _this = this;
        wx.showModal({
            title: '提示',
            content: '确定删除搜索历史吗',
            success(res) {
                if (res.confirm) {
                    _this.setData({
                        searchHistoryList: [],
                        isshow: false
                    })
                } 
            }
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