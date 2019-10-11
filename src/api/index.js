/*
 * @Author: Siwen
 * @Date: 2019-08-14 16:49:43
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-11 11:07:06
 * @Description: 接口中心
 */
import axios from './request'

/* 首页banner */
export const getBanner = () => {
  return axios.get('/banner?type=1')
}
/* 首页推荐歌单 */
export const getPersonalized = () => {
  return axios.get('/personalized')
}
/* 排行榜 */
export const toplistDetail = () => {
  return axios.get('/toplist/detail')
}
