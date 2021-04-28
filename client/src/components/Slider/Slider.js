import React from 'react'
import imgSlide1 from 'assets/images/slide-1.png'
import 'components/Slider/Slider.scss'

const Slider = () => {
  return (
    <div className='slider'>
      <div className='slider__wrapper'>
        <div className='slider__block'>
          <h1 className='slider__title'>the brand</h1>
          <span className='slider__subtitle'>
            of luxerious{' '}
            <span className='slider__subtitle slider__subtitle_last-word'>
              fashion
            </span>
          </span>
        </div>
        <div className='slider__image'>
          <img src={imgSlide1} alt='Изображение' />
        </div>
      </div>
    </div>
  )
}

export default Slider
