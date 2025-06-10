import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
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
}) => {
  const styles = {
    orange: "bg-[#FF7800] text-[#FFFFFF]",
    white: "bg-[#FFFFFF] text-[#FF7800]",
  };

  return (
    <button
      className={`${styles[variant]} font-bold py-2 px-4 rounded-md transition-all duration-300 hover:opacity-90`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
