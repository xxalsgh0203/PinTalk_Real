import cls from '../../utils/cls';
import FormErrorMessage from '../FormErrorMessage';

const Gender = ({ register, watch, editPage, label, necessary, errorMessage }) => {
  const checkedMan = watch('gender') === 'M';
  const checkedWoman = watch('gender') === 'W';

  return (
    <div className="w-[50%]">
      <div className="flex items-center">
        <span className="block mb-2 text-sm">{label}</span>

        {errorMessage ? (
          <FormErrorMessage errorMessage={errorMessage} />
        ) : (
          <span className="text-sm text-pintalk-dark-yellow">
            {' '}
            {necessary ? '필수정보입니다.' : null}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-4 mt-1">
        <label className="text-sm" htmlFor="M">
          <input
            {...register}
            type="radio"
            value="M"
            checked={checkedMan}
            className={cls(
              checkedMan ? 'bg-pintalk-dark-yellow' : 'bg-gray-100',
              'appearance-none w-3 h-3 rounded-full transition-all cursor-pointer mr-1',
              errorMessage ? 'ring-1 ring-offset-1 ring-red-500' : '',
            )}
          />
          <span className="text-sm">남</span>
        </label>

        <label htmlFor="G">
          <input
            type="radio"
            value="W"
            checked={watch('gender') === 'W'}
            {...register}
            className={cls(
              'appearance-none w-3 h-3 rounded-full transition-all cursor-pointer mr-1',
              checkedWoman ? 'bg-pintalk-dark-yellow' : 'bg-gray-100',
              errorMessage ? 'ring-1 ring-offset-1 ring-red-500' : '',
            )}
          />
          <span className="text-sm">여</span>
        </label>
      </div>
    </div>
  );
};
export default Gender;
