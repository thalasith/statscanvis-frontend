import { formatStringValues } from "../utils/formatter";
import { SelecterProps } from "../types";

const Selecter = ({ options, value, onChange, name }: SelecterProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-900"
      >
        {formatStringValues(name)}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="mt-1 block w-full rounded-md border border-slate-400 bg-white py-2 px-3 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selecter;
