import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from 'components/index'
import { Input, Button } from 'components/UI/index'
import 'components/Login/Login.scss'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div className='login'>
      <Logo className='login__logo' />
      <h1 className='login__caption'>Login Form</h1>
      <form className='login__form'>
        <div className='login__block'>
          <Input
            className='login__input'
            onChange={handlerChange}
            type='email'
            name='email'
            value={form.email}
            placeholder='Enter email'
          />
          <Input
            className='login__input'
            onChange={handlerChange}
            type='password'
            name='password'
            value={form.password}
            placeholder='Enter password'
          />
        </div>
        <Link to='/singup'>Don't have an account yet?</Link>
        <Button className='login__button' onClick={onLogin} title='Login' />
      </form>
    </div>
  )
}

export default Login
