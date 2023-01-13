import { AiOutlineLock } from 'react-icons/ai';
import FormErrorMessage from '../../FormErrorMessage';

const RegisterInput = ({
  label,
  type = 'text',
  htmlFor,
  register,
  maxLength,
  errorMessage,
  necessary,
  password,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm flex items-center" htmlFor={htmlFor}>
        {label}{' '}
        {errorMessage ? (
          <FormErrorMessage errorMessage={errorMessage} />
        ) : (
          <span className="ml-4 text-sm text-pintalk-dark-yellow">
            {necessary ? '필수정보입니다.' : null}
          </span>
        )}
      </label>

      <div className="relative">
        <input
          {...register}
          type={type}
          maxLength={maxLength}
          className="bg-transparent border-gray-200 rounded-md w-full h-full p-1 px-3 outline-none border-2 transition-all"
        />
        {password && (
          <div className="flex items-center absolute h-full top-0 bottom-0 right-2 px-1 text-center">
            <AiOutlineLock size={18} />
          </div>
        )}
      </div>
    </div>
  );
};
export default RegisterInput;
