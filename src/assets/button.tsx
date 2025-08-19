import React from "react";
import type { ButtonProps } from "../types/button";

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
