import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ error = false, errorMessage, formControl, type = 'text', label, width = 'auto', placeholder, value, onChange, readonly, defaultValue, className = '' }) => {
  return (
    <div style={{ width: width }}>
      <label className={label ? 'form-label' : 'd-none'}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        readOnly={readonly}
        placeholder={placeholder}
        type={type}
        className={`form-control ${formControl ? `form-control-${formControl}` : ''} ${className}`}
        aria-describedby="passwordHelpBlock"
      />
      <div className='form-text' style={{ display: error ? 'block' : 'none' }}>{errorMessage}</div>
    </div>
  )
}

Input.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  formControl: PropTypes.oneOf(['sm', 'lg']),
  type: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  className: PropTypes.string
}

export default Input
