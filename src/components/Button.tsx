import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button'
}) => {
  const baseStyle = "font-bold py-2 px-4 rounded transition duration-300 ease-in-out";
  const variantStyles = {
    primary: "bg-brandOrange hover:bg-brandLightOrange text-white",
    secondary: "bg-gray-700 hover:bg-gray-800 text-white"
  };

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${className}`;

  return (
    <button 
      className={buttonStyle}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
