import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import Logo from 'components/Logo/Logo'
import { Select, Input, Button } from 'components/UI/index'
import 'components/Header/Header.scss'

const Header = () => {
  const [value, setValue] = useState('')

  const handlerChange = (e) => {
    setValue(e.target.value)
  }

  const onSearch = () => {}

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__block'>
          <Logo className='header__logo' />
          <div className='header__search'>
            <form className='header__form' name='header-form'>
              <Select />
              <Input
                className='header__form__input'
                onChange={handlerChange}
                name='search'
                value={value}
                placeholder='Search for item...'
              />
              <Button
                className='header__form__button'
                onClick={onSearch}
                backgroundImage={AiOutlineSearch}
              />
            </form>
          </div>
        </div>
        <div className='header__block'>
          <div className='header__cart'>
            <FiShoppingCart className='header__cart__icon' />
          </div>
          <div className='header__account'>
            <Link className='header__account__link' to='/account'>
              My Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
