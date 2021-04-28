import React from 'react'
import 'components/UI/Button/Button.scss'

const Button = ({ className, onClick, title, backgroundImage }) => {
  const styles = {}

  if (backgroundImage) {
    styles.backgroundImage = `url("data:image/svg+xml,***${backgroundImage}***")`
  }

  return (
    <button
      className={className ? `${className} button` : 'button'}
      onClick={onClick}
      style={styles}
    >
      {title}
    </button>
  )
}

export default Button
