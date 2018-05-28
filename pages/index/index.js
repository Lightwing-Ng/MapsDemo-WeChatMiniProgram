// index.js
// 获取应用实例
var app = getApp()

// 在需要使用的js文件中，导入js  
var util = require('../../utils/util.js');

Page({
    data: {
        motto: 'To be continued...',
        userInfo: {},
        appInfo: {
            logoUrl: '../../image/avatar.png',
            title: 'Welcome to use the MapDemo!'
        },
    },

    // 事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../location/location'
        })
    },

    onLoad: function () {
        // 在控制台输出日志
        console.log('onLoad')

        var that = this
        // 调用函数时，传入new Date()参数，返回值是日期和时间  
        var time = util.formatTime(new Date());
        // 再通过setData更改Page()里面的data，动态更新页面的数据 
        that.setData({
            appInfo: this.data.appInfo,
            time: time
        })
    }
})