import React from 'react'
import { Link } from 'react-router-dom'
import imgLogo from 'assets/images/logo.png'
import 'components/Logo/Logo.scss'

const Logo = ({ className }) => {
  return (
    <Link className={className ? `${className} logo` : 'logo'} to='/'>
      <div className='logo__image'>
        <img src={imgLogo} alt='Logo' />
      </div>
      <span className='logo__title'>bran</span>
      <span className='logo__title logo__title_last-word'>d</span>
    </Link>
  )
}

export default Logo
