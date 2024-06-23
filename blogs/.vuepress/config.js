module.exports = {
  "base": "/blog/",
  "title": "临渊的博客",
  "description": "Welcome to my blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/wman.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e072087a21b1865aa670ebe1fe0b6bcb";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "icon": "reco-other",
        "items" : [
          // {
          //   "text": "gitee",
          //   "link": "https://gitee.com/unarmed",
          //   "icon": "reco-github"
          // },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/admire_fish?type=blog",
            "icon": "reco-csdn"
          },
          {
            "text": "Bilibili",
            "link": "https://space.bilibili.com/1716109772",
            "icon": "reco-bilibili"
          },
        ]

      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/wman.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "临渊",
    "authorAvatar": "/man.jpg",
    // "record": "xxxx",
    "startYear": "2023",
    "valineConfig": {
      "appId": 'j3CX5j5vlcVzGdVS9U2zf4Cl-gzGzoHsz',// your appId
      "appKey": 'Eokc1nYgk7E8DdaePLHmpO41', // your appKey
      "placeholder": '留下gravatar绑定的邮箱可以显示头像噢~',
      "pageSize": 10,
      // 设置Bilibili表情包地址
      "emojiCDN": '//i0.hdslb.com/bfs/emote/', 
      // 表情title和图片映射
      "emojiMaps": {
        "tv_doge":"6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
        "tv_亲亲":"a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
        "tv_偷笑":"bb690d4107620f1c15cff29509db529a73aee261.png",
        "tv_再见":"180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
        "tv_冷漠":"b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
        "tv_发怒":"34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
        "tv_发财":"34db290afd2963723c6eb3c4560667db7253a21a.png",
        "tv_可爱":"9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
        "tv_吐血":"09dd16a7aa59b77baa1155d47484409624470c77.png",
        "tv_呆":"fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
        "tv_呕吐":"9f996894a39e282ccf5e66856af49483f81870f3.png",
        "tv_困":"241ee304e44c0af029adceb294399391e4737ef2.png",
        "tv_坏笑":"1f0b87f731a671079842116e0991c91c2c88645a.png",
        "tv_大佬":"093c1e2c490161aca397afc45573c877cdead616.png",
        "tv_大哭":"23269aeb35f99daee28dda129676f6e9ea87934f.png",
        "tv_委屈":"d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
        "tv_害羞":"a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
        "tv_尴尬":"7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
        "tv_微笑":"70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
        "tv_思考":"90cf159733e558137ed20aa04d09964436f618a1.png",
        "tv_惊吓":"0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
        "tv_打脸":"56ab10b624063e966bfcb76ea5dc4794d87dfd47.png",
        "tv_抓狂":"fe31c08edad661d63762b04e17b8d5ae3c71a757.png",
        "tv_抠鼻":"c666f55e88d471e51bbd9fab9bb308110824a6eb.png",
        "tv_斜眼笑":"911f987aa8bc1bee12d52aafe62bc41ef4474e6c.png",
        "tv_无奈":"ea8ed89ee9878f2fece2dda0ea8a5dbfe21b5751.png",
        "tv_晕":"5443c22b4d07fb1907ccc610c8e6db254f2461b7.png",
        "tv_流汗":"cead1c351ab8d79e9f369605beb90148db0fbed3.png",
        "tv_流泪":"7e71cde7858f0cd50d74b0264aa26db612a8a167.png",
        "tv_流鼻血":"c32d39db2737f89b904ca32700d140a9241b0767.png",
        "tv_点赞":"f85c354995bd99e28fc76c869bfe42ba6438eff4.png",
        "tv_生气":"26702dcafdab5e8225b43ffd23c94ac1ff932654.png",
        "tv_生病":"8b0ec90e6b86771092a498c54f09fc94621c1900.png",
        "tv_疑问":"0793d949b18d7be716078349c202c15ff166f314.png",
        "tv_白眼":"c1d59f439e379ee50eef488bcb5e5378e5044ea4.png",
        "tv_皱眉":"72ccad6679fea0d14cce648b4d818e09b8ffea2d.png",
        "tv_目瞪口呆":"0b8cb81a68de5d5365212c99375e7ace3e7891b7.png",
        "tv_睡着":"8b196675b53af58264f383c50ad0945048290b33.png",
        "tv_笑哭":"1abc628f6d4f4caf9d0e7800878f4697abbc8273.png",
        "tv_腼腆":"89712c0d4af73e67f89e35cbc518420380a7f6f4.png",
        "tv_色":"61822c7e9aae5da76475e7892534545336b23a6f.png",
        "tv_调侃":"4bc022533ef31544ca0d72c12c808cf4a1cce3e3.png",
        "tv_调皮":"b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png",
        "tv_鄙视":"6e72339f346a692a495b123174b49e4e8e781303.png",
        "tv_闭嘴":"c9e990da7f6e93975e25fd8b70e2e290aa4086ef.png",
        "tv_难过":"87f46748d3f142ebc6586ff58860d0e2fc8263ba.png",
        "tv_馋":"fc7e829b845c43c623c8b490ee3602b7f0e76a31.png",
        "tv_鬼脸":"0ffbbddf8a94d124ca2f54b360bbc04feb6bbfea.png",
        "tv_黑人问号":"45821a01f51bc867da9edbaa2e070410819a95b2.png",
        "tv_鼓掌":"1d21793f96ef4e6f48b23e53e3b9e42da833a0f6.png"
      },
      "visitor": true,
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  "locales": {
    '/': {
      "lang": "zh-CN"
    }
  },
  "plugins":[
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        "theme":[
          'miku', 'whiteCat', 'wanko', 'blackCat', 'z16'
        ],
        "clean":false,
        "messages":{
          "welcome": '欢迎来到我的博客', 
          "home": '心里的花，我想要带你回家。',
          "theme": '好吧，希望你能喜欢我的其他小伙伴。',
          "close": '你不喜欢我了吗？痴痴地望着你。'
        },
        "modelStyle":{ right: '90px', bottom: '20px', opacity: '1' },
        "messageStyle": { right: '68px', bottom: '230px' },
        "mobile": {
          show: false // 是否在移动设备上显示(default: false)
        },
        // "width": 250,
        // "height": 320
      }
    ],
    ['dynamic-title',{
      showText: '(/≧▽≦/)欢迎回来~',
      hideText: '(●—●)bye bye~',
      recoverTime: 1000,
    }],
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    [
      'copyright',
      {
        authorName: '临渊', // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
      },
    ],
    ["ribbon-animation", {      
      size: 90,   // 默认数据        
      opacity: 0.3,  //  透明度   
      zIndex: -1,   //  层级       
      opt: {           // 色带HSL饱和度       
        colorSaturation: "80%",      // 色带HSL亮度量    
        colorBrightness: "60%",    // 带状颜色不透明度  
        colorAlpha: 0.65, // 在HSL颜色空间中循环显示颜色的速度有多快   
        colorCycleSpeed: 6,         // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)          
        verticalPosition: "center",           // 到达屏幕另一侧的速度有多快          
        horizontalSpeed: 200,           // 在任何给定时间，屏幕上会保留多少条带         
        ribbonCount: 2,           // 添加笔划以及色带填充颜色          
        strokeSize: 0,           // 通过页面滚动上的因子垂直移动色带          
        parallaxAmount: -0.5,           // 随着时间的推移，为每个功能区添加动画效果           
        animateSections: true         
      },         
      ribbonShow: false, //  点击彩带  true显示  false为不显示         
      ribbonAnimationShow: true  // 滑动彩带       
    }],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          //本地歌曲
          {
            //名字
            name: "你的星河",
            //作者
            artist: "琥珀琴师Louis",
            //地址
            url: "/你的星河.mp3",
            //封面图片
            cover: "你的星河.jpg",
          },
          {
            //名字
            name: "大鱼",
            //作者
            artist: "双笙",
            //地址
            url: "/大鱼.mp3",
            //封面图片
            cover: "大鱼.jpg",
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 悬浮窗样式
        floatStyle: { bottom: "30px", "z-index": "999999" },
      },
    ],
  ]  
}