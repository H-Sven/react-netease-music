/*
 * @Author: Siwen
 * @Date: 2019-10-11 13:58:25
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-12 11:21:38
 * @Description: 封装scroll
 */

import React, { forwardRef, useState,useEffect, useRef, useImperativeHandle, useMemo } from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import { debounce } from '../../utils'
import './index.scss'

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState()
  const scrollContaninerRef = useRef()
  const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom} = props
  const { pullUp, pullDown, onScroll } = props

  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp, 300)
  }, [pullUp])

  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown, 300)
  }, [pullDown])

  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(!bScroll || !onScroll) return
    bScroll.on('scroll', scroll => {
      onScroll(scroll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  useEffect(() => {
    if(!bScroll || !pullUp) return
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到底部
      if(bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce()
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    };
  }, [pullUp, pullUpDebounce, bScroll])

  useEffect(() => {
    if(!bScroll || !pullDown) return
    bScroll.on('touchEnd', pos => {
      // 判断用户的下拉动作
      if(pos.y > 50) {
        pullDownDebounce()
      }
    })
    return () => {
      bScroll.on('touchEnd')
    };
  }, [pullDown, pullDownDebounce, bScroll])

  useEffect(() => {
    if(refresh && bScroll) {
      bScroll.refresh()
    }
  })
  useImperativeHandle(ref, () => ({
    refresh() {
      if(bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    getBScroll() {
      if(bScroll) {
        return bScroll
      }
    }
  }))

  
  const PullUpdisplayStyle = pullUpLoading ? { display: '' } : { display: 'none' }
  const PullDowndisplayStyle = pullDownLoading ? { display: '' } : { display: 'none' }

  return (
    <div className="scroll_container" ref={scrollContaninerRef}>
      {props.children}
      {/* 滑动到底部加载动画 */}
      <div className="pullup_loading" style={PullUpdisplayStyle}>
        加载中...
      </div>
      {/* 顶部下拉刷新动画 */}
      <div className="pulldown_loading" style={ PullDowndisplayStyle }>
        刷新中...
      </div>
    </div>
  )
})

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll:null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
}

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool,//是否支持向上吸顶
  bounceBottom: PropTypes.bool//是否支持向上吸顶
}

export default Scroll


