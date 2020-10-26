// pages/shopping/newAddress/newAddress.js
const app = getApp();
var address = require('./city.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuBotton: app.globalData.menuBotton,
        menuHeight: app.globalData.menuHeight,
        region: [],
        text: "",
        address: '', //详细收货地址（四级）
        value: [0, 0, 0], // 地址选择器省市区 暂存 currentIndex
        regionValue: [0, 0, 0], // 地址选择器省市区 最终 currentIndex
        provinces: [], // 一级地址
        citys: [], // 二级地址
        areas: [], // 三级地址
        visible: false,
        isCanConfirm: true, //是否禁止在第一列滚动期间点击确定提交数据
        tag: [{ id: 1, name: "家" }, { id: 2, name: "公司" }, { id: 3, name: "学校" }],
        curNav: 1,
        curIndex: 0
    },
    backlist: function () {
        wx.navigateBack({
            delta: 1
        })
    },
    switch1Change: function (e) {
        console.log(e.detail.value)
    },
    selectD: function (e) {
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
        // 默认联动显示北京
        var id = address.provinces[0].id
        this.setData({
            provinces: address.provinces, // 34省
            citys: address.citys[id], //默认北京市辖区
            areas: address.areas[address.citys[id][0].id]
        })
    },
    closePopUp() {
        this.setData({
            visible: false
        })
    },
    pickAddress() {
        this.setData({
            visible: true,
            value: [...this.data.regionValue]
        })
    },
    // 处理省市县联动逻辑 并保存 value
    cityChange(e) {
        var value = e.detail.value
        let {
            provinces,
            citys
        } = this.data
        var provinceNum = value[0]
        var cityNum = value[1]
        var areaNum = value[2]

        if (this.data.value[0] !== provinceNum) {
            var id = provinces[provinceNum].id
            this.setData({
                value: [provinceNum, 0, 0],
                citys: address.citys[id],
                areas: address.areas[address.citys[id][0].id]
            })
        } else if (this.data.value[1] !== cityNum) {
            var id = citys[cityNum].id
            this.setData({
                value: [provinceNum, cityNum, 0],
                areas: address.areas[citys[cityNum].id]
            })
        } else {
            this.setData({
                value: [provinceNum, cityNum, areaNum]
            })
        }
    },
    // 点击地区选择取消按钮
    cityCancel(e) {
        var id = address.provinces[0].id
        this.setData({
            citys: this.data.lastCitys || address.citys[id], //默认北京市辖区,
            areas: this.data.lastAreas || address.areas[address.citys[id][0].id],
            value: [...this.data.regionValue],
            visible: false
        })
    },
    // 提交时由序号获取省市区id
    getRegionId(type) {
        let value = this.data.regionValue
        let provinceId = address.provinces[value[0]].id
        let townId = address.citys[provinceId][value[1]].id
        let areaId = ''
        if (address.areas[townId][value[2]].id) {
            areaId = address.areas[townId][value[2]].id
        } else {
            areaId = 0
        }

        if (type === 'provinceId') {
            return provinceId
        } else if (type === 'townId') {
            return townId
        } else {
            return areaId
        }
    },
    chooseStart(e) {
        this.setData({
            isCanConfirm: false
        })
    },
    chooseEnd(e) {
        this.setData({
            isCanConfirm: true
        })
    },
    // 点击地区选择确定按钮
    citySure(e) {
        if (this.data.isCanConfirm) {
            var value = this.data.value
            this.setData({
                visible: false
            })
            // 将选择的城市信息显示到输入框
            try {
                var region = (this.data.provinces[value[0]].name || '') + (this.data.citys[value[1]].name || '')
                if (this.data.areas.length > 0) {
                    region = region + this.data.areas[value[2]].name || ''
                } else {
                    this.data.value[2] = 0
                }
            } catch (error) {
                console.log('adress select something error')
            }

            this.setData({
                region: region,
                lastCitys: this.data.citys,
                lastAreas: this.data.areas,
                regionValue: [...this.data.value]
            }, () => {
            })
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