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
        city: "北京市",
        car: "",
        carImg: "",
        swiperList: ["../../../img/3.png", "../../../img/2.png", "../../../img/3.png"],
        Services: [{
            img: "../../../img/luntai.png",
            text: "换轮胎"
        },
        {
            img: "../../../img/baoyang.png",
            text: "保养"
        },
        {
            img: "../../../img/tiemo.png",
            text: "贴膜"
        },
        {
            img: "../../../img/dujin.png",
            text: "镀晶"
        },
        {
            img: "../../../img/weiz.png",
            text: "查违章"
        }],
        shoppList: [{
            img: "../../../img/10.png",
            desc: "米其林防爆轮胎防炸、仿扎、仿漏气、仿火烧、结实耐用萨克就打开拉萨阿斯达卡省的撒大苏打",
            price: "889.99",
            evaluate: "40"
        }, {
            img: "../../../img/5.png",
            desc: "米其林防爆轮胎防炸、仿扎、仿漏气、仿火烧、结实耐用萨克就打开拉萨阿斯达卡省的撒大苏打",
            price: "1889.99",
            evaluate: "450"
        }, {
            img: "../../../img/11.png",
            desc: "米其林防爆轮胎防炸、仿扎、仿漏气、仿火烧、结实耐用萨克就打开拉萨阿斯达卡省的撒大苏打",
            price: "188.99",
            evaluate: "5"
        }, {
            img: "../../../img/10.png",
            desc: "米其林防爆轮胎防炸、仿扎、仿漏气、仿火烧、结实耐用萨克就打开拉萨阿斯达卡省的撒大苏打",
            price: "1889.99",
            evaluate: "4500"
        }],
        shopList: [{
            img: "../../../img/6.png",
            name: "朝阳区百子湾店",
            value: "3",
            distance: "300m"
        },
        {
            img: "../../../img/6.png",
            name: "改锥车行",
            value: "4",
            distance: "600m"
        },
        {
            img: "../../../img/6.png",
            name: "钳子汽修",
            value: "5",
            distance: "5Km"
        },]
    },
    //选择城市
    goCity: function () {
        wx.navigateTo({
            url: '/pages/index/city/city'
        })
    },
    //商品详情
    itemDetail: function () {
        wx.navigateTo({
            url: '/pages/index/shoppDetail/index'
        })
    },
    //搜索页面
    goSearchPage: function () {
        wx.navigateTo({
            url: '/pages/index/search/index'
        })
    },
    //添加车型
    goCarType:function(){
        wx.navigateTo({
            url: '/pages/index/addCarType/addCarType'
        })
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
    //预览图片，放大预览
    // preview(event) {
    //     let currentUrl = event.currentTarget.dataset.src;
    //     console.log(currentUrl)
    //     wx.previewImage({
    //         current: currentUrl, // 当前显示图片的http链接
    //         urls: this.data.swiperList // 需要预览的图片http链接列表
    //     })
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.stopPullDownRefresh() 
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
        var that = this;
        that.setData({
            city: "北京市" //当前页的一些初始数据，视业务需求而定
        })
        this.onLoad();
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