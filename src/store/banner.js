/*
 * @Author: Siwen
 * @Date: 2019-10-10 16:16:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 17:04:42
 * @Description: 首页banner
 */
import { getBanner } from '../api/index'
const banner = {
  bannerList: [],
  async getBannerList() {
    const bannerList = await new Promise(resolve => {
      getBanner().then(res => {
        resolve(res.banners)
      })
    })
    this.bannerList = bannerList
  }
}
export default banner