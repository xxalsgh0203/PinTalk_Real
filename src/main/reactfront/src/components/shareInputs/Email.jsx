import cls from '../../utils/cls';
import { NUMBER_ENGLISH } from '../../utils/validateForm';
import FormErrorMessage from '../FormErrorMessage';

const Email = ({ register, errorMessage, validateForm, email1, email2, watch, editPage }) => {
  return (
    <div className="space-y-2">
      <label className="flex text-sm" htmlFor="email">
        {editPage ? '' : '이메일'}
        {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
      </label>
      <div className="flex items-center space-x-4">
        <input
          {...register('frontEmail', {
            minLength: {
              value: 3,
              message: '3자리 이상 입력해주세요.',
            },
            onChange: (e) => {
              validateForm.notSpecialString(e);
              return validateForm.inputValid(e, 'frontEmail', NUMBER_ENGLISH);
            },

            validate: (value) => {
              if (!watch('backEmail')) return;
              return value !== '' || '이메일을 입력해주세요.';
            },
          })}
          maxLength={15}
          type="text"
          placeholder={editPage ? email1 : ''}
          className={cls(
            editPage
              ? 'bg-transparent rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%]'
              : 'bg-transparent rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%]',
          )}
        />
        <span>@</span>
        <select
          {...register('backEmail', {
            validate: (value) => {
              if (!watch('frontEmail')) return;
              return value !== '' || '이메일을 선택해주세요';
            },
          })}
          className={cls(
            editPage
              ? ''
              : 'bg-transparent border-2 rounded-md px-1 py-1 outline-none w-[20%] relative text-pintalk-dark-brown',
          )}
        >
          {editPage ? <option value={email2}>{email2}</option> : <option value="">선택</option>}
          <option value="naver.com">naver.com</option>
          <option value="nate.com">nate.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="daum.net">daum.net</option>
        </select>
      </div>
    </div>
  );
};
export default Email;
