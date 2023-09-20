import React from 'react';
import "./Button.css";
import PropTypes from "prop-types";

/**
 * Funcion del componente botón
 * @param {String} text Label del boton 
 * @param {Function} onClick Boton buscar 
 * @param {oneOf} onClick estilo 'primary' o 'secondary'
 * @returns 
 */

const Button = ({children, onClick, variant='primary'}) => {
  return (
    <button 
    className={`button button--${variant}`}
    onClick={onClick}
    >
      {children}
    </button>
  )
};
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary'])
}; 


export default Button;