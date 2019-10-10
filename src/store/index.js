/*
 * @Author: Siwen
 * @Date: 2019-10-10 14:10:35
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 16:59:47
 * @Description: 
 */
import banner from './banner'
import Store from '@ice/store'

const storeManager = new Store()
storeManager.registerStore('banner', banner)

export default storeManager