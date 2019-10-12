/*
 * @Author: Siwen
 * @Date: 2019-10-11 13:56:20
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-12 11:29:25
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

/* 数字过滤 */
export const filterCount = count => {
  if (`${parseInt(count)}`.length >= 5) {
    return `${parseInt(count / 10000)}万`
  } else if (`${parseInt(count)}`.length === 4) {
    return `${parseInt(count / 1000)}千`
  } else {
    return count
  }
}