import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import cls from '../../utils/cls';
import FormErrorMessage from '../FormErrorMessage';

const Password = ({ label, htmlFor, register, errorMessage, necessary, upassword, editPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm flex items-center" htmlFor={htmlFor}>
        {label}{' '}
        {errorMessage ? (
          <FormErrorMessage errorMessage={errorMessage} />
        ) : editPage ? (
          <span className="text-sm text-pintalk-dark-yellow">
            {necessary ? '필수정보입니다.' : null}
          </span>
        ) : (
          <span className="ml-4 text-sm text-pintalk-dark-yellow">
            {necessary ? '필수정보입니다.' : null}
          </span>
        )}
      </label>

      <div className="relative">
        <input
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            validate: (value) => {
              const checkSpecialString = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,15}$/;
              return (
                checkSpecialString.test(value) || '숫자,영문,특수문자(!~@#$%^*+=-)를 포함해주세요.'
              );
            },
            minLength: {
              value: 8,
              message: '8자 이상 작성해주세요',
            },
            maxLength: {
              value: 15,
              message: '15자 이내로 작성해주세요',
            },
          })}
          type={showPassword ? 'text' : editPage ? 'password' : 'password'}
          maxLength={15}
          placeholder={editPage ? upassword : ''}
          className={cls(
            editPage
              ? 'bg-transparent border-gray-200 rounded-md w-full h-full p-1 px-3 outline-none border-2 transition-all'
              : 'bg-transparent border-gray-200 rounded-md w-full h-full p-1 px-3 outline-none border-2 transition-all',
            errorMessage
              ? 'ring-1 ring-offset-1 ring-red-500 border-transparent'
              : 'border-gray-200',
          )}
        />
        <div
          onClick={() => setShowPassword((prev) => !prev)}
          className={cls(
            'flex items-center absolute h-full top-0 bottom-0 right-3 px-1 text-center cursor-pointer',
          )}
        >
          {showPassword ? <AiFillEyeInvisible size={18} /> : <AiFillEye size={18} />}
        </div>
      </div>
    </div>
  );
};
export default Password;
