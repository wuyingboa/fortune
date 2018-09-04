// template/wanxing/wanxing.js
var md5 = require('../../common/md5.js') 
var content_title;
var paras = [];
var paragraphs = ["Life is full of confusing __ disordering Particular time,a particular location,Do the arranged __ of ten million time in the brain,Step by step ,the life is hard to avoid delicacy and stiffness No enthusiasm forever,No unexpected happening of surprising and pleasing So,only silently ask myself in mind Next happiness,when will come?", "Dark __ ,just light each other.The responsibility that you and my shoulders take together,the such as one dust covers up.Afraid only afraid the light is suddenly put __ in theendless dark night and Countless loneliness", "Always insisting.Use iron scoop is too cold; Use porcelain scoop is too weak; A wood scoop,engraved veins safely,engraved sky’s wasteland and glebe’s old.Just as __ born in the years,not insolent,the every act and move __ quietly"];

function split_word() {

  paras = [];
  for (var i = 0; i < paragraphs.length; ++i) {
    var n = paragraphs[i].split(" ");
    paras.push(n);
  }
}

var win_height = wx.getSystemInfoSync().windowHeight;
var cHeight = win_height - 160;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content_title:"The Homeless Hero",
    flag:true,
    content_height: win_height + "px",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    split_word();
    this.setData({
      paras:paras
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
  /**
 * 弹出层函数
 */
  //出现
  show: function (event) {
    var x = event.touches[0]['pageX'];
    var y = event.touches[0]['pageY'];
    var clientH = event.touches[0]['clientY'];
    var left = 10 + "px";

    var top = (y + 20) + "px";
    var top_tri = y + "px";
    var left_tri = x + "px";
    var flag = false;

    var window_h = wx.getSystemInfoSync().windowHeight;

    console.log(event.touches[0]['pageX']);
    console.log(event);
    var word = event.target.dataset.param;
    var that = this;
    this.getdata(word, that);
    if (!word) {
      flag = true;
    }
    this.setData({ flag: flag, top: top, left: left, top_tri: top_tri, left_tri: left_tri , showModalStatus: false,content_height: win_height + "px"});

  },
  //消失

  hide: function () {

    this.setData({ flag: true })

  },

  favourite: function () {


  },

  

  toshow: function (event) {

    var toViewId = event.target.id;
    // var scrollTop = 70;
    this.setData({
      flag:true,
      content_height: cHeight + "px",
      
    })
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)

    this.setData({
      toView: toViewId,
      // scrollTop: scrollTop,      
    })
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  getdata: function(q, that) {
    if (q == "undefined" || q == undefined) {
      return;
    }
    console.log(q);
    q = q.trim();
    var timestamp = parseInt((new Date()).valueOf() / 1000);
    var auth_user = "key_weixin_dushu";
    var auth_key = "ifanyiwebcweicsrare";
    var client = 1;
    var uuid = "20180729xiaoxxu";
    var sign = md5.hexMD5(client + uuid + timestamp + auth_user + auth_key + q);
    sign = sign.substr(0, 16); 
    
    var url = 'https://ifanyi.xxxx.com/index.php?c=trans&client=' + client + '&uuid=' + uuid + '&timestamp=' + timestamp + '&auth_user=' + auth_user + "&sign=" + sign + "&from=en&to=zh&q=" + q;
    console.log(url);
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          mean:res.data.out
        })
      }
    })
  }
})