import request from '@/utils/request';
const MSG_URL = '/msg-adaptor-cube-api/message-engine/';

export const getBrokerList = (data: any) => {
  return request({
    url: MSG_URL + 'adaptor/magic-cube/topic/page',
    method: 'post',
    data
  })
}
export const history = () => {
  return request({
    url: 'https://qqlykm.cn/api/free/history/get',
    method: 'get',
  })
}

