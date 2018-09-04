// pages/result/result.js

var data = {
  '1': [2, 10, 19, 28, 37, 46, 55, 65, 73, 82, 91, 100, 110, 118, 127, 136, 147, 154, 163, 172],
  '2': [1, 11, 21, 29, 38, 47, 56, 64, 74, 83, 92, 101, 109, 119, 128, 137, 145, 155, 164, 173],
  '3': [3, 12, 20, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 120, 129, 138, 146, 156, 166, 174],
  '4': [4, 14, 22, 31, 40, 50, 58, 67, 76, 85, 94, 103, 112, 121, 130, 139, 148, 157, 165, 176],
  '5': [5, 13, 23, 32, 41, 51, 59, 68, 77, 86, 95, 104, 113, 123, 131, 140, 149, 159, 167, 175],
  '6': [6, 15, 24, 34, 42, 49, 60, 69, 78, 87, 96, 105, 114, 122, 132, 141, 150, 158, 168, 178],
  '7': [7, 16, 25, 33, 43, 52, 61, 70, 79, 88, 97, 106, 115, 124, 133, 142, 151, 160, 169, 177],
  '8': [9, 17, 26, 35, 44, 53, 62, 71, 81, 89, 99, 107, 116, 125, 134, 144, 152, 161, 171, 179],
  '9': [8, 18, 27, 36, 45, 54, 63, 72, 80, 90, 98, 108, 117, 126, 135, 143, 153, 162, 170, 180]
};

var ans = {
  '1': '纪律（完美型）',
  '2': '体谅（全爱型）',
  '3': '成就（成就型）',
  '4': '独特（艺术型）',
  '5': '思维（智慧型）',
  '6': '审慎（忠诚型）',
  '7': '自由（活泼型）',
  '8': '统率（领袖型）',
  '9': '和谐（和平型）'
}



//数组是否包含元素
Array.prototype.contains = function (element) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == element) {
      return true;
    }
  }
  return false;
}

function analysis(res) {
  var sum = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0};
  //对答题结果进行分析，对每一个题进行结果判断
  for (var key in res) {
    //判断每一道题是在哪个类别中，k是类别
    for (var k in data) {
      if (data[k].contains(key)) {
        sum[k] ++;
      }
    }
  }
  console.log('k:' + JSON.stringify(sum));

  return sum;
}

/**
function dictSort(dict) {

  var ar = {};
  var keys = [];
  for (var key in dict) {
    
    if (ar[dict[key]]  == null) {
      ar[dict[key]] = new Array();
      keys.push(dict[key]);
    }
    ar[dict[key]].push( key );
  }

  keys.sort().reverse()
  console.log(keys);
  console.log("sort")
  for (var i = 0; i < keys.length; i++) {
    console.log("--" + keys[i] + ":" + ar[keys[i]]);
  }

}
 */

function analysisRes(res) {
  
  var max = 0;
  var min = 180;
  var con = {};
  var ares = res;
  for (var key in  res) {
    if (res[key] > max) {
      max = res[key];
    } 
    if (res[key] < min) {
      min = res[key];
    }
  }
  var middle = (max + min) / 2.0;
  var low = (min + middle) / 2.0;
  var high = (max + middle) / 2.0;

  for (var key in ares) {
    if (ares[key] >= min && ares[key] < low) {
      if (con['lowest'] == null) {
        con['lowest'] = new Array()
      }
      con['lowest'].push(key);
    } else if (ares[key] >= low && ares[key] < middle) {
      if (con['lower'] == null) {
        con['lower'] = new Array()
      }
      con['lower'].push(key);
    } else if (ares[key] >= middle && ares[key] < high) {
      if (con['higher'] == null) {
        con['higher'] = new Array()
      }
      con['higher'].push(key);
    } else if (ares[key] >= high && ares[key] <= max) {
      if (con['highest'] == null) {
        con['highest'] = new Array()
      }
      con['highest'].push(key);
    }
  }


  return con;
  // for (var key in con) {
  //   console.log(key);
  //   for (var i = 0; i < con[key].length; ++i) {
  //     console.log(ans[con[key][i]])
  //   }
  // }
  
}


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
    var res = JSON.parse(options.res);
    console.log("ok")
    console.log(res)
  
    if (options.res == null) {
      wx.showToast({
        title: '数据为空',
      })
      return;
    }
    var r = analysis(res);
    var con = analysisRes(r);
    this.setData({
       res: res,
       ans: ans,
       con: con
    }) 
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

  analysis: function () {
    wx.redirectTo({
      url: '/pages/analysis/analysis',
    })
  }

})