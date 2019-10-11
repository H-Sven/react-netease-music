import React, { useState, useEffect } from 'react'
import './index.scss'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import store from '../../../store'


function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const banner = store.useStore('banner')
  
  const { bannerList, getBannerList } = banner

  useEffect(() => {
    bannerList.length === 0 && getBannerList()
  }, [])
  useEffect(() => {
    if(bannerList.length && !sliderSwiper){
      let sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: true,
        autoplayDisableOnInteraction: false,
        pagination: {el:'.swiper-pagination'},
      });
      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper])

  return (
    <div className="slider_contauber">
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.pic}>
                  <div className="slider-nav">
                    <img src={slider.pic} width="100%" height="100%" alt={slider.typeTitle} />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}

export default React.memo(Slider)

