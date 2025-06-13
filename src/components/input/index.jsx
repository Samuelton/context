import { Input } from "./styled";

export const InputComponent = ({
  placeholder,
  type,
  value,
  onChange,
  ...props
}) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
