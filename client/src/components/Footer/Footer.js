import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaGooglePlusG,
} from 'react-icons/fa'
import 'components/Footer/Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <span className='footer__copyright'>
          &copy; 2021 Brand All Rights Reserved.
        </span>
        <div className='footer__socials'>
          <a
            className='footer__link'
            href='https://facebook.com/'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookF className='footer__link__icon' />
          </a>
          <a
            className='footer__link'
            href='https://twitter.com/'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter className='footer__link__icon' />
          </a>
          <a
            className='footer__link'
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn className='footer__link__icon' />
          </a>
          <a
            className='footer__link'
            href='https://www.pinterest.com/'
            target='_blank'
            rel='noreferrer'
          >
            <FaPinterestP className='footer__link__icon' />
          </a>
          <a
            className='footer__link'
            href='https://www.google.com/'
            target='_blank'
            rel='noreferrer'
          >
            <FaGooglePlusG className='footer__link__icon' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
