/*
 * @Author: Siwen
 * @Date: 2019-10-10 18:45:15
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-11 11:38:23
 * @Description: 首页推荐歌单
 */
import { getPersonalized } from '../api/index'

const personalized = {
  personalizedList: [],
  async getPersonalizedList() {
    const List = await new Promise(resolve => {
      getPersonalized().then(res => {
        resolve(res.result)
      })
    })
    this.personalizedList = List
  }
}
export default personalized
