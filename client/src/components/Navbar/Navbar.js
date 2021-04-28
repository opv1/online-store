import React from 'react'
import { NavLink } from 'react-router-dom'
import 'components/Navbar/Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__wrapper'>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <NavLink className='navbar__link' to='/'>
              home
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink className='navbar__link' to='/man'>
              man
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink className='navbar__link' to='/women'>
              women
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink className='navbar__link' to='/kids'>
              kids
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink className='navbar__link' to='/accoseriese'>
              accoseriese
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink className='navbar__link' to='/featured'>
              featured
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink className='navbar__link' to='/hot'>
              hot deals
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
