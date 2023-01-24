import cls from '../../utils/cls';
import { NUMBER } from '../../utils/validateForm';
import FormErrorMessage from '../FormErrorMessage';

const SSN = ({ register, errorMessage, validateForm, ssn1, ssn2, editPage }) => {
  const isSSN1Error = errorMessage === '앞 주민번호를 입력해주세요';
  const isSSN2Error = errorMessage === '뒷 주민번호를 입력해주세요';
  console.log(errorMessage);
  return (
    <div className="space-y-2">
      <label className="flex text-sm" htmlFor="ssn">
        주민번호
        {errorMessage || errorMessage ? (
          <FormErrorMessage errorMessage={errorMessage} />
        ) : (
          <span className="ml-4 text-sm text-pintalk-dark-yellow">필수정보입니다.</span>
        )}
      </label>
      <div className="flex items-center space-x-4">
        <input
          {...register('ssn1', {
            required: '앞 주민번호를 입력해주세요',
            maxLength: {
              value: 6,
              message: '6자리까지 입력해주세요.',
            },
            minLength: {
              value: '6',
              message: '6자리를 입력해주세요.',
            },
            onChange: (e) => validateForm.inputValid(e, 'ssn1', NUMBER),
          })}
          placeholder={editPage ? ssn1 : '앞 6자리'}
          type="text"
          maxLength={6}
          className={cls(
            'bg-transparent  rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%] placeholder:text-gray-400 placeholder:text-sm',
            isSSN1Error
              ? 'ring-1 ring-offset-1 ring-red-500 border-transparent'
              : 'border-gray-200',
          )}
        />
        <span>-</span>
        <input
          {...register('ssn2', {
            required: '뒷 주민번호를 입력해주세요',
            maxLength: {
              value: 7,
              message: '6자리까지 입력해주세요.',
            },
            minLength: {
              value: '7',
              message: '7자리를 입력해주세요.',
            },
            onChange: (e) => validateForm.inputValid(e, 'ssn2', NUMBER),
          })}
          type="text"
          maxLength={7}
          placeholder={editPage ? ssn2 : '뒤 7자리'}
          className={cls(
            'bg-transparent  rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%] placeholder:text-gray-400 placeholder:text-sm',
            isSSN2Error
              ? 'ring-1 ring-offset-1 ring-red-500 border-transparent'
              : 'border-gray-200',
          )}
        />
      </div>
    </div>
  );
};
export default SSN;

/**
 *
 */
