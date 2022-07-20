// pages/Maps/index.js
Page({
  // buttonTap:function(){
  //   wx.getLocation({
  //     type:'gcj02',
  //     success:function(res){
  //       wx.openLocation({
  //         latitude:res.latitude,
  //         longitude:res.longitude
  //       })
  //     }
  //   })
  // },
  data:{
    latitude:32.219752,
    longitude:119.370648,
    markers:[{
      iconPath:'/img/navi.png',
      id:0,
      latitude:32.219752,
      longitude:119.370648,
      width:50,
      height:50
    }]
  },
  markertap:function(){
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name:'润扬环龙酒店',
      address:'江苏省镇江市丹徒区世业洲'
    })
  }
})
