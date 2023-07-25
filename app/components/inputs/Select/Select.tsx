"use client";

import ReactSelect from "react-select";

interface SelectProps {
  disabled?: boolean;
  defaultValue: { label: string; value: string };
  label: string;
  value?: { label: string; value: string } | null;
  onChange: (value: { label: string; value: string } | null) => void;
  options: { label: string; value: string }[];
}
const Select: React.FC<SelectProps> = ({
  disabled,
  label,
  value,
  onChange,
  options,
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
          classNames={{ control: () => "text-sm" }}
        />
      </div>
    </div>
  );
};

export default Select;
