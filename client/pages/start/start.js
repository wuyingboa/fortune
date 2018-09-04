// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  },

  start_test: function() {

    wx.navigateTo({
      url: '/pages/start/description'
    })
  },

  start_canvas: function() {
    wx.navigateTo({
      url: '/pages/canvas/hand',
    })
  },

  start_screen: function () {
    wx.navigateTo({
      url: '/pages/screen/screen',
    })
  },
  start_et: function () {
    wx.navigateTo({
      url: '/pages/et/et',
    })
  },
  start_float: function() {
    // wx.redirectTo({
    //   url: '/pages/floatpage/floatpage',
    // })
    wx.navigateTo({
      url: '/pages/floatpage/floatpage',
    })
  },
  start_bdc: function () {
    wx.redirectTo({
      url: '/pages/bdc/bdc',
    })
  },
  start_bdc2: function () {
    wx.navigateTo({
      url: '/pages/bdc/bdc2',
    })
  }
})