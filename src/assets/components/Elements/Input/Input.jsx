import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border border-slate-500 rounded-xl w-full py-2 px-3 text-slate-700 placeholder:opacity-80"
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  );
});

export default Input;
