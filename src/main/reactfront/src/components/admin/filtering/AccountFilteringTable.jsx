import FormErrorMessage from '../../FormErrorMessage';
import FilteringButton from './FilteringButton';
import FilteringInput from './FilteringInput';
import { useForm } from 'react-hook-form';
import ValidateForm, { inputSetValues, NUMBER } from '../../../utils/validateForm';

const validateForm = new ValidateForm();
const AccountFilteringTable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const handleSearch = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex flex-col mb-1 shadow-md rounded-lg">
      <div className="bg-white px-6 py-3 rounded-lg">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-4">
          <div className="flex flex-col">
            <label id="gender" className="font-bold text-sm">
              성별
            </label>
            <select
              name="gender"
              className="mt-2 block w-[30%] rounded-md border-gray-300 shadow-sm"
              {...register('gender', {
                setValueAs: (v) => inputSetValues(v),
              })}
            >
              <option value="">성별</option>
              <option value="M">남자</option>
              <option value="W">여자</option>
            </select>
          </div>

          <FilteringInput
            label="예금주명"
            placeholder="홍길동"
            htmlFor="name"
            errorMessage={errors?.name?.message}
            register={register('name', {
              maxLength: {
                value: 15,
                message: '15자 이내로 입력해주세요.',
              },
            })}
          />

          <FilteringInput
            label="계좌번호"
            placeholder="1**********1"
            htmlFor="acc_num"
            errorMessage={errors?.name?.message}
            register={register('name', {
              maxLength: {
                value: 15,
                message: '15자 이내로 입력해주세요.',
              },
              onChange: (e) => {
                validateForm.notSpecialString(e);
                return validateForm.inputValid(e, 'frontEmail', NUMBER);
              },
            })}
          />

          <div className="flex flex-col w-[50%] shadow-sm">
            <label className="font-bold text-sm mb-2">개설 기관</label>
            <select
              {...register('status', {
                setValueAs: (v) => inputSetValues(v),
              })}
            >
              <option value="">전체</option>
              <option value="A">활성</option>
              <option value="W">탈퇴</option>
            </select>
          </div>

          <div className="flex flex-col w-[50%] shadow-sm">
            <label className="font-bold text-sm mb-2">계좌 상태</label>
            <select
              {...register('status', {
                setValueAs: (v) => inputSetValues(v),
              })}
            >
              <option value="">전체</option>
              <option value="A">활성</option>
              <option value="W">탈퇴</option>
            </select>
          </div>

          <div className="flex flex-col w-[50%] shadow-sm">
            <label className="font-bold text-sm mb-2">계좌 종류</label>
            <select
              {...register('status', {
                setValueAs: (v) => inputSetValues(v),
              })}
            >
              <option value="">전체</option>
              <option value="A">활성</option>
              <option value="W">탈퇴</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <FilteringButton type="button" title="리셋" />
          <FilteringButton type="submit" title="검색" />
        </div>
      </div>
    </form>
  );
};
export default AccountFilteringTable;
