// pages/bdc/bdc2.js

var page = 0;
var bIndex = 1;
var background = [];

var GetList = function(that) {
  wx.request({
    url: 'http://activity.xxxx.com/wu/word.php',
    data: {
      page: (page + 1)
    },
    success: function(res) {
      // console.log("JSON:" + res.data.data);
      var list = [];
      var cpage = that.data.cpage;
      var background = that.data.background;
      cpage = page + 1;
      console.log(page);
      
      for (var i = 0; i < res.data.data.length; i++) {
        list.push(res.data.data[i]);
        // console.log(res.data.data[i]);
      }

      var bg = {};
      bg["list"] = list;
      bg["id"] = page;
      
      background.push(bg);
      console.log(background);

      that.setData({
        list: list,
        page: cpage,
        background:background
      });
      // page++;
    }
  });
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      cpage:0, 
      background:background
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    for (var i = 0; i < 2; i++) {
      GetList(that);
      page ++;
    }
      
    
    console.log("-----");
    console.log(that.data.list);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }, 
  onSwitch: function() {
    var that = this;
    // bIndex = bIndex + 1;
    // background.push(bIndex);
    // this.setData({
    //   background:background
    // })
    GetList(that);
    page ++;

    console.log(that.data.list);
  }
})