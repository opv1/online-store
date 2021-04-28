import React from 'react'
import 'components/Navigation/Navigation.scss'

const Navigation = () => {
  return (
    <div className='banner'>
      <div className='banner-wrapper'>
        <h1 className='banner-caption'>new arrivals</h1>
        <div className='banner-container'>
          <nav className='banner-navigation'>
            <ul className='banner-navigation__list'>
              <li className='banner-navigation__item'>
                <a href='#'>home</a>
                <span>&nbsp;/&nbsp;</span>
              </li>
              <li className='banner-navigation__item'>
                <a href='#'>men</a>
                <span>&nbsp;/&nbsp;</span>
              </li>
              <li className='banner-navigation__item banner-navigation__item_active'>
                <a href='#'>new arrivals</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navigation
