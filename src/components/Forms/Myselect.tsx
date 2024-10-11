import { Controller, useFormContext } from "react-hook-form";

type TSelectProps = {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  required?: boolean;
  css?: string;
  disabled?: boolean;
};

const MySelect = ({
  name,
  label = "",
  options,
  required,
  css,
  disabled = false,
}: TSelectProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-control">
          {label && (
            <label className="label">
              <p className="label-text">{label}</p>
            </label>
          )}
          <select
            {...field}
            disabled={disabled}
            className={`select select-bordered ${css ? css : ""}`}
            required={required}
          >
            <option value="" disabled selected hidden>
              {label}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
    />
  );
};

export default MySelect;
