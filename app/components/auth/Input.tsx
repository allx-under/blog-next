import clsx from "clsx";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div className="mb-3">
      <label
        className="block text-sm font-medium leading-6 text-slate-800"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        autoComplete="off"
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(
          `form-input block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6`,
          errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
      />
    </div>
  );
};

export default Input;
