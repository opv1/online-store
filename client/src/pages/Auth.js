import React from 'react'
import { useParams } from 'react-router-dom'
import { Login, Singup } from 'components/index'

const Auth = () => {
  const params = useParams()

  if (params.action === 'login') {
    return (
      <div className='auth'>
        <Login />
      </div>
    )
  } else {
    return (
      <div className='auth'>
        <Singup />
      </div>
    )
  }
}

export default Auth
