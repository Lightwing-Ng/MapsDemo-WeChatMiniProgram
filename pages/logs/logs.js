var util = require('../../utils/util.js')
Page({
    data: {
        projects: [{
            name: 'FinalScheduler',
            git: "https://github.com/giscafer/FinalScheduler"
        }, {
            name: 'MoveSite',
            git: "https://github.com/giscafer/moviesite"
        }, {
            name: 'Ponitor', 
            git: "https://github.com/giscafer/Ponitor"
        }, {
            name: 'hexo-theme-cafe',
            git: "https://github.com/giscafer/hexo-theme-cafe"
        }, {
            name: 'ife-course-demo',
            git: "https://github.com/giscafer/ife-course-demo"
        }]
    },
    onReady: function () {
        this.clickName();
    },
    clickName: function (e) {
        var pros = this.data.projects;
        console.log("############")
        console.log("## Others ##")
        console.log("## ------ ##")
        pros.forEach(function (item, index) {
            console.log("##          ", item.name + ":" + item.git)
        })
        console.log("##        ##")
        console.log("            ")
    }
})
