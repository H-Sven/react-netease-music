/*
 * @Author: Siwen
 * @Date: 2019-10-10 14:10:35
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-11 11:38:11
 * @Description: store
 */
import banner from './banner'
import personalized from './personalized'
import rank from './rank'
import Store from '@ice/store'

const storeManager = new Store()
storeManager.registerStore('banner', banner)
storeManager.registerStore('personalized', personalized)
storeManager.registerStore('rank', rank)

export default storeManager