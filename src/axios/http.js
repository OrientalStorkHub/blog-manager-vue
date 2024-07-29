import axios from "axios";
import { Message } from "element-ui";
import qs from 'qs'

const instance = axios.create({
  baseURL: 'http://localhost:9021',
  timeout: 10000,
  headers: "application/json"
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
  // const token = localStorage.getItem("token");
  // if (token) {
  //   config.headers['Authorization'] = token; // 将 Token 添加到请求头中
  // }
  // const id = localStorage.getItem("createId"); // 替换为您的实际id值
  // if (config.url !== '/user/login') {
  //   if (config.method === 'get') {
  //     // 在params中添加id参数
  //     if (!config.params) {
  //       config.params = {};
  //     }
  //     config.params.createId = id;
  //   } else {
  //     config.data += '&createId=' + id
  //   }
  // }

  return config;
}, function (error) {
  // 对请求错误做些什么
  Message.error("服务器维护中!")
  // return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  debugger
  // 判断响应是否成功
  if (response.data.code == 200) {
    return response;
  } else {
    Message.error(response.data.data)
    return null;
  }
}, function (error) {
  // 对响应错误做点什么
  Message.error("服务器维护中")
  // return Promise.reject(error);
});


export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err.data)
      })
  })
}

export function put(url, params) {

  return new Promise((resolve, reject) => {
    instance.put(url, {
      data: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function del(url, params) {
  return new Promise((resolve, reject) => {
    instance.delete(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  })
}