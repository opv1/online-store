import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from 'components/index'
import 'components/Info/Info.scss'

const Info = () => {
  return (
    <section className='info'>
      <div className='info__wrapper'>
        <div className='info__left'>
          <Logo className='info__logo' />
          <div className='info__block'>
            <p className='info__block__text'>
              Objectively transition extensive data rather than cross functional
              solutions. Monotonectally syndicate multidisciplinary materials
              before go forward benefits. Intrinsicly syndicate an expanded
              array of processes and cross-unit partnerships.
            </p>
            <p className='info__block__text'>
              Efficiently plagiarize 24/365 action items and focused
              infomediaries. Distinctively seize superior initiatives for
              wireless technologies. Dynamically optimize.
            </p>
          </div>
        </div>
        <div className='info__right'>
          <div className='info__column'>
            <h6 className='info__column__title'>company</h6>
            <ul className='info__column__list'>
              <li className='info__column__item'>
                <Link to='/'>Home</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>Shop</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>About</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>How It Works</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='info__column'>
            <h6 className='info__column__title'>information</h6>
            <ul className='info__column__list'>
              <li className='info__column__item'>
                <Link to='/'>Tearms & Condition</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>Privacy Policy</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>How to Buy</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>How to Sell</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>Promotion</Link>
              </li>
            </ul>
          </div>
          <div className='info__column'>
            <h6 className='info__column__title'>shop category</h6>
            <ul className='info__column__list'>
              <li className='info__column__item'>
                <Link to='/'>Men</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>Women</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>Child</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>Apparel</Link>
              </li>
              <li className='info__column__item'>
                <Link to='/'>Brows All</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
