import { useForm, Controller } from 'react-hook-form';
import ValidateForm, { NOT_NUMBER, NUMBER, NUMBER_ENGLISH } from '../../../utils/validateForm';

import BirthPicker from './datePicker/BirthPicker';
import DatePicker from './datePicker/DatePicker';
import FilteringInput from './FilteringInput';

const validateForm = new ValidateForm();
const FilteringTable = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
    }));
  };

  const onValid = (data) => {
    console.log('onValid', data);
    return data;
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
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
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
            placeholder="010-0000-0000"
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
            label="Email"
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
        </div>

        <div className="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
          <button
            className="px-4 py-2 text-white-800 bg-pintalk-light-yellow rounded-lg bg-opacity-50 hover:bg-stone-200 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10"
            id="reset"
            type="button"
            onClick={handleResetValue}
          >
            Reset
          </button>

          <button
            className="px-4 py-2 bg-pintalk-dark-yellow rounded-lg bg-opacity-50  hover:bg-orange-500 font-bold text-white shadow-lg shadow-orange-200 transition ease-in-out duration-200 translate-10"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
export default FilteringTable;
