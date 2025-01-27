interface IProps {
  value: string;
  onChange: (v: string) => void;
  defaultValue?: string;
  className?: string;
}

export const DateInput = ({
  value,
  defaultValue,
  onChange,
  className,
}: IProps) => {
  return (
    <input
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      id="default-datepicker"
      type="date"
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Select date"
    ></input>
  );
};
