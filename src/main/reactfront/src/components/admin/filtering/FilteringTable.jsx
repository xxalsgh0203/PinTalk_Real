import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import useMutation from '../../../hooks/useMutation';
import { userReducer } from '../../../redux/slices/userReducer';
import ValidateForm, { NOT_NUMBER, NUMBER, NUMBER_ENGLISH } from '../../../utils/validateForm';
import FormErrorMessage from '../../FormErrorMessage';

import BirthPicker from './datePicker/BirthPicker';
import DatePicker from './datePicker/DatePicker';
import FilteringButton from './FilteringButton';
import FilteringInput from './FilteringInput';

const validateForm = new ValidateForm();
const FilteringTable = () => {
  const { error, loading, mutation } = useMutation('/userMemberList');
  const userStatusDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues: {
      gender: '',
      name: '',
      phone1: '',
      phone2: '',
      phone3: '',
      address: '',
      frontEmail: '',
      backEmail: '',
      reg_date: '',
      update_date: '',
      user_state: 'all',
      ssn1: '',
      ssn2: '',
    },
  });

  const handleResetValue = () => {
    reset((formValue) => ({
      ...formValue,
      gender: '',
      name: '',
      phone1: '',
      phone2: '',
      phone3: '',
      address: '',
      frontEmail: '',
      backEmail: '',
      reg_date: '',
      year: '',
      day: '',
      month: '',
      update_date: '',
      user_state: '',
      ssn1: '',
      ssn2: '',
    }));
  };

  const onValid = async (data) => {
    console.log(data);
    if (data === {} || !data) return;
    mutation(data);
    return data;
  };

  const handleUserStatus = (e) => {
    const value = e.target.value;
    if (value === '' || value === 'all') return;
    userStatusDispatch(userReducer.actions.handleStatus(value));
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="flex flex-col pb-5">
      <div className="bg-white p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <label id="gender" className="font-bold text-sm">
              성별
            </label>
            <select
              name="gender"
              className="mt-2 block w-[30%] rounded-md border-gray-300 shadow-sm"
              {...register('gender')}
            >
              <option value="">성별</option>
              <option value="M">M</option>
              <option value="W">W</option>
            </select>
          </div>

          <FilteringInput
            label="이름"
            placeholder="홍길동"
            max={10}
            htmlFor="name"
            register={register('name', {
              onChange: (e) => validateForm.inputValid(e, 'name', NOT_NUMBER),
            })}
          />

          <BirthPicker register={register} />

          <div className="space-y-2">
            <label className="flex text-sm font-bold">
              핸드폰 번호
              {(errors.phone1?.message || errors.phone2?.message || errors.phone3?.message) && (
                <FormErrorMessage
                  errorMessage={
                    errors.phone1?.message || errors.phone2?.message || errors.phone3?.message
                  }
                />
              )}
            </label>
            <div className="flex items-center space-x-4">
              <select
                {...register('phone1', {
                  validate: (value) => {
                    if (watch('phone2') === '' && watch('phone3') === '') return;
                    return value !== '' || '번호를 선택해주세요.';
                  },
                })}
                className="bg-transparent outline-none rounded-md w-[20%]  shadow-sm"
              >
                <option value="">선택</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="012">012</option>
                <option value="013">013</option>
                <option value="014">014</option>
                <option value="015">015</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
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
                className="bg-transparent outline-none rounded-md w-[20%] lg:w-[25%] shadow-sm"
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
                className="bg-transparent outline-none rounded-md w-[20%] lg:w-[25%] shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex text-sm font-bold" htmlFor="ssn">
              주민번호
              {(errors.ssn1?.message || errors.ssn2?.message) && (
                <FormErrorMessage errorMessage={errors.ssn1?.message || errors.ssn2?.message} />
              )}
            </label>
            <div className="flex items-center space-x-4">
              <input
                {...register('ssn1', {
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
                className="bg-transparent rounded-md outline-none transition-all w-[30%] shadow-sm"
              />
              <span>-</span>
              <input
                {...register('ssn2', {
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
                className="bg-transparent rounded-md outline-none transition-all w-[30%] md:w-[40%] shadow-sm"
              />
            </div>
          </div>

          <FilteringInput
            label="주소"
            htmlFor="address"
            placeholder="서울특별시 둔촌동 12로"
            register={register('address')}
          />

          <div className="space-x-2">
            <label className="flex text-sm mb-2 font-bold" htmlFor="email">
              이메일
              {(errors.frontEmail?.message || errors.backEmail?.message) && (
                <FormErrorMessage
                  errorMessage={errors.frontEmail?.message || errors.backEmail?.message}
                />
              )}
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
                placeholder="pintalk@pintalk.com"
                className="bg-transparent w-[50%] md:w-[45%] shadow-sm"
              />
              <span>@</span>
              <select
                {...register('backEmail', {
                  validate: (value) => {
                    if (!watch('frontEmail')) return;
                    return value !== '' || '이메일을 선택해주세요';
                  },
                })}
                className="bg-transparent rounded-md p-1 outline-none w-[30%] md:w-[40%] relative text-sm shadow-sm"
              >
                <option value="">선택</option>
                <option value="naver.com">naver.com</option>
                <option value="nate.com">nate.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="hanmail.net">hanmail.net</option>
              </select>
            </div>
          </div>

          <DatePicker label="가입날짜" Controller={Controller} control={control} name="reg_date" />
          <DatePicker
            label="정보 변경날짜"
            Controller={Controller}
            control={control}
            name="update_date"
          />

          <div className="flex flex-col w-[50%] shadow-sm">
            <label className="font-bold text-sm mb-2">회원가입 상태</label>
            <select
              {...register('user_state', {
                onChange: (e) => handleUserStatus(e),
              })}
            >
              <option value="all">전체</option>
              <option value="A">승인</option>
              <option value="P">대기</option>
              <option value="W">탈퇴</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-10">
          <FilteringButton type="button" title="등록" />
          <FilteringButton type="button" handleButton={handleResetValue} title="리셋" />
          <FilteringButton type="submit" title="검색" />
        </div>
      </div>
    </form>
  );
};
export default FilteringTable;
