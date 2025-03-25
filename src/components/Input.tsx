import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <>
      <label>{label}: </label>
      <input type="text" {...props} />
    </>
  );
};

export default Input;
