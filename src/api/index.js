/*
 * @Author: Siwen
 * @Date: 2019-08-14 16:49:43
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 16:47:29
 * @Description: 接口中心
 */
import axios from './request'

export const getBanner = () => {
  return axios.get('/banner?type=1')
}
