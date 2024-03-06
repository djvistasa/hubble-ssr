type IInputFieldProps = {
  placeholder?: string;
  label?: string;
  type: FormFieldType;
  defaultValue?: string;
  onChange: (value: any) => void;
  onBlur?: () => void;
  value?: any;

  testID?: string;
  name?: string;
};

type FormFieldType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "time"
  | "checkbox"
  | "select"
  | "radio"
  | "textarea"
  | "password"
  | "phoneNumber";

export type { FormFieldType, IInputFieldProps };
