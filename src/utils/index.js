/*
 * @Author: Siwen
 * @Date: 2019-10-11 13:56:20
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-11 13:57:19
 * @Description: 工具函数
 */

/* 防抖函数 */
export const debounce = (func, delay) => {
  let timer
  return function (...args) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}