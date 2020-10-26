const app = getApp();
// pages/index/moreComment/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuBotton: app.globalData.menuBotton,
        menuHeight: app.globalData.menuHeight,
        commentList: [{
            img: "../../../img/7.png",
            name: "小女孩",
            carType: "福特-福克斯",
            date: "2010-10-01",
            value: "3",
            content: "简直是太好了这个轮胎  大牌就是大牌,简直是太好了这个轮胎  大牌就是大牌,简直是太好了这个轮胎  大牌就是大牌,大牌就是大牌,大牌就是大牌,大牌就是大牌",
            commentIMG: ["../../../img/5.png", "../../../img/5.png", "../../../img/5.png"],
            shoppType: "19款17英寸 普通款",
            shoppNumber: "2"
        }, {
            img: "../../../img/8.png",
            name: "小男孩",
            carType: "奔驰-A180L",
            date: "2017-08-01",
            value: "5",
            content: "不错不错  值得购买",
            commentIMG: ["../../../img/5.png"],
            shoppType: "20款19英寸 精英款",
            shoppNumber: "4"
        }, {
            img: "../../../img/7.png",
            name: "小女孩",
            carType: "奥迪-A4L",
            date: "2012-10-01",
            value: "4",
            content: "简直是太好了这个轮胎  大牌就是大牌,简直是太好了这个轮胎  大牌就是大牌,简直是太好了这个轮胎  大牌就是大牌,大牌就是大牌,大牌就是大牌,大牌就是大牌",
            commentIMG: ["../../../img/5.png", "../../../img/5.png", "../../../img/5.png"],
            shoppType: "19款19英寸 领先款",
            shoppNumber: "2"
        }, {
            img: "../../../img/8.png",
            name: "小男孩",
            carType: "宝马-325Li",
            date: "2019-08-01",
            value: "1",
            content: "质量不行，寄到家就坏了",
            commentIMG: ["../../../img/5.png", "../../../img/5.png"],
            shoppType: "20款19英寸 精英款",
            shoppNumber: "1"
        }]
    },
    backshoppDetail: function () {
        wx.navigateBack({
            delta: 1
        })
    },
    //返回首页
    backHomeIndex: function () {
        wx.reLaunch({
            url: '/pages/index/index/index'
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