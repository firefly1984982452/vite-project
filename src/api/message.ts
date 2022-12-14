import request from '../utils/request';
const MSG_URL = '/msg-adaptor-cube-api/message-engine/';

export const getBrokerList = (data: any) => {
  return request({
    url: MSG_URL + 'adaptor/magic-cube/broker/page',
    method: 'post',
    data
  })
}
