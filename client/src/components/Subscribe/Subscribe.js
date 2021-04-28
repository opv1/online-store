import React from 'react'
import imgAvatar from 'assets/images/avatar.png'
import imgSubscribe from 'assets/images/subscribe.png'
import 'components/Subscribe/Subscribe.scss'

const Subscribe = () => {
  return (
    <section
      className='subscribe'
      style={{ backgroundImage: `url(${imgSubscribe})` }}
    >
      <div className='subscribe__wrapper'>
        <div className='subscribe__left'>
          <div className='subscribe__avatar'>
            <img src={imgAvatar} alt='Avatar' />
          </div>
          <div className='subscribe__review'>
            <blockquote className='subscribe__review__quote'>
              <p>
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condimentum a. Aliquam condimentum mattis neque
                sed pretium”
              </p>
            </blockquote>
            <span className='subscribe__review__author'>Bin Burhan</span>
            <span className='subscribe__review__about'>Dhaka, Bd</span>
            <div className='subscribe__review__pagination'>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className='subscribe__right'>
          <div className='subscribe__block'>
            <h5 className='subscribe__block__caption'>subscribe</h5>
            <span className='subscribe__block__subcaption'>
              for our newletter and promotion
            </span>
          </div>
          <form className='subscribe__form' name='subscribe-form'>
            <input type='text' placeholder='Enter Your Email' required />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
