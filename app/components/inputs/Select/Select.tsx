"use client";

import { FieldErrors, FieldValues } from "react-hook-form";
import ReactSelect from "react-select";

interface SelectProps {
  disabled?: boolean;
  defaultValue: { label: string; value: string };
  label: string;
  value?: { label: string; value: string } | null;
  onChange: (value: { label: string; value: string } | null) => void;
  options: { label: string; value: string }[];
  errors: FieldErrors;
}
const Select: React.FC<SelectProps> = ({
  disabled,
  label,
  value,
  onChange,
  options,
  errors,
}) => {
  return (
    <div className="z-[100] mb-4">
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div>
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          options={options}
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          classNames={{
            control: () => "text-sm ring-zinc-400 ring-1 ring-inset",
          }}
          required
        />
      </div>
      {errors?.category && (
        <span className="text-xs text-red-500">Field is required</span>
      )}
    </div>
  );
};

export default Select;
