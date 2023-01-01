import RegisterErrorMessage from './RegisterErrorMessage';

const RegisterInput = ({
  label,
  type = 'text',
  htmlFor,
  register,
  maxLength,
  errorMessage,
}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label className='' htmlFor={htmlFor}>
        {label} {errorMessage && <RegisterErrorMessage />}
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
