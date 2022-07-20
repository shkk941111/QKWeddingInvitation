// pages/home/index.js
Page({
  data: {
    // 视频
    // src1:'',
    // danmuList:[
    //   {text:'第1s出现的弹幕',color:'#ff0000',time:1},
    //   {text:'第3s出现的弹幕',color:'#ff0000',time:3},
    // ],
    movieList:[{
      create_time:'2022-05-08 15:17:54',
      title:'荔枝夫妇的2021',
      src:''
      // src:'https://v.qq.com/txp/iframe/player.html?vid=y333677hz2i'
    }
    // },{
    //   create_time:'2019-07-25 19:55:54',
    //   title:'ocean',
    //   src:''
    // },{
    //   create_time:'2019-07-25 19:55:54',
    //   title:'ocean',
    //   src:''
    // }
  ],
    // 图片
    imageUrls:[
      '/img/timg1.jpg',
      '/img/timg2.jpg',
      '/img/timg3.jpg',
      '/img/timg4.jpg'
    ]
  },
  // videoContexr:null,
  // inputValue:'',
  // onReady:function(){
  //   this.videoContext = wx.createVideoContext('myVideo')
  // },
  // bindInputBlur:function(e){
  //   this.inputValue = e.detail.value
  // },
  bindSendDanmu:function(){
    const TxvContext = requirePlugin('tencentvideo')
    var txvContext = TxvContext.getTxvContext('txv1')
    txvContext.play()  // 播放
    txvContext.pause() // 暂停
    txvContext.requestFullScreen() // 进入全屏
    txvContext.exitFullScreen()    // 退出全屏
    txvContext.playbackRate(+e.currentTarget.dataset.rate) // 设置播放速率
    txvContext.seek(time)
    txvContext.replay(vid)
    this.videoContext.bindSendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  // bindButtonTap:function(){
  //   wx.chooseVideo({
  //     sourceType:['album','camera'],
  //     maxDuration:60,
  //     camera:'back',
  //     success:res=>{
  //       this.setData({
  //         src:res.tempFilePath
  //       })
  //     }
  //   })
  // },
})