var page = 0;
var GetList = function (that) {
  that.setData({
    hidden: false
  });
  wx.request({
    url: 'http://activity.xxxxx.com/wu/index.php',
    data: {
      type: 'searchcate',
      page: page
    },
    success: function (res) {
      console.log("JSON:" + res.data.data);
      var list = that.data.list;
      if (res.data.data[0] == null) {
        that.setData({
          hiddenitem: true
        });
      }
      if (list.length != 1) {//若果结果只有一条数据,就不刷新
        for (var i = 0; i < res.data.data.length; i++) {
          list.push(res.data.data[i]);
        }
        that.setData({
          list: list
        });
        page++;
      }
      that.setData({
        hidden: true
      });
    }
  });
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    titles: '123',
    list: [],
    total: 0,
    hidden: true,
    scrollTop: 0,
    scrollHeight: 0,
    hiddenitem: false,
  },
  btnDetail: function (event) {
    wx.navigateTo({
      url: '../desc/desc?url=' + event.currentTarget.dataset.hi
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this//不要漏了这句，很重要//在回调函数中貌似不能使用this
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    // this.setData({
    //   titles: options.search//获取url参数
    // })
    // console.log(this.data.titles)//获取本页面data数据
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
    var that = this;
    GetList(that);
  },
  bindDownLoad: function () {
    var that = this;
    GetList(that);
  },
  scroll: function (event) {
    this.setData({
      scrollTop: event.detail.scrollTop
    });
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})



var words = []