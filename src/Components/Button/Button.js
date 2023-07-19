import React from 'react';
import "./Button.css";
import PropTypes from "prop-types";


const Button = ({text, onClick, variant='primary'}) => {
  return (
    <button 
    className={`button button--${variant}`}
    onClick={() => {onClick()}}
    >
      {text}
    </button>
  )
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary'])
}; 


export default Button;