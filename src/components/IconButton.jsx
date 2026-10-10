import React from 'react';
import '../styles/icon-button.css';

export default function IconButton({
  children,
  ariaLabel,
  variant = 'white',
  size = 'normal',
  onClick,
  className = '',
  as = 'button',
  ...props
}) {
  const Component = as;

  return (
    <Component
      type={Component === 'button' ? 'button' : undefined}
      className={`icon-circle-btn variant-${variant} size-${size} ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}
