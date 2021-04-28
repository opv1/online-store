import React from 'react'
import imgOffer from 'assets/images/offer.png'
import imgOffer1 from 'assets/images/offer-1.png'
import imgOffer2 from 'assets/images/offer-2.png'
import imgOffer3 from 'assets/images/offer-3.png'
import 'components/Offers/Offers.scss'

const Offers = () => {
  return (
    <section className='offer'>
      <div className='offer__wrapper'>
        <div
          className='offer__left'
          style={{ backgroundImage: `url(${imgOffer})` }}
        >
          <div className='offer__block'>
            <span className='offer__title'>
              30%
              <span className='offer__title offer__title_mod'>offer</span>
            </span>
            <span className='offer__subtitle'>for women</span>
          </div>
        </div>
        <div className='offer__right'>
          <div className='offer__item'>
            <i className='offer__item__image'>
              <img src={imgOffer1} alt='Icon' />
            </i>
            <div className='offer__item__block'>
              <h5 className='offer__item__title'>Free Delivery</h5>
              <p className='offer__item__text'>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
          <div className='offer__item'>
            <i className='offer__item__image'>
              <img src={imgOffer2} alt='Icon' />
            </i>
            <div className='offer__item__block'>
              <h5 className='offer__item__title'>Sales & discounts</h5>
              <p className='offer__item__text'>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
          <div className='offer__item'>
            <i className='offer__item__image'>
              <img src={imgOffer3} alt='Icon' />
            </i>
            <div className='offer__item__block'>
              <h5 className='offer__item__title'>Quality assurance</h5>
              <p className='offer__item__text'>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
