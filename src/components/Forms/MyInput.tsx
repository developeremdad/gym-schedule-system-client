import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  css?: string;
  disabled?: boolean;
};

const MyInput = ({
  name,
  type = "text",
  placeholder,
  label = "",
  required,
  css,
  disabled = false,
}: TInputProps) => {
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
          <input
            {...field}
            type={type}
            disabled={disabled}
            className={`input input-bordered ${css ? css : ""}`}
            placeholder={placeholder}
            required={required}
          />
        </div>
      )}
    />
  );
};

export default MyInput;
