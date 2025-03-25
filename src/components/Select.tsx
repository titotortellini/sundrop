import { ChangeEvent, SelectHTMLAttributes } from "react";
import { CharacterResourceItem } from "../interfaces/character";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: CharacterResourceItem[];
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ id, options, label, ...props }: SelectProps) {
  return (
    <>
      <label htmlFor={id}>{label}: </label>
      <select id={id} {...props}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.index} value={option.index}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
