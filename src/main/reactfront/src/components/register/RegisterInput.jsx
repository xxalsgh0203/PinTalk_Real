const RegisterInput = ({
  label,
  type = 'text',
  htmlFor,
  register,
  maxLength,
}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label className='' htmlFor={htmlFor}>
        {label}
      </label>
      <input
        {...register}
        type={type}
        maxLength={maxLength}
        className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
      />
    </div>
  );
};
export default RegisterInput;
