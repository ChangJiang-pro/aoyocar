// pages/classify/classify.js
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
                cate_name: '轮毂',
            },
            {
                cate_id: 2,
                cate_name: ' 轮胎',
                children:["普利司通","米其林轮胎","马牌轮胎","昆仑轮胎","实心轮胎"]
            },
            {
                cate_id: 3,
                cate_name: '防滑链'
            },
            {
                cate_id: 4,
                cate_name: '雨刷器'
            },
            {
                cate_id: 5,
                cate_name: '机油'
            },
            {
                cate_id: 6,
                cate_name: '滤清器'
            },
            {
                cate_id: 7,
                cate_name: '空调'
            },
            {
                cate_id: 8,
                cate_name: '玻璃'
            },
            {
                cate_id: 9,
                cate_name: '车漆'
            },
            {
                cate_id: 10,
                cate_name: '灯'
            }
        ],
        curNav: 1,
        curIndex: 0
    },
    //左侧导航栏索引
    switchRightTab: function (e) {
        let id = e.target.dataset.id, index = e.target.dataset.index;
        this.setData({
            curNav: id,
            curIndex: index
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