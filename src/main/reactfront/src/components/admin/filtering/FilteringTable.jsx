import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import useMutation from '../../../hooks/useMutation';
import { userReducer } from '../../../redux/slices/userReducer';
import ValidateForm, { NOT_NUMBER, NUMBER, NUMBER_ENGLISH } from '../../../utils/validateForm';

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
      gender: 'M',
      name: '',
      phone: '',
      address: '',
      email: '',
      reg_date: '',
      update_date: '',
      user_state: 'all',
    },
  });

  const handleResetValue = () => {
    reset((formValue) => ({
      ...formValue,
      gender: 'M',
      name: '',
      phone: '',
      address: '',
      email: '',
      reg_date: '',
      year: '',
      day: '',
      month: '',
      update_date: '',
      user_state: '',
    }));
  };

  const onValid = async (data) => {
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
            <label id="gender" className="font-medium text-sm text-stone-600">
              성별
            </label>
            <select
              name="gender"
              className="mt-2 block w-[30%] rounded-md border-gray-300 shadow-sm"
              {...register('gender')}
            >
              <option>M</option>
              <option>W</option>
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

          <FilteringInput
            label="전화번호"
            htmlFor="phone"
            placeholder="핸드폰번호"
            max={12}
            register={register('phone', {
              onChange: (e) => validateForm.inputValid(e, 'phone', NUMBER),
            })}
          />

          <FilteringInput
            label="주소"
            htmlFor="address"
            placeholder="서울특별시 둔촌동 12로"
            register={register('address')}
          />

          <FilteringInput
            label="이메일"
            htmlFor="email"
            placeholder="pintalk@example.com"
            errorMessage={errors.email?.message}
            max={15}
            register={register('email', {
              onChange: (e) => {
                return validateForm.inputValid(e, 'email', NUMBER_ENGLISH);
              },
              validate: (value) => {
                return value.includes('@') || '@을 포함시켜주세요.';
              },
            })}
          />

          <DatePicker label="가입날짜" Controller={Controller} control={control} name="reg_date" />
          <DatePicker
            label="정보 변경날짜"
            Controller={Controller}
            control={control}
            name="update_date"
          />

          <div className="flex flex-col w-[50%] shadow-sm">
            <label className="font-medium text-sm text-stone-600 mb-2">회원가입 상태</label>
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
          <FilteringButton type="button" title="create" />
          <FilteringButton type="button" handleButton={handleResetValue} title="reset" />
          <FilteringButton type="submit" title="submit" />
        </div>
      </div>
    </form>
  );
};
export default FilteringTable;
