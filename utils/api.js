// 请求路径
const baseUrl = "http://localhost:8087/";
//图片路径
const imagePrefix = "";
// 车辆
var getHotCar=baseUrl + 'carBrand/getHotCarList';//查询热门车辆
var getCarList=baseUrl + 'carBrand/getCarList'//查询所有车辆品牌
var searchCar=baseUrl + 'carBrand/searchCarList'//搜索框查询车辆
// 登录
var sendSMSCode=baseUrl + 'user/sendSMS'//发送短信验证码
var loginByMobile=baseUrl + 'user/loginByMobile'//手机号登录
var wxLogin=baseUrl + 'user/wxLogin'//微信登录
var DecodeInfo=baseUrl + 'user/decodeInfo'
// 我的
var tellUrl = 'https://test-api.miyouzhiyun.com/serviceDriver/getServiceUserList';//客服电话
//node的导出方式
module.exports = {
   getHotCar:getHotCar,
   imagePrefix:imagePrefix,
   getCarList:getCarList,
   searchCar:searchCar,
   sendSMSCode:sendSMSCode,
   loginByMobile:loginByMobile,
   tellUrl:tellUrl,
   wxLogin:wxLogin,
   DecodeInfo:DecodeInfo
  }
  
  
  
  