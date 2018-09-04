// template/title/title.js
var vstart = 0;
var vend = 0;
var title_type = 0;

var items = [{ "type": "单项填空", "desc": "本题共15小题，每小题1分，共15分。从A、B、C和D四个选项中，选出可以填入空白处的最佳选项。" },
{ "type": "完形填空", "desc": "本题共20小题，每小题1.5分，共30分。阅读下面短文，掌握其大意，然后每题所给的四个选项中（A、B、C和D）中，选出最佳选项。" },
{ "type": "阅读理解", "desc": "本题共15小题，每小题2分，共30分。阅读下列材料，从每题所给的四个选项中（A、B、C和D）中，选出最佳选项。" }]


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
    title_type = options.title_type;
    if (title_type == undefined || title_type == '') {
      title_type = 0;

    }
    this.setData({
      item: items[title_type]
    });
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

    if (vstart - vend > 50) {
      if (title_type == 0) {
        wx.navigateTo({
          url: '/template/wanxing/wanxing?page=0',
        })
      }
      if (title_type == 2) {
        wx.navigateTo({
          url: '/pages/screen/screen?page=0',
        })
      }
      if (title_type == 1) {
        wx.redirectTo({
          // url: '/pages/analysis/analysis',
          // url: '/pages/screen/screen?page=0',
          url: '/template/danxuan/danxuan?page=0',
        })
      }
      
    }
  }
})