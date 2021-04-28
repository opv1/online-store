import React from 'react'
import 'components/UI/Input/Input.scss'

const Input = ({
  className,
  onChange,
  type = 'text',
  name,
  value,
  placeholder,
}) => {
  return (
    <input
      className={className ? `${className} input` : 'input'}
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default Input
