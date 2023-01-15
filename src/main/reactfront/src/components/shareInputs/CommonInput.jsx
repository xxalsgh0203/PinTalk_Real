import { AiOutlineLock } from 'react-icons/ai';
import cls from '../../utils/cls';
import FormErrorMessage from '../FormErrorMessage';

const CommonInput = ({
  label,
  type = 'text',
  htmlFor,
  register,
  maxLength,
  errorMessage,
  necessary,
  editPage,
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
          className={cls(
            editPage
              ? ''
              : 'bg-transparent border-gray-200 rounded-md w-full h-full p-1 px-3 outline-none border-2 transition-all',
          )}
        />
      </div>
    </div>
  );
};
export default CommonInput;
