// pages/main/main.js

var index = 0;
var content = [
  "1. 当我有困难时，我会试着不让人知道。",
  "2. 我不想成为一个喜欢批评的人，但很难做到。",
  "3. 我喜欢当主角，希望得到大家的注意。",
  "4. 被人误解对我而言是一件十分痛苦的事。 ",
  "5. 我喜欢研究宇宙的道理、哲理。 ",
  "6. 我常常设想最糟的结果而使自己陷入苦恼中。",
  "7. 我喜欢让事情呈现得轻松、幽默。 ",
  "8. 我是个易于满足的人，极少感到忧虑，几乎常是心平气和的。 ",
  "9. 我很善于挺身而出，为自己的需要争持到底。 ",
  "10. 我常为事情未能按意想中的方向发展而烦躁不乐。 ",
  "11. 我需要在别人生活上占重要席位，我喜欢别人需要我。",
  "12. 我是一个天生的推销员，说服别人对我来说是一件轻易的事。 ",
  "13. 我不善于小组讨论或作简短谈话，我需要很多私人时间和空间。 ",
  "14. 我对过去的事有着一份近乎执着的怀恋。",
  "15. 我常常试探或考验朋友、伴侣的忠诚。 ",
  "16. 我善于计划却不善于施行。",
  "17. 我喜欢独立自主，一切都靠自己。 ",
  "18. 身体上的舒适对我非常重要。",
  "19. 我对现存的总觉不满。 ",
  "20. 我做事有效率，也会找捷径，模仿力特强。",
  "21. 许多人感到很愿意和我接近。",
  "22. 我常被有象征性的事物吸引。 ",
  "23. 当我感到窘促或被人询问实时感受时，我脑里常是一片空白。",
  "24. 我很难违抗有权者的意见。 ",
  "25. 我对于别人和他们做事的动机从不抱很大的怀疑态度。",
  "26. 我知错能改，但由于执著好强，周围的人还是感觉到压力。 ",
  "27. 我喜欢享有完全不用工作的时间。 ",
  "28. 别人不能完成他的分内事，会令我失望和愤怒。",
  "29. 帮助不到别人会让我觉得痛苦。 ",
  "30. 我似具有策划，组织工作的本能而且能使工作顺利完成。 ",
  "31. 别人常欠缺那份深度去了解我的感受。",
  "32. 我讨厌自己貌似愚笨也憎恶被人视为愚笨。 ",
  "33. 我似乎比大多数人更懂得享受生命。",
  "34. 我在作任何抉择前必先搜集多方面资料，确保准确充足。 ",
  "35. 当沉浸在工作或我擅长的领域时，别人会觉得我冷酷无情。 ",
  "36. 我是很容易说话的人，凡事都有商量余地。 ",
  "37. 我的面部表情严肃而生硬。 ",
  "38. 我喜欢把别人从困难或尴尬的境况下解救出来。 ",
  "39. 我习惯推销自己，对自己的能力十分有信心。 ",
  "40. 我认为自己非常的不完善。 ",
  "41.我喜欢从旁观看别人怎样做而自己却不参与。 ",
  "42. 我需要较长时间才能做出决定，一般来说，我喜欢行事谨慎。 ",
  "43. 生命中没有很多事物是我不能欣赏的。 ",
  "44. 我向往掌权的职位，喜欢行使权力。 ",
  "45. 即使存在着个别差异，但我仍觉得大多数人是善良的、美好的。 ",
  "46. 我常对自己挑剔，期望不断改善自己的缺点，以成为一个完美的人。 ",
  "47. 我知道如何让别人喜欢我。",
  "48. 我外向、精力充沛，喜欢不断追求成就，这使我的自我感觉十分良好。 ",
  "49. 我有时很欣赏自己充满权威，有时却又优柔寡断，依赖别人。",
  "50. 我喜欢把事情安排得井井有条和具有高贵品味，亦很重视仪态。",
  "51. 我常怀疑自己有否足够的勇气去完成那应做的事。",
  "52. 我生命中经验过的痛苦和不愉快的事很少。 ",
  "53. 我野心勃勃，喜欢挑战和登上高峰的经验。 ",
  "54. 一般来说，我不会过分投入任何一件事。 ",
  "55. 我经常因少许细节而破坏了整件事。",
  "56. 我感到助人是应当应份的，不论我是否喜欢，我也会迫使自己这样做。",
  "57. 我做事喜欢事先知道自己在进展途上所在的位置。",
  "58. 我不喜欢想象自己仅只是个平凡人，在很多方面我都是与众不同。",
  "59. 我较其它人沉默，别人往往要问我在想什么。 ",
  "60. 我认为没有严格的规律很难指示人该作什么。 ",
  "61. 我很注意自己是否年轻，因为那是快乐的本钱。",
  "62. 如果周遭的人行为太过分时，我准会让他难堪。 ",
  "63. 别人批评我，我也不会回应和辩解，因为我不想发生任何争执与冲突。 ",
  "64. 我很容易知道别人的功劳和好处。 ",
  "65. 我对别人做的事总是不放心，批评一番后，自己会动手再做。 ",
  "66. 我喜欢用进度表、等级表或其它指针显示自己工作进展状况。 ",
  "67. 我常常表现得十分忧郁的样子，充满痛苦而且内向。 ",
  "68. 当别人请教我一些问题，我会巨细无遗地分析得很清楚。",
  "69. 我很重视别人对我所持的原则的观点，不论他们是赞成或反对。 ",
  "70. 在我生命里不论任何事物都是以最佳状态出现的。 ",
  "71. 我是一个很主动甚或具攻击性和自我肯定的人。 ",
  "72. 我需要有外来的动力，或刺激我继续工作、行动。 ",
  "73. 我脑子里常自我批评，也批评别人。 ",
  "74. 我多次感到别人对我的倚赖成了我无法负荷的重担。 ",
  "75. 我常因所完成的工作较多而招人妒忌。 ",
  "76. 我的忧苦和重压，别人常觉察不到。 ",
  "77. 我不喜欢人家问我广泛、笼统的问题。",
  "78. 我觉得任何事情在采取行动前应先取得有职权人士的批准才好。 ",
  "79. 我是个近乎反常的乐观主义者，“理想”对于我来说重于一切。",
  "80. 我爱依惯例行事，不大喜欢改变。 ",
  "81. 我十分抗拒别人干预我的行径，或强把他们的行径加诸我。",
  "82. 我似乎不太懂得幽默，没有弹性。 ",
  "83. 我不觉得自己有许多需要，总是最后才想到自己。",
  "84. 我重视在人眼前展示一个成功的形象。 ",
  "85. 初见陌生人时，我会表现得很冷漠、高傲。",
  "86. 我通常是等别人来接近我，而不是我去接近他们。",
  "87. 我常受怀疑所困扰，对存在着的矛盾别具警觉，也很敏感。 ",
  "88. 我希望别人对事情看得轻松点。 ",
  "89. 我觉得很难把自己品性上较温柔的一面呈露出來，例如温柔、接纳关怀等。 ",
  "90. 我可被尊为最公正的仲裁者，因为我认为诉讼双方都是同样好的。 ",
  "91. 我重视做事准确无误。 ",
  "92. 我有时会觉得别人不欣赏我为他们所做的一切。 ",
  "93. 要成功有时要对自己的原则或标准适度协调。 ",
  "94. 我很飘忽，常常不知自己下一刻想要什么。 ",
  "95. 我很有包容力，彬彬有礼，但跟人的感情互动不深。 ",
  "96. 我工作纯为了责任和职务。",
  "97. 我经常想事情光明的一面而不看生命中黑暗的另一面。",
  "98. 我处事通常选择没有太多阻力的途径。 ",
  "99. 我会极力保护我所爱的人。 ",
  "100. 我常感到要和时间竞赛，许多应做的事情仍待完成。 ",
  "101. 有时候，我觉得自己是个受害者，别人都尽在利用我。",
  "102. 我喜欢展露出一个年轻活泼的形像。 ",
  "103. 我似乎较其它人更深刻地感受人际关系终断时的那份困扰。 ",
  "104. 如果不能完美地表态，我宁愿不说。 ",
  "105. 我对一切不清楚的事，一定要问个明白，含糊不清是我最接受不了的。",
  "106. 我想自己是个怀有赤子童心的人，能与人同乐。 ",
  "107. 我要求光明正大，为此不惜与人发生冲突。",
  "108. 我被动而优柔寡断。",
  "109. 我待人热情而有耐性。",
  "110. 我觉得必须对自己每时每刻负责。 ",
  "111. 每遇到新事物的出现，我通常会走在活动的最前端。 ",
  "112. 我感受特别深刻，并怀疑那些总是很快乐的人。 ",
  "113. 我对时间、金钱和所拥有的一切都很吝啬。",
  "114. 面对威胁时，我一是变得焦虑，一是对抗迎面而来的危险。 ",
  "115. 我喜欢把事情“描绘”出來，看看我曾到过那些地方也计划往哪儿去。",
  "116. 我很有正义感，有时会支持不利的一方。 ",
  "117. 我为自己性情稳定而自豪。",
  "118. 每天晚上，我定要细心反省当日所做的，看是否每件工作都做得妥当。",
  "119. 帮助别人达到快乐和成功是我重要的成就。 ",
  "120. 我是活跃的竞争份子，亦很渴望别人的赞赏。 ",
  "121. 我常因感到被遗弃，孤独而饱受煎熬。 ",
  "122. 我比任何人更关心自己，更重视如何保护自己和自己的地位。 ",
  "123. 我对别人侵犯性的行为很敏感，我不喜欢别人勉强我作任何事。 ",
  "124. 我喜欢戏剧性、多彩多姿的生活。 ",
  "125. 我想我是个不受限制、不易妥协的人。 ",
  "126. 我喜欢以低调处理事情，让别人也因而安稳下来。 ",
  "127. 我不但不会说甜言蜜语，而且别人会觉得我唠叨不停。 ",
  "128. 付出时，别人若不欣然接纳，我便会挫折感。",
  "129. 我争强好胜，喜欢跟别人比较。",
  "130. 我理解小丑笑脸背后隐藏着忧伤，也对这事实很共鸣。",
  "131. 我声线柔弱，人们常要我说话大声点，而这却使我动怒。",
  "132. 当我和有权势的人接近时，我一方面感到安全，但另一方面却惧怕他们。 ",
  "133. 我对感官的需求特别强烈，喜欢美食、服装、身体的触觉刺激，并纵情享乐。",
  "134. 我能够坚持己见，甚至在处于下风的时候。 ",
  "135. 我总没法记得前次我睡不安宁是多久以前的事。 ",
  "136. 我是循规蹈矩的人，秩序对我十分有意义。 ",
  "137. 我觉得许多人依赖我的帮忙和慷慨。 ",
  "138. 我常常刻意保持兴奋的情绪。 ",
  "139. 我有很强的创造天分和想象力，喜欢将事情重新整合。 ",
  "140. 我倾向于独自判断并自己解决问题。 ",
  "141. 我有时期待别人的指导，有时却忽略别人的忠告径直去做我想做的事。 ",
  "142. 我常觉得很多事情都很好玩，很有趣，人生真是快乐。 ",
  "143. 我觉得大多数事件都是无关重要的，那又如何需如此紧张让它们牵着走呢？ ",
  "144. 我若按自己安排的计划去工作，定然较按别人为我编排的工作会有更佳成绩。 ",
  "145. “感情”对我来说很重要。",
  "146. 我极其投入自己的工作，认同工作上的角色，有时甚而忘记“我”是谁。 ",
  "147. 我注重小节而效率不高。 ",
  "148. 我非常情绪化，一天的喜怒哀乐多变。 ",
  "149. 我保留我所拥有的，也收集一些日后可能适用的物资。",
  "150. 我常常保持警觉。 ",
  "151. 我不喜欢要对人尽义务的感觉。 ",
  "152. 我很重视现在，我常感到一份催迫，现在应是要行动的一刻。 ",
  "153. 我不要求得到很多的注意力。 ",
  "154. 我认为要别人爱我，和认同我，我必先样样做到最好。",
  "155. 我若有一天假期，我常不知道可以为自己做些什么。 ",
  "156. 有时我会讲求效率而牺牲完美和原则。 ",
  "157. 艺术及艺术性的表达方式对我很重要，他们可以帮助我疏导情绪。 ",
  "158. 我常幻想自己是某方面的英雄人物或属于某重要阶层。",
  "159. 我常静悄悄地进出，不为同室中人觉察。",
  "160. 我大部分时间都避免卷入严肃的问题。 ",
  "161. 在危机发生时，我会挺身而出，控制大局。 ",
  "162. 我很容易认同别人所做的事和所知的一切。 ",
  "163. 我习惯将自己对外界的不满压抑在心中而非释放出来。 ",
  "164. 我觉得因我所作的一切，我堪当在人们心中占重要席位。 ",
  "165. 我认为大多数人都不懂得欣赏生命的内在美。 ",
  "166. 我认为必须多方面有成就别人才会注意我。",
  "167. 当我觉我自己处于无大作为的景况时，我会一事不理。",
  "168. 我衡量他人时，常以他们会否对我构成威胁为据点。 ",
  "169. 我的计划目标通常高于我的实际完成。",
  "170. 我容易感到沮丧和麻木更多于愤怒。 ",
  "171. 我很容易觉察到欺骗和羞辱，我当我意识到受骗时，我会极度愤怒。",
  "172. 我对事物的观点似乎仅在于事情的“对与错”或“好与坏”。 ",
  "173. 我认为自己能滋养别人比任何工作更令我自豪。 ",
  "174. 我喜欢告诉别人我所做的事和所知的一切。 ",
  "175. 我对大部分的社交集会不太有兴趣，除非那是我熟识的和喜爱的人。",
  "176. 我感到有些时候自己像是一个被流放的贵族。 ",
  "177. 我常担心自由被剥夺，因此不爱作承诺。",
  "178. 我是一位忠实的朋友和伙伴。 ",
  "179. 我感到有必要向别人表示我的不满。 ",
  "180. 我温和平静，不自夸，不爱与人竞争。"
];

var res = {};


Page({
  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    index: 0,
    msg: content[index]
    
    
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


  

  clickMe: function (event) {

    if (event.currentTarget.id == 'is_1') {
      res[index] = 1;
    } else {
      // res[index] = 2;
    }
       

    this.setData({num:  index + 2})
    this.setData({ msg: content[++index]})

    if ((index) == 3) {
      console.log(JSON.stringify(res));
      // 关闭当前页面，跳转到应用内的某个页面。
      wx.redirectTo({
        url: '/pages/result/result?res=' + JSON.stringify(res)
      })
    }
  },

  goback: function() {
    wx.redirectTo({
      url: '/pages/start/start',
    })
  }
})