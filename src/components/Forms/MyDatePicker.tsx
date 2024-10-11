import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  css?: string;
  disabled?: boolean;
};

const MyDatePicker = ({
  name,
  label = "",
  placeholder,
  required,
  css,
  disabled = false,
}: TDatePickerProps) => {
  const { control, setValue } = useFormContext();

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

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
          <DatePicker
            {...field}
            disabled={disabled}
            selected={(field.value && new Date(field.value)) || null}
            onChange={(date) => {
              field.onChange(date);
              setValue(name, formatDate(date));
            }}
            dateFormat="yyyy-MM-dd"
            className={`input input-bordered ${css ? css : ""}`}
            placeholderText={placeholder}
            required={required}
          />
        </div>
      )}
    />
  );
};

export default MyDatePicker;
