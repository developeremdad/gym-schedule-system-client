import { Controller, useFormContext } from "react-hook-form";

type TTimePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  css?: string;
};

const MyTimePicker = ({
  name,
  label = "",
  placeholder,
  required,
  css,
}: TTimePickerProps) => {
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
            type="time"
            className={`input input-bordered ${css ? css : ""}`}
            placeholder={placeholder}
            required={required}
          />
        </div>
      )}
    />
  );
};

export default MyTimePicker;
