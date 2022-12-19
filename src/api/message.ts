import request from '@/utils/request';
const MSG_URL = '/msg-adaptor-cube-api/message-engine/';
const QQLYKM = 'https://qqlykm.cn/api/'
const KEY = 'miN6QvGlqLQRe9TexZEFY7JZ9Q'

export const getBrokerList = (data: any) => {
  return request({
    url: MSG_URL + 'adaptor/magic-cube/topic/page',
    method: 'post',
    data
  })
}

export const history = () => {
  return request({
    url: QQLYKM + 'free/history/get',
    method: 'get',
  })
}

export const hotlist = (type: string) => {
  return request({
    url: QQLYKM + `hotlist/get?key=${KEY}&type=${type}`,
    method: 'get',
  })
}

export const weather = (city: string) => {
  return request({
    url: QQLYKM + `free/weather/get?key=${KEY}&city=${city}`,
    method: 'get',
  })
}