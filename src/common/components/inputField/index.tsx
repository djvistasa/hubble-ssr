import "./styles.scss";
import { IInputFieldProps } from "./types";

function InputField({
  label,
  name,
  type,
  onChange,
  defaultValue,
  onBlur,
  placeholder,
  testID,
}: IInputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="input-field-wrapper">
      {label && <label>{label}</label>}
      <input
        className="input-field"
        name={name}
        data-testid={testID}
        type={type}
        onChange={handleChange}
        defaultValue={defaultValue}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
