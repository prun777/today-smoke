var app = getApp()

// ===== 品牌色（占位卡用）=====
var brandColors = {
  '中华':'#C41E2A','玉溪':'#8B1A1A','黄鹤楼':'#1B3A5C','利群':'#C41E2A','芙蓉王':'#D4A843',
  '云烟':'#C41E2A','南京':'#C8963E','苏烟':'#8B1A1A','红塔山':'#C41E2A','泰山':'#2D5A27',
  '贵烟':'#5C3D2E','娇子':'#2565AE','黄山':'#C8963E','七匹狼':'#1E3A5F','双喜':'#D4213D',
  '黄金叶':'#C8963E','长白山':'#2D5A27','中南海':'#5D6D7E','黄果树':'#C8963E','红河':'#C41E2A',
  '兰州':'#1A3A6B','白沙':'#5D6D7E','万宝路':'#D52B1E','555':'#1B3A5C','七星':'#2C3E50',
  '大卫杜夫':'#1C1C1C','爱喜':'#27AE60','宝亨':'#8B6914'
}

// ===== 66 款烟的数据 =====
var cigarettes = [
  { name: '中华（软）', brand: '中华', price: '50元以上', origin: '国产', thickness: '常规', mood: ['和朋友在一起'], taste: ['抽点够劲的'], image: 'images/中华（软）.jpg', desc: '国烟经典' },
  { name: '中华（硬）', brand: '中华', price: '50元以上', origin: '国产', thickness: '常规', mood: ['和朋友在一起'], taste: ['抽点够劲的'], image: 'images/中华（硬）.jpg', desc: '硬盒中华，醇厚饱满' },
  { name: '中华（双中支）', brand: '中华', price: '50元以上', origin: '国产', thickness: '中支', mood: ['想放松一下', '和朋友在一起'], taste: ['抽点柔和的'], image: 'images/中华（双中支）.jpg', desc: '中支新贵，口感细腻' },
  { name: '中华（细支）', brand: '中华', price: '50元以上', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/中华（细支）.jpg', desc: '细支中华，优雅清淡' },
  { name: '玉溪（软）', brand: '玉溪', price: '20-50元', origin: '国产', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的'], image: 'images/玉溪（软）.jpg', desc: '云系清香' },
  { name: '玉溪（硬）', brand: '玉溪', price: '20-50元', origin: '国产', thickness: '常规', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/玉溪（硬）.jpg', desc: '经典硬盒' },
  { name: '玉溪（细支）', brand: '玉溪', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点口水烟（少尼古丁）'], image: 'images/玉溪（细支）.jpg', desc: '细支清香' },
  { name: '黄鹤楼（软蓝）', brand: '黄鹤楼', price: '20-50元', origin: '国产', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的'], image: 'images/黄鹤楼（软蓝）.jpg', desc: '淡雅香型' },
  { name: '黄鹤楼（硬红）', brand: '黄鹤楼', price: '20-50元', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/黄鹤楼（硬红）.jpg', desc: '劲道适中' },
  { name: '黄鹤楼（细支）', brand: '黄鹤楼', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/黄鹤楼（细支）.jpg', desc: '细支雅香' },
  { name: '黄鹤楼1916', brand: '黄鹤楼', price: '50元以上', origin: '国产', thickness: '常规', mood: ['和朋友在一起'], taste: ['抽点够劲的'], image: 'images/黄鹤楼1916.jpg', desc: '高端典范' },
  { name: '利群（新版）', brand: '利群', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/利群（新版）.jpg', desc: '国民口粮' },
  { name: '利群（软红）', brand: '利群', price: '20-50元', origin: '国产', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的'], image: 'images/利群（软红）.png', desc: '长嘴利群' },
  { name: '利群（细支）', brand: '利群', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/利群（细支）.jpg', desc: '细支利群' },
  { name: '利群（阳光）', brand: '利群', price: '50元以上', origin: '国产', thickness: '常规', mood: ['想放松一下', '和朋友在一起'], taste: ['抽点柔和的'], image: 'images/利群（阳光）.png', desc: '阳光利群' },
  { name: '芙蓉王（硬）', brand: '芙蓉王', price: '20-50元', origin: '国产', thickness: '常规', mood: ['一个人呆着', '和朋友在一起'], taste: ['抽点够劲的'], image: 'images/芙蓉王（硬）.png', desc: '湖南名烟' },
  { name: '芙蓉王（软蓝）', brand: '芙蓉王', price: '50元以上', origin: '国产', thickness: '常规', mood: ['想放松一下', '和朋友在一起'], taste: ['抽点柔和的'], image: 'images/芙蓉王（软蓝）.png', desc: '软蓝芙蓉王' },
  { name: '芙蓉王（细支）', brand: '芙蓉王', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/芙蓉王（细支）.png', desc: '细支芙蓉王' },
  { name: '云烟（紫）', brand: '云烟', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/云烟（紫）.png', desc: '紫云烟' },
  { name: '云烟（细支）', brand: '云烟', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点甜的'], image: 'images/云烟（细支）.png', desc: '细支云烟' },
  { name: '南京（炫赫门）', brand: '南京', price: '20元以下', origin: '国产', thickness: '细支', mood: ['想放松一下', '一个人呆着'], taste: ['抽点甜的'], image: 'images/南京（炫赫门）.png', desc: '甜嘴细支' },
  { name: '南京（金陵十二钗）', brand: '南京', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点甜的'], image: 'images/南京（金陵十二钗）.png', desc: '金陵十二钗' },
  { name: '南京（九五）', brand: '南京', price: '50元以上', origin: '国产', thickness: '常规', mood: ['和朋友在一起'], taste: ['抽点够劲的'], image: 'images/南京（九五）.png', desc: '九五之尊' },
  { name: '苏烟（软金砂）', brand: '苏烟', price: '50元以上', origin: '国产', thickness: '常规', mood: ['想放松一下', '和朋友在一起'], taste: ['抽点柔和的'], image: 'images/苏烟（软金砂）.png', desc: '江苏名烟' },
  { name: '苏烟（五星红杉树）', brand: '苏烟', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点柔和的'], image: 'images/苏烟（五星红杉树）.png', desc: '红杉树' },
  { name: '红塔山（经典1956）', brand: '红塔山', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/红塔山（经典1956）.png', desc: '国民经典' },
  { name: '红塔山（细支）', brand: '红塔山', price: '20元以下', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/红塔山（细支）.png', desc: '细支红塔山' },
  { name: '泰山（望岳）', brand: '泰山', price: '20元以下', origin: '国产', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的'], image: 'images/泰山（望岳）.png', desc: '望岳泰山' },
  { name: '泰山（细支）', brand: '泰山', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点甜的'], image: 'images/泰山（细支）.png', desc: '细支泰山' },
  { name: '贵烟（跨越）', brand: '贵烟', price: '20元以下', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点甜的'], image: 'images/贵烟（跨越）.png', desc: '陈皮爆珠' },
  { name: '贵烟（硬黄）', brand: '贵烟', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/贵烟（硬黄）.png', desc: '贵州经典' },
  { name: '娇子（X星座）', brand: '娇子', price: '20元以下', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点甜的'], image: 'images/娇子（X星座）.png', desc: '年轻时尚' },
  { name: '娇子（宽窄）', brand: '娇子', price: '50元以上', origin: '国产', thickness: '常规', mood: ['想放松一下', '和朋友在一起'], taste: ['抽点柔和的'], image: 'images/娇子（宽窄）.png', desc: '宽窄哲学' },
  { name: '黄山（红方印）', brand: '黄山', price: '20-50元', origin: '国产', thickness: '常规', mood: ['一个人呆着', '和朋友在一起'], taste: ['抽点够劲的'], image: 'images/黄山（红方印）.png', desc: '徽烟焦甜香' },
  { name: '黄山（记忆）', brand: '黄山', price: '20元以下', origin: '国产', thickness: '常规', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/黄山（记忆）.png', desc: '黄山记忆' },
  { name: '七匹狼（白）', brand: '七匹狼', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点柔和的', '抽点口水烟（少尼古丁）'], image: 'images/七匹狼（白）.png', desc: '白狼低焦' },
  { name: '七匹狼（细支）', brand: '七匹狼', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/七匹狼（细支）.png', desc: '细支狼烟' },
  { name: '七匹狼（红）', brand: '七匹狼', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/七匹狼（红）.png', desc: '经典红狼，劲道十足' },
  { name: '七匹狼（蓝）', brand: '七匹狼', price: '20元以下', origin: '国产', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的'], image: 'images/七匹狼（蓝）.png', desc: '蓝狼醇和' },
  { name: '七匹狼（纯境）', brand: '七匹狼', price: '20-50元', origin: '国产', thickness: '中支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点甜的'], image: 'images/七匹狼（纯境）.png', desc: '纯境中支，甜润口感' },
  { name: '七匹狼（通运）', brand: '七匹狼', price: '20-50元', origin: '国产', thickness: '常规', mood: ['想放松一下', '和朋友在一起'], taste: ['抽点够劲的'], image: 'images/七匹狼（通运）.png', desc: '通运狼烟，醇香饱满' },
  { name: '双喜（经典）', brand: '双喜', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着', '和朋友在一起'], taste: ['抽点够劲的'], image: 'images/双喜（经典）.png', desc: '广式经典' },
  { name: '双喜（细支）', brand: '双喜', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/双喜（细支）.png', desc: '细支双喜' },
  { name: '黄金叶（大金圆）', brand: '黄金叶', price: '20-50元', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/黄金叶（大金圆）.png', desc: '中原浓香' },
  { name: '黄金叶（细支）', brand: '黄金叶', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/黄金叶（细支）.png', desc: '细支金叶' },
  { name: '长白山（软红）', brand: '长白山', price: '20元以下', origin: '国产', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的', '抽点口水烟（少尼古丁）'], image: 'images/长白山（软红）.png', desc: '东北名烟' },
  { name: '长白山（细支）', brand: '长白山', price: '20元以下', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点口水烟（少尼古丁）'], image: 'images/长白山（细支）.png', desc: '极低焦油' },
  { name: '中南海（8mg）', brand: '中南海', price: '20元以下', origin: '国产', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的', '抽点口水烟（少尼古丁）'], image: 'images/中南海（8mg）.png', desc: '北京老牌' },
  { name: '中南海（5mg）', brand: '中南海', price: '20元以下', origin: '国产', thickness: '常规', mood: ['想放松一下'], taste: ['抽点口水烟（少尼古丁）'], image: 'images/中南海（5mg）.png', desc: '超低焦油' },
  { name: '黄果树（硬）', brand: '黄果树', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/黄果树（硬）.png', desc: '贵州经典' },
  { name: '红河（硬甲）', brand: '红河', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/红河（硬甲）.png', desc: '云系口粮' },
  { name: '兰州（硬珍品）', brand: '兰州', price: '20元以下', origin: '国产', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的'], image: 'images/兰州（硬珍品）.png', desc: '西北绵香' },
  { name: '兰州（细支）', brand: '兰州', price: '20-50元', origin: '国产', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点甜的'], image: 'images/兰州（细支）.png', desc: '绵甜回甘' },
  { name: '白沙（精品）', brand: '白沙', price: '20元以下', origin: '国产', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/白沙（精品）.png', desc: '湖南经典' },
  { name: '白沙（和天下）', brand: '白沙', price: '50元以上', origin: '国产', thickness: '常规', mood: ['和朋友在一起'], taste: ['抽点够劲的'], image: 'images/白沙（和天下）.png', desc: '和天下' },
  { name: '万宝路（红）', brand: '万宝路', price: '20-50元', origin: '进口', thickness: '常规', mood: ['一个人呆着'], taste: ['抽点够劲的'], image: 'images/万宝路（红）.png', desc: '美式经典' },
  { name: '万宝路（白）', brand: '万宝路', price: '20-50元', origin: '进口', thickness: '常规', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点口水烟（少尼古丁）'], image: 'images/万宝路（白）.png', desc: '白金万' },
  { name: '万宝路（爆珠）', brand: '万宝路', price: '20-50元', origin: '进口', thickness: '常规', mood: ['想放松一下'], taste: ['抽点甜的'], image: 'images/万宝路（爆珠）.png', desc: '薄荷爆珠' },
  { name: '555（金）', brand: '555', price: '20-50元', origin: '进口', thickness: '常规', mood: ['一个人呆着', '和朋友在一起'], taste: ['抽点够劲的'], image: 'images/555（金）.png', desc: '英式烤烟' },
  { name: '555（蓝）', brand: '555', price: '20-50元', origin: '进口', thickness: '常规', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点口水烟（少尼古丁）'], image: 'images/555（蓝）.png', desc: '淡雅英伦' },
  { name: '七星（原味）', brand: '七星', price: '20-50元', origin: '进口', thickness: '常规', mood: ['想放松一下'], taste: ['抽点柔和的'], image: 'images/七星（原味）.png', desc: '日系经典' },
  { name: '七星（爆珠）', brand: '七星', price: '20-50元', origin: '进口', thickness: '常规', mood: ['想放松一下'], taste: ['抽点甜的'], image: 'images/七星（爆珠）.png', desc: '日系爆珠' },
  { name: '大卫杜夫（金）', brand: '大卫杜夫', price: '50元以上', origin: '进口', thickness: '常规', mood: ['想放松一下', '和朋友在一起'], taste: ['抽点柔和的'], image: 'images/大卫杜夫（金）.png', desc: '德系高端' },
  { name: '爱喜（经典）', brand: '爱喜', price: '20元以下', origin: '进口', thickness: '细支', mood: ['想放松一下'], taste: ['抽点柔和的', '抽点口水烟（少尼古丁）'], image: 'images/爱喜（经典）.png', desc: '韩系细支' },
  { name: '爱喜（爆珠）', brand: '爱喜', price: '20元以下', origin: '进口', thickness: '细支', mood: ['想放松一下'], taste: ['抽点甜的'], image: 'images/爱喜（爆珠）.png', desc: '韩系爆珠' },
  { name: '宝亨（原味）', brand: '宝亨', price: '20-50元', origin: '进口', thickness: '常规', mood: ['想放松一下', '一个人呆着'], taste: ['抽点柔和的'], image: 'images/宝亨（原味）.png', desc: '韩系混合' }
]

// ===== 问题列表 =====
var questions = [
  { text: '今天的预算？', field: 'price', options: ['20元以下', '20-50元', '50元以上', '无所谓'] },
  { text: '国产还是进口？', field: 'origin', options: ['国产', '进口', '都行'] },
  { text: '喜欢什么粗细？', field: 'thickness', options: ['常规烟', '细支', '中支', '无所谓'] },
  { text: '今天心情如何？', field: 'mood', options: ['想放松一下', '一个人呆着', '和朋友在一起', '无所谓'] },
  { text: '偏好什么口感？', field: 'taste', options: ['抽点够劲的', '抽点柔和的', '抽点甜的', '抽点口水烟（少尼古丁）', '无所谓'] }
]

Page({
  data: {
    screen: 'home',
    // 首页
    mascotUrl: '',
    prunUrl: '',
    // 问答
    currentStep: 0,
    answers: [],
    questionText: '',
    questionHint: '',
    progressPercent: 0,
    options: [],
    showBack: false,
    // 结果
    resultCards: []
  },

  onLoad: function () {
    var base = app.globalData.imageBase
    this.setData({
      mascotUrl: base + 'smoke.png',
      prunUrl: base + 'prun.jpg'
    })
  },

  // ===== 开始答题 =====
  onStart: function () {
    this.setData({
      screen: 'quiz',
      currentStep: 0,
      answers: []
    })
    this.renderQuestion()
  },

  // ===== 渲染题目 =====
  renderQuestion: function () {
    var step = this.data.currentStep
    if (step >= questions.length) {
      this.showResults()
      return
    }
    var q = questions[step]
    this.setData({
      questionText: q.text,
      questionHint: '第 ' + (step + 1) + ' / ' + questions.length + ' 题',
      progressPercent: Math.round((step / questions.length) * 100),
      options: q.options,
      showBack: step > 0
    })
  },

  // ===== 选择选项 =====
  onSelect: function (e) {
    var option = e.currentTarget.dataset.option
    var answers = this.data.answers
    answers.push(option)
    this.setData({
      answers: answers,
      currentStep: this.data.currentStep + 1
    })
    this.renderQuestion()
  },

  // ===== 返回上一题 =====
  onBack: function () {
    if (this.data.currentStep <= 0) return
    var answers = this.data.answers
    answers.pop()
    this.setData({
      answers: answers,
      currentStep: this.data.currentStep - 1
    })
    this.renderQuestion()
  },

  // ===== 筛选 + 展示结果 =====
  showResults: function () {
    var pool = this.filterCigarettes()
    var picks = this.pickRandom(pool)

    var base = app.globalData.imageBase
    var resultCards = picks.map(function (cig) {
      var color = brandColors[cig.brand] || '#5D6D7E'
      var imgId = base + cig.image
      return {
        name: cig.name,
        brand: cig.brand,
        price: cig.price,
        thickness: cig.thickness,
        desc: cig.desc,
        imgUrl: imgId,
        color: color,
        initials: cig.brand.substring(0, 2),
        imgLoaded: true
      }
    })

    this.setData({ screen: 'result', resultCards: resultCards })
  },

  // ===== 筛选逻辑 =====
  filterCigarettes: function () {
    var answers = this.data.answers
    var pool = cigarettes.slice()

    // 国产/进口
    if (answers[1] === '国产') pool = pool.filter(function (c) { return c.origin === '国产' })
    else if (answers[1] === '进口') pool = pool.filter(function (c) { return c.origin === '进口' })

    // 依次过滤：价格、粗细、心情、口感
    var filters = [
      { index: 0, field: 'price' },
      { index: 2, field: 'thickness' },
      { index: 3, field: 'mood' },
      { index: 4, field: 'taste' }
    ]

    for (var i = 0; i < filters.length; i++) {
      var answer = answers[filters[i].index]
      if (!answer || answer === '无所谓' || answer === '都行') continue
      var field = filters[i].field
      var filtered
      if (field === 'price' || field === 'thickness') {
        filtered = pool.filter(function (c) { return c[field] === answer })
      } else {
        filtered = pool.filter(function (c) { return c[field].indexOf(answer) !== -1 })
      }
      if (filtered.length >= 3) pool = filtered
    }
    return pool
  },

  // ===== 随机抽 3 款 =====
  pickRandom: function (pool) {
    var arr = pool.slice(), result = []
    var count = Math.min(3, arr.length)
    for (var i = 0; i < count; i++) {
      var idx = Math.floor(Math.random() * arr.length)
      result.push(arr[idx])
      arr.splice(idx, 1)
    }
    return result
  },

  // ===== 再测一次 =====
  onRetry: function () {
    this.setData({ screen: 'home' })
  }
})
