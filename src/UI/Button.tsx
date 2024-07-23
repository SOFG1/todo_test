interface IProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string
}

export const Button = ({ children, onClick, disabled, className }: IProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 disabled:bg-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
