// pages/shop/shopCommodity/shopCommodity.js
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
        cateItems: [
            {
                cate_id: 1,
                cate_name: '推荐',
            },
            {
                cate_id: 2,
                cate_name: ' 新品',
            },
            {
                cate_id: 3,
                cate_name: '服务'
            }
        ],
        curNav: 1,
        curIndex: 0
    },
    switchRightTab: function (e) {
        let id = e.target.dataset.id, index = e.target.dataset.index;
        this.setData({
            curNav: id,
            curIndex: index
        })
    },
    // 返回首页
    backHome: function () {
        wx.navigateBack({
            delta: 1
        })
    },
    goShopDetail:function(){
        wx.navigateTo({
            url: '/pages/shop/shopDetail/shopDetail'
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