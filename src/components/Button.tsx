import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "orange" | "white";
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "orange",
  type = "button",
  className = "",
  style,
  disabled = false,
}) => {
  const styles = {
    orange: "bg-[#FF7800] text-[#FFFFFF]",
    white: "bg-[#FFFFFF] text-[#FF7800]",
  };

  return (
    <button
      className={`${styles[variant]} font-bold py-2 px-4 rounded-md transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      type={type}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
