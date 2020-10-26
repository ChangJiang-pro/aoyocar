// pages/shopping/shopping.js
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
        // 商品列表
        shoppList: [{
            shoppName: "扳手维修蔡瀛州店",
            shoppSelected: false,
            children: [{
                img: "../../../img/carL.png",
                name: "米其林轮胎Michelin汽车轮胎2055R16 91W 皓月四代",
                price: 520,
                selected: false,
                num: 2
            }, {
                img: "../../../img/carL.png",
                name: "米其林轮胎Michelin汽车轮胎2055R16 91W 皓月五代",
                price: 200,
                selected: false,
                num: 1
            }, {
                img: "../../../img/carL.png",
                name: "米其林轮胎Michelin汽车轮胎2055R16 91W 皓月五代",
                price: 200,
                selected: false,
                num: 1
            }]
        }, {
            shoppName: "扳手维修百子湾店",
            shoppSelected: false,
            children: [{
                img: "../../../img/carL.png",
                name: "马牌轮胎Michelin汽车轮胎2055R16 91W 皓月四代",
                price: 300,
                selected: false,
                num: 3
            },]
        }],
        totalAmount: 0,//总共金额
        isshow: false,//控制店铺是否选中状态
        itemIsShow: false,//控制店铺商品是否选中状态
        shoppSum: 0
    },
    onClose(event) {
        const { position, instance } = event.detail;
        switch (position) {
            case 'left':
            case 'cell':
                instance.close();
                break;
            case 'right':
                wx.showModal({
                    content: '确定要删除吗',
                    success(res) {
                        if (res.confirm) {
                            console.log('用户点击确定')
                        } else if (res.cancel) {
                            console.log('用户点击取消')
                        }
                    }
                })
                break;
        }
    },
    //选中事件
    selectList: function (e) {
        let sum = 0;
        let allSum = 0;
        let Findex = e.currentTarget.dataset.findex;//父元素下标
        let Sindex = e.currentTarget.dataset.index;//子元素下标
        let carts = this.data.shoppList;
        let arr = carts[Findex].children;
        let selected = arr[Sindex].selected;
        arr[Sindex].selected = !selected;
        arr.forEach((item, index) => {
            if (item.selected == true) {
                sum++
            }
        })
        //判断商铺是否选中
        if (sum >= arr.length) {
            carts[Findex].shoppSelected = true;
        } else {
            carts[Findex].shoppSelected = false;
        }
        //商铺全选判断全选按钮时候选中
        carts.forEach((item, index) => {
            if (item.shoppSelected == true) {
                allSum++
            }
        })
        if (allSum >= carts.length) {
            this.setData({
                isshow: true
            });
        } else {
            this.setData({
                isshow: false
            });
        }
        this.setData({
            shoppList: carts
        });
        this.getTotalPrice();
    },
    // 计算金额
    getTotalPrice() {
        let carts = this.data.shoppList;                  // 获取购物车列表
        let total = 0;
        let sum = 0;
        carts.forEach((item) => {
            item.children.forEach((item) => {
                if (item.selected) {
                    total += item.num * item.price;
                    sum += item.num;
                }
            })
        })
        this.setData({                                // 最后赋值到data中渲染到页面
            totalAmount: total.toFixed(2),
            shoppSum: sum
        });
    },
    //全选 全不选
    checkAll: function () {
        let that = this;
        let selectAllStatus = that.data.isshow;    // 是否全选状态
        selectAllStatus = !selectAllStatus;
        let carts = that.data.shoppList;
        carts.forEach((item, index) => {
            item.shoppSelected = selectAllStatus;
            item.children.forEach((item, index) => {
                item.selected = selectAllStatus;
            })
        })
        that.setData({
            isshow: selectAllStatus,
            shoppList: carts
        })
        this.getTotalPrice()
    },
    //店铺全选 全不选
    dianAll: function (e) {
        let sum = 0;
        let allSum = 0;
        let index = e.currentTarget.dataset.index;
        let carts = this.data.shoppList;
        let arr = carts[index];
        arr.shoppSelected = !arr.shoppSelected;
        carts.forEach((item, index) => {
            if (item.shoppSelected == true) {
                allSum++;
            }
        })
        if (allSum >= carts.length) {
            this.setData({
                isshow: true
            })
        } else {
            this.setData({
                isshow: false
            })
        }
        arr.children.forEach((item, index) => {
            if (item.selected == false) {
                sum++;
            }
            item.selected = !item.selected;
        })
        if (sum >= arr.children.length) {
            arr.shoppSelected = true;
        } else {
            arr.shoppSelected = false;
        }
        this.setData({
            shoppList: carts,
        })
        this.getTotalPrice();
    },
    // 增加数量
    addCount: function (e) {
        let Findex = e.currentTarget.dataset.findex;//父元素下标
        let Sindex = e.currentTarget.dataset.index;//子元素下标
        let carts = this.data.shoppList;
        let arr = carts[Findex].children;
        let num = arr[Sindex].num;
        num = num + 1;
        arr[Sindex].num = num;
        this.setData({
            shoppList: carts
        });
        this.getTotalPrice();
    },
    //减少数量
    minusCount: function (e) {
        let Findex = e.currentTarget.dataset.findex;//父元素下标
        let Sindex = e.currentTarget.dataset.index;//子元素下标
        let carts = this.data.shoppList;
        let arr = carts[Findex].children;
        let num = arr[Sindex].num;
        num = num - 1;
        arr[Sindex].num = num;
        this.setData({
            shoppList: carts
        });
        this.getTotalPrice();
    },
    //结算
    goShoppOrder:function(){
        wx.navigateTo({
            url: '/pages/shopping/shoppOrder/shoppOrder'
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