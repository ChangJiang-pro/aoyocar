// commpents/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      //tabs点击index
      var index = e.currentTarget.dataset.index
      console.log(index)
      // 触发父组件的事件，自定义名， 属性
      this.triggerEvent("tablsItemTtitle",index)
    }
  }
})
