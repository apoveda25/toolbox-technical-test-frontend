import PropTypes from 'prop-types';
import React from 'react';

const Button = ({type = 'button', backgroundColor, color, text, size, width, onClick}) => {
  return (
    <button
      type={type}
      className={`btn ${size ? `btn-${size}` : ''}`}
      style={{backgroundColor, color, width}}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  onClick: PropTypes.func
}

export default Button
