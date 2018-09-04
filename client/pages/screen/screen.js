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

    questions: ['Nobody really knows how big Lagos is. What\'s indisputable is that it\'s growing very quickly. Between now and 2050, the urban population of Africa could triple. Yet cities in sub-Saharan Africa are not getting richer the way cities in the rest of the world have. Most urban Africans live in slums （贫民窟）; migrants are often not much better off than they were in the countryside. Why?',
'The immediate problem is poverty.Most of Africa is urbanising at a lower level of income than other regions of the world did.That means there\'s little money around for investment that would make cities liveable and more productive. Without upgrades and new capacity, bridges, roads and power systems are unable to cope with expanding populations. With the exception of South Africa, the only light rail metro system in sub-Saharan Africa is in Addis Ababa, Ethiopia. Traffic jam leads to expense and unpredictability, things that keep investors away.',
'In other parts of the world, increasing agricultural productivity and industrialisation went together.More productive farmers meant there was a surplus that could feed cities; in turn, that created a pool of labour for factories.But African cities are different.They are too often built around consuming natural resources.Government is concentrated in capitals, so is the money.Most urban Africans work for a small minority of the rich, who tend to be involved in either cronyish （有裙带关系的） businesses or politics. Since African agriculture is still broadly unproductive, food is imported, consuming a portion of revenue.',
'So what can be done? Though African countries are poor, not all African cities are. In Lagos, foreign oil workers can pay as much as 65,000 dollars per year in rent for a modest apartment in a safe part of town.If that income were better taxed, it might provide the revenue for better infrastructure. If city leaders were more accountable to their residents, they might favour projects designed to help them more. Yet even as new roads are built, new people arrive. When a city\'s population grows by 5% a year, it is difficult to keep up.'],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      background:[
        { "question": "46.What do we learn from the passage about cities in sub-Saharan Africa?", "options": ["A.They have more slums than other cities in the world.","B.They are growing fast without becoming richer.",
          "C.They are as modernised as many cities elsewhere.",
"D.They attract migrants who want to be better off."],
          "label": 'demo-text-1'
},
        { "question": "47.What does the author imply about urbanisation in other parts of the world?",
          "options": ["A.It benefited from the contribution of immigrants.",
"B.It started when people's income was relatively high.",
"C.It benefited from the accelerated rise in productivity.",
              "D.It started with the improvement of peopled livelihood."],
          "label": 'demo-text-2'},
        {
          "question": "48.What do we learn from the passage about cities in sub-Saharan Africa?", "options": ["A.They have more slums than other cities in the world.", "B.They are growing fast without becoming richer.",
            "C.They are as modernised as many cities elsewhere.",
            "D.They attract migrants who want to be better off."],
          "label": 'demo-text-2'
        },
        {
          "question": "49.What does the author imply about urbanisation in other parts of the world?",
          "options": ["A.It benefited from the contribution of immigrants.",
            "B.It started when people's income was relatively high.",
            "C.It benefited from the accelerated rise in productivity.",
            "D.It started with the improvement of peopled livelihood."],
          "label": 'demo-text-3'
        },
      ]
    });
    if (options.page == 1) {
      this.setData({
        questions:["我就是我， 就是这么简单",
          "The Cambridge Science Festival (CSF) is pleased to inform you of the sixth annual Curiosity Challenge.The challenge invites , even dares school students between the ages of 5 and 14 to create artwork or a piece of writing that shows their curiosity how it inspires them to explore their world."
        ]
      });
    }
    
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
    if (vstart - vend > 50 && (curpage == 'demo-text-3' || curpage == 'question-text')) {

      cpage = app.globalData.testPage = app.globalData.testPage + 1;
      console.log(cpage);
      wx.redirectTo({
        // url: '/pages/screen/screen?page=' + cpage,
        url: '/pages/result/result',
      })
      
    }

    if (vend - vstart > 50 && (curpage == 'demo-text-1' || curpage == 'question-text')) {
      cpage = app.globalData.testPage = app.globalData.testPage - 1;
      console.log(cpage);
      // wx.navigateBack();
      wx.redirectTo({
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