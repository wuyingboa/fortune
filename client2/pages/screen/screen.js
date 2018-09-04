// pages/screen/screen.js

var window_h = wx.getSystemInfoSync().windowHeight;
var window_w = wx.getSystemInfoSync().windowWidth;
var wposition = (window_w / 2 - 36) + "px";
var qh = window_h / 2;
var ah = window_h / 2;

var vstart;
var vend;
var cpage = 0;
var app = getApp(); 
app.globalData.testPage = cpage;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qh: qh + "px",
    ah: ah + "px",
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    cbtop: (qh - 20) + "px",
    cbleft: wposition, 
    cpage: cpage,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // page = options.page;
    // console.log(page);
    console.log(options);
    console.log(options.page);
    if (options.page != undefined) {
      this.setData({
        cpage: options.page
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
  
  },

  control: function() {
    var y = 20;
    qh = qh - 20;
    ah = ah - 20;
    this.setData({qh:qh + "px", ah: ah + "px"});
  },
  
  mytouchstart: function () {

  },

  vtouchstart: function (event) {
    console.log(event);
    vstart = event.touches[0]['pageX'];
  },
  vtouchend: function (event) {
    console.log(event);
    console.log(this);
    vend = event.changedTouches[0]['pageX'];
    
    var curpage = event.currentTarget.dataset.param;
    

    
    if (vstart - vend > 50 && curpage == 'demo-text-3') {

      cpage = app.globalData.testPage = app.globalData.testPage + 1;
      console.log(cpage);
      wx.navigateTo({
        // url: '/pages/analysis/analysis',
        url: '/pages/screen/screen?page=' + cpage,
      })
    }
  },
  
  mytouchmove: function (event) {
    var y = event.touches[0]['pageY'];
    qh = y;
    ah = window_h - y;
    var cbtop = qh - 20;
    this.setData({ qh: qh + "px", ah: ah + "px", cbtop: cbtop + "px" });
    
  },
  
  mytouchend: function(event) {

  },


  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})