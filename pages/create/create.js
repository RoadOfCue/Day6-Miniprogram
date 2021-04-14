// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    task: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  catchName(val){
    this.setData({
      name: val.detail.value
    })
  },

  catchTask(val){
    this.setData({
      task: val.detail.value
    })
  },

  createTap(){
    if(!this.data.name || !this.data.task){
      wx.showToast({
        title: '内容不能为空',
        icon: 'none',
        duration: 1500
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/invite/invite?name='+ this.data.name + '&task=' + this.data.task
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