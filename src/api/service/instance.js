//导入通信模块axios
import axios from "axios";
//导入通信设置
import config from "../config";
//导入路由模块
// import router from "@/router";
//引入eleui的通知样式模块
import { Message } from "element-ui";
//导入qs，qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库
// qs.parse()是将URL解析成对象的形式
// qs.stringify()是将对象 序列化成URL的形式，以&进行拼接
import qs from "qs";

const { api_base_url } = config;
//创建axios实列，开始设置封装
// 参考官方文档
// https://www.kancloud.cn/yunye/axios/234845
let instance = axios.create({
  // time:1000*60,
  timeout: 1000 * 60,
  baseURL: api_base_url,
});
//做设置
//默认响应的数据类型是JSON
instance.defaults.responseType = "json";
//默认信任证书开启
instance.defaults.withCredentials = true;
//默认转换请求
// `transformRequest` 允许在向服务器发送前，修改请求数据
// 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
// 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
instance.defaults.transformRequest = [
  // ES 5
  //    function(data){
  //        return qs.stringify(data)
  //    }

  //   ES6
  (data) => {
    // 对 data 进行任意转换处理 // 对 data 进行任意转换处理
    return qs.stringify(data);
  },
];
// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Message.error({
      message: "请求超时！",
    });
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    // 取出响应数据
    let data = response.data;
    let status = response.status;
    console(status);
    if (status === 200) {
      Message.error({ message: "响应完成!" });
      return Promise.resolve(data);
    }
    return response;
    // return Promise.reject(response);
    // return Promise.resolve(data);
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

let ajaxMethod=['get','post']
let api ={}
ajaxMethod.forEach(method => {
    // 数组取值的两种方式
    api[method] = function(uri, data, config) {
      return new Promise(function(resolve, reject) {
        instance[method](uri, data, config)
          .then(response => {
            //原先判定code=200的，code数据包在request里面，status在外层就用status得了
            if (response.status === 200) {
              resolve(response)
            }
            // resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  })

export default api


