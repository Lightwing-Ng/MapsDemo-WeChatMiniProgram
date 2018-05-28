// location.js
// 获取应用实例
var app = getApp()

Page({
    data: {
        markers: [{
            latitude: 23.099994,
            longitude: 113.324520,
            name: 'T.I.T 创意园',
            desc: 'My now location'
        }],
        covers: [{
            latitude: 23.099794,
            longitude: 113.324520,
            iconPath: '../../images/wechart.png',
            rotate: 10
        }, {
            latitude: 23.099298,
            longitude: 113.324129,
            iconPath: '../../images/wechart.png',
            rotate: 90
        }]
    },
    onLoad: function () {
        console.log('Map Location!')
        var that = this
        wx.getLocation({
            // to return the data of
            type: 'gcj02',

            success: function (res) {
                console.log(res)
                var latitude = res.latitude;
                var longitude = res.longitude;
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 1
                })
            }
        });
    },
})