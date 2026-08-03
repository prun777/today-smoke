App({
  onLaunch: function () {
    // 初始化云开发（图片存在云存储里）
    if (wx.cloud) {
      wx.cloud.init({
        env: '你的云环境ID', // TODO: 替换为你的云环境 ID
        traceUser: false
      })
    }
  },

  // 全局数据：烟的数据
  globalData: {
    cloudEnv: '你的云环境ID' // TODO: 替换
  }
})
