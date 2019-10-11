/*
 * @Author: Siwen
 * @Date: 2019-10-11 10:17:13
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-11 11:38:29
 * @Description: 排行榜
 */
import { toplistDetail } from '../api/index'

const rank = {
  officalList: [],
  globalList: [],
  async getRank() {
    const rankData = await new Promise(resolve => {
      toplistDetail().then(res => {
        resolve(res.list)
      })
    })
    this.officalList = rankData.slice(0, 4)
    this.globalList = rankData.slice(4, rankData.length)
  }
}
export default rank