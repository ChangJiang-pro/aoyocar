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
        swiperList: ["../../../img/3.png", "../../../img/2.png", "../../../img/3.png"],
        shoppType: "19款 17英寸 普通款",
        show: false,
        commentList: [{
            img: "../../../img/7.png",
            name: "小女孩",
            carType: "福特-福克斯",
            date: "2010-10-01",
            value: "3",
            content: "简直是太好了这个轮胎  大牌就是大牌,简直是太好了这个轮胎  大牌就是大牌,简直是太好了这个轮胎  大牌就是大牌,大牌就是大牌,大牌就是大牌,大牌就是大牌",
            commentIMG: ["../../../img/5.png", "../../../img/5.png"],
            shoppType: "19款17英寸 普通款",
            shoppNumber: "2"
        }],
        active: 0,
        specificationL:[],//规格参数左
        specificationR:[]//规格参数右
    },
    // 返回首页
    backHome: function () {
        const pages = getCurrentPages();
        if (pages.length === 2) {
            wx.navigateBack({
                delta: 1
            });
        } else if (pages.length === 1) {
            wx.reLaunch({
                url: '/pages/index/index/index',
            })
        } else {
            wx.navigateBack({
                delta: 1
            });
        }
    },
    //拨打客服电话
    callPhone: function () {
        wx.showModal({
            title: '拨打电话',
            content: '400-000-1230',
            success(res) {
                if (res.confirm) {
                    wx.makePhoneCall({
                        phoneNumber: '400-000-1230'
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    //查看更多评论
    lookMoreComment: function () {
        wx.navigateTo({
            url: '/pages/index/moreComment/index'
        })
    },
    //加入购物车
    successShoppCar: function () {
        wx.showToast({
            title: '已添加至购物车',
            icon: 'success',
            duration: 1500
        })
    },
    isshow: function () {
        this.setData({
            show: true
        })
    },
    onClose() {
        this.setData({ show: false });
    },
    onChange(event) {

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
        return {
            success: (res) => {
                console.log("转发成功", res);
            },
            fail: (res) => {
                console.log("转发失败", res);
            }
        }
    }
})