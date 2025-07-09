import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "orange" | "white";
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "orange",
  type = "button",
  className = "",
  style,
}) => {
  const styles = {
    orange: "bg-[#FF7800] text-[#FFFFFF]",
    white: "bg-[#FFFFFF] text-[#FF7800]",
  };

  return (
    <button
      className={`${styles[variant]} font-bold py-2 px-4 rounded-md transition-all duration-300 hover:opacity-90 ${className}`}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
