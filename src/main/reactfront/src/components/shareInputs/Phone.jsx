import cls from '../../utils/cls';
import { NUMBER } from '../../utils/validateForm';
import FormErrorMessage from '../FormErrorMessage';

const Phone = ({
  register,
  watch,
  errorMessage,
  validateForm,
  phone1,
  phone2,
  phone3,
  editPage,
}) => {
  return (
    <div className="space-y-2">
      <label className="flex text-sm">
        {editPage ? '' : '핸드폰 번호'}
        {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
      </label>
      <div className="flex items-center space-x-4">
        <select
          {...register('phone1', {
            validate: (value) => {
              if (watch('phone2') === '' && watch('phone3') === '') return;
              return value !== '' || '번호를 선택해주세요.';
            },
          })}
          className={cls(
            editPage
              ? 'bg-transparent p-1 outline-none text-sm border-2 rounded-md text-pintalk-dark-brown w-[25%]'
              : 'bg-transparent p-1 outline-none text-sm border-2 rounded-md text-pintalk-dark-brown w-[15%]',
          )}
        >
          {editPage ? <option value={phone1}>{phone1}</option> : <option value="">선택</option>}
          <option value="010" className={phone1 === '010' ? 'hidden' : ''}>
            010
          </option>
          <option value="011" className={phone1 === '011' ? 'hidden' : ''}>
            011
          </option>
          <option value="012" className={phone1 === '012' ? 'hidden' : ''}>
            012
          </option>
          <option value="013" className={phone1 === '013' ? 'hidden' : ''}>
            013
          </option>
          <option value="014" className={phone1 === '014' ? 'hidden' : ''}>
            014
          </option>
          <option value="015" className={phone1 === '015' ? 'hidden' : ''}>
            015
          </option>
          <option value="016" className={phone1 === '016' ? 'hidden' : ''}>
            016
          </option>
          <option value="017" className={phone1 === '017' ? 'hidden' : ''}>
            017
          </option>
          <option value="018" className={phone1 === '018' ? 'hidden' : ''}>
            018
          </option>
          <option value="019" className={phone1 === '019' ? 'hidden' : ''}>
            019
          </option>
        </select>
        <span>-</span>
        <input
          {...register('phone2', {
            onChange: (e) => validateForm.inputValid(e, 'phone2', NUMBER),
            minLength: {
              value: 4,
              message: '4자리를 입력해주세요',
            },
            validate: (value) => {
              if (watch('phone1') === '' && watch('phone3') === '') return;
              return value !== '' || '번호를 선택해주세요.';
            },
          })}
          type="text"
          maxLength={4}
          placeholder={editPage ? phone2 : ''}
          className={
            editPage
              ? 'bg-transparent rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%]'
              : 'bg-transparent rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%]'
          }
        />
        <span>-</span>
        <input
          {...register('phone3', {
            minLength: {
              value: 4,
              message: '4자리를 입력해주세요',
            },
            onChange: (e) => validateForm.inputValid(e, 'phone3', NUMBER),
            validate: (value) => {
              if (watch('phone1') === '' && watch('phone2') === '') return;
              return value !== '' || '번호를 선택해주세요.';
            },
          })}
          type="text"
          maxLength={4}
          placeholder={editPage ? phone3 : ''}
          className={
            editPage
              ? 'bg-transparent rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%]'
              : 'bg-transparent rounded-md p-1 px-3 outline-none border-2 transition-all w-[50%]'
          }
        />
      </div>
    </div>
  );
};
export default Phone;
