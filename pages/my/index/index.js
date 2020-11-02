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
        nickname :"",
        photo :"",
        tell:""
    },

    //个人信息查询
    getinformation: function () {
    var url = "http://localhost:8081/AoyoCustomController/findAoyoCustom?customId=1";
    var that = this;
        wx.request({
            url: url,
            method: "GET",
            header: {"content-type": "application/json"},
            success: function (res) {
                var dataStr=JSON.stringify(res.data);  
                var datas =JSON.parse(dataStr);
                that.setData({
                    nickname:datas.data.nickname,
                    tell: datas.data.mobile,
                    photo:datas.data.photo
                })
                console.log(res)
            }
        })
    },
    // 跳转个人设置页面
    namelist:function(){
        wx.navigateTo({
          url: '/pages/my/userlist/index',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getinformation();//个人信息查询
    },
})