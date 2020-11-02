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
        // 左边菜单
        leftMenuList: [],
        //右边菜单
        rightContentList: [],
        currentIndex: 0,
        scrollTop: 0
    },
    // 所有数据
    catesData: [],
    getclassify:function(){
        var url = "http://localhost:8081/AoyoAppClassController/findAoyoAppClass";
        var that = this;
        wx.request({
            url: url,
            method: "GET",
            header: {"content-type": "application/json"},
            success: (res) => {
                console.log(res)
                this.catesData = res.data.data;
                this.setData({
                    //获取左边列表的数据
                    leftMenuList: this.catesData.map(item => item.appClassName),
                    //获取右边内容的数据
                    rightContentList: this.catesData[0].children
                });
            }
        })
    },
    //左边菜单的点击事件
    handleItemTap(e) {
        //1.获取被点击标题的索引
        let index = e.currentTarget.dataset.index;
        console.log(index)
        this.setData({
            //2.给currentIndex赋值
            currentIndex: index,
            //3.根据不同的索引渲染右边的内容
            rightContentList: this.catesData[index].children,
            //4.点击列表菜单后，让右边内容进行置顶
            scrollTop: 0
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getclassify();
    }
})