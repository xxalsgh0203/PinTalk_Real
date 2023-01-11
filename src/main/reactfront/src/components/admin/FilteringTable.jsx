import { useForm } from 'react-hook-form';
import ValidateForm, { NOT_NUMBER, NUMBER, NUMBER_ENGLISH } from '../../utils/validateForm';
import RegisterErrorMessage from '../register/RegisterErrorMessage';
import BirthPicker from './datePicker/BirthPicker';
import DatePicker from './datePicker/DatePicker';

const validateForm = new ValidateForm();
const FilteringTable = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: 'M',
      name: '',
      phone: '',
      address: '',
      email: '',
      erp_level: '',
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
      erp_level: '',
      reg_date: '',
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

          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium text-sm text-stone-600">
              이름
            </label>
            <input
              {...register('name', {
                onChange: (e) => validateForm.inputValid(e, 'name', NOT_NUMBER),
              })}
              id="name"
              type="text"
              maxLength={10}
              placeholder="홍길동"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          <BirthPicker />

          <div className="flex flex-col">
            <label htmlFor="phone" className="font-medium text-sm text-stone-600">
              전화 번호
            </label>
            <input
              {...register('phone', {
                onChange: (e) => validateForm.inputValid(e, 'phone', NUMBER),
              })}
              type="text"
              id="phone"
              maxLength={15}
              placeholder="010-0000-0000"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="font-medium text-sm text-stone-600">
              주소
            </label>
            <input
              {...register('address')}
              type="text"
              name="address"
              placeholder="서울특별시 둔촌동 12로"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <label htmlFor="email" className="font-medium text-sm text-stone-600">
                Email
              </label>
              {errors.email?.message && (
                <RegisterErrorMessage errorMessage={errors.email?.message} />
              )}
            </div>
            <input
              {...register('email', {
                onChange: (e) => {
                  return validateForm.inputValid(e, 'email', NUMBER_ENGLISH);
                },
                validate: (value) => {
                  return value.includes('@') || '@을 포함시켜주세요.';
                },
              })}
              type="text"
              maxLength={15}
              placeholder="pintalk@example.com"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          <DatePicker label="가입날짜" />
          <DatePicker label="정보변경" />
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

/**
 *     <input
              {...register('update_date')}
              id="update_date"
              type="date"
              name="update_date"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
 */
