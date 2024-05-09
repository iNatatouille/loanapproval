const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  required,
  className,
  ...other
}) => (
  <div className='input-group mb-8'>
    <label htmlFor={name} className='block mb-2 text-white text-l font-bold'>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`shadow-sm rounded-md py-2 px-3 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500' ${className}`}
      required={required}
      {...other}
    />
  </div>
);

export default Input;
