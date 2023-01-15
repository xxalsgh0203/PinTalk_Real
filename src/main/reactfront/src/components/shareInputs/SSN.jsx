import { NUMBER } from '../../utils/validateForm';
import FormErrorMessage from '../FormErrorMessage';

const SSN = ({ register, errorMessage, validateForm }) => {
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
            required: '주민번호를 입력해주세요',
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
          placeholder="앞 6자리"
          type="text"
          maxLength={6}
          className="bg-transparent  rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%] placeholder:text-gray-400 placeholder:text-sm"
        />
        <span>-</span>
        <input
          {...register('ssn2', {
            required: '주민번호를 입력해주세요',
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
          placeholder="뒤 7자리"
          className="bg-transparent rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%] placeholder:text-gray-400 placeholder:text-sm"
        />
      </div>
    </div>
  );
};
export default SSN;
