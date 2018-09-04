// template/danxuan/danxuan.js

var items = [{
  "questions": ["-Hi, I'm Peter. Are you new here? I haven't seen you around.",
    "--Hello, Peter. I'm Bob. I just__ on Monday."],
  "answers": ["start",
    "have started",
    "started",
    "had started"]
},
  {
    "questions": ["According to the minister, measures are being taken to introduce more ____ into the education system."],
    "answers": ["difference",
      "adversity",
      "unity",
      "variety"]}];
var vstart;
var vend;
var tihao;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[items[0]],
    tihao: "1",
    total_tihao: "57"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    tihao = options.tihao;
    if (options.tihao == 1) {
      this.setData({
        items: [items[0]],
        tihao: "1",
        total_tihao: "57"
      });
    }
    if (options.tihao == 2) {
      this.setData({
        items: [items[1]],
        tihao: "2",
        total_tihao: "57"
      });
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
  vtouchstart: function (event) {
    vstart = event.touches[0]['pageX'];
  },
  vtouchend: function (event) {
    console.log(event);
    console.log(this);
    vend = event.changedTouches[0]['pageX'];

    if (vstart - vend > 50 ) {
      if (tihao == 2) {
        wx.navigateTo({
          // url: '/pages/analysis/analysis',
          url: '/template/title/title?title_type=1',
        })
      } else {
        wx.navigateTo({
          // url: '/pages/analysis/analysis',
          url: '/template/danxuan/danxuan?tihao=2',
        })
      }
      
    }
  }
})