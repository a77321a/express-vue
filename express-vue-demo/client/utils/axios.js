import axios from 'axios'
import qs from 'qs'

const BASEURL = 'http://localhost:4000';
// 封装axios方法
export function post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(BASEURL + url,qs.stringify(params, {
        depth: 10
      }))
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
export function get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(BASEURL + url,qs.stringify(params, {
        depth: 10
      }))
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }