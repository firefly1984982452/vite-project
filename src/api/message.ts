import request from '@/utils/request';
const MSG_URL = '/msg-adaptor-cube-api/message-engine/';
const qqlykm = 'https://qqlykm.cn/api/'
const key = 'miN6QvGlqLQRe9TexZEFY7JZ9Q'

export const getBrokerList = (data: any) => {
  return request({
    url: MSG_URL + 'adaptor/magic-cube/topic/page',
    method: 'post',
    data
  })
}

export const history = () => {
  return request({
    url: qqlykm + 'free/history/get',
    method: 'get',
  })
}

export const hotlist = (type: string) => {
  return request({
    url: qqlykm + `hotlist/get?key=${key}&type=${type}`,
    method: 'get',
  })
}

export const weather = (city: string) => {
  return request({
    url: qqlykm + `free/weather/get?key=${key}&city=${city}`,
    method: 'get',
  })
}