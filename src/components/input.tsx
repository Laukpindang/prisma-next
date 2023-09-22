import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  onChange,
  value,
  type = 'text',
  className = '',
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      className={`rounded-md border-2 border-black focus:border-red-800 hover:border-red-800 ${className}`}
    />
  );
};
