import React from "react";

interface ButtonProps {
  type?: "submit" | "button";
  disabled?: boolean;
  text: string;
  secondary?: boolean;
  warning?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  text,
  secondary,
  warning,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`mt-3 px-2 w-full  rounded-md h-9 ${
        secondary
          ? "bg-slate-100/90 text-zinc-800 hover:bg-zinc-900/80 hover:text-slate-100"
          : warning
          ? "bg-slate-100/70 text-red-500/90 hover:bg-slate-200/80 hover:text-red-700/70"
          : "bg-zinc-500/80 text-zinc-100 hover:bg-zinc-100/30 hover:text-slate-800"
      }  transition}`}
    >
      {text}
    </button>
  );
};

export default Button;
