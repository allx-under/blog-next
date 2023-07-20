import React from "react";

interface ButtonProps {
  type?: "submit" | "button";
  disabled?: boolean;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ type, disabled, text }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="w-full bg-zinc-500/80 text-zinc-100 rounded-md h-9"
    >
      {text}
    </button>
  );
};

export default Button;
