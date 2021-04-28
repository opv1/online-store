import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from 'components/index'
import { Input, Button } from 'components/UI/index'
import 'components/Singup/Singup.scss'

const Singup = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSingup = (e) => {
    e.preventDefault()
  }

  return (
    <div className='singup'>
      <Logo className='singup__logo' />
      <h1 className='singup__caption'>Login Form</h1>
      <form className='singup__form'>
        <div className='singup__block'>
          <Input
            className='singup__input'
            onChange={handlerChange}
            type='email'
            name='email'
            value={form.email}
            placeholder='Enter email'
          />
          <Input
            className='singup__input'
            onChange={handlerChange}
            type='password'
            name='password'
            value={form.password}
            placeholder='Enter password'
          />
        </div>
        <Link to='/login'>Already have an account?</Link>
        <Button className='singup__button' onClick={onSingup} title='Singup' />
      </form>
    </div>
  )
}

export default Singup
