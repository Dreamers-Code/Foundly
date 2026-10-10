import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/button.css';

export default function Button({
  children,
  to,
  variant = 'black',
  size = 'normal',
  onClick,
  className = '',
  ...props
}) {
  const buttonClass = `btn-pill btn-variant-${variant} size-${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
