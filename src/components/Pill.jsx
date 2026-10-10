import React from 'react';
import '../styles/pill.css';

export default function Pill({
  children,
  variant = 'gray',
  interactive = false,
  onClick,
  className = '',
  ...props
}) {
  const Component = interactive ? 'button' : 'div';

  return (
    <Component
      type={interactive ? 'button' : undefined}
      className={`pill-container pill-variant-${variant} ${interactive ? 'is-interactive' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}
