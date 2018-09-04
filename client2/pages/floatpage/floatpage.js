// pages/floatpage/floatpage.js
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
  
  data: {
    flag: true,
    // word:"hello world",
    top:"-1px",
    left:"-1px",
    top_tri:"-1000px",
    left_tri:"-1000px",
  },

  /**
   * 弹出层函数
   */
  //出现
  show: function (event) {
    var x = event.touches[0]['pageX'];
    var y = event.touches[0]['pageY'];
    var clientH = event.touches[0]['clientY'];
    var left = 10 + "px";
    
    var top = (y +20) +"px";
    var top_tri = y + "px";
    var left_tri = x + "px";
    var flag = false;
    
    var window_h = wx.getSystemInfoSync().windowHeight;
    
    console.log(event.touches[0]['pageX']);
    console.log(event);
    var word = event.target.dataset.param;
    if (!word) {
      flag = true;
    }
    this.setData({ flag: flag, top: top, left: left, top_tri: top_tri, left_tri: left_tri });

  },
  //消失

  hide: function () {

    this.setData({ flag: true })

  },

  favourite: function() {


  },
})