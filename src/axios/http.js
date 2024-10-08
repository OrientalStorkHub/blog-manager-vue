import axios from "axios";
import { Message } from "element-ui";
import qs from 'qs'

const instance = axios.create({
  baseURL: 'http://157.0.19.2:10065',
  timeout: 10000,
  headers: "application/json"
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
  if (!config.url.includes('/login') && !config.url.includes('/regist')) {
    // 假设 access-token 存储在 localStorage 中
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      config.headers['access-token'] = accessToken;
      config.headers['refresh-token'] = refreshToken;
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  Message.error("服务器维护中!")
  // return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  console.log(response);
  // 判断响应是否成功
  if (response.data.code == 200) {
    return response;
  } else {
    return response;
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
    instance.post(url, params)
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