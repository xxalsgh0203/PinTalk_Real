import cls from '../../../utils/cls';
import FormErrorMessage from '../../FormErrorMessage';

const FilteringInput = ({ register, label, placeholder, max, min, htmlFor, errorMessage }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <label htmlFor={htmlFor} className="text-sm font-bold">
          {label}
        </label>
        {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
      </div>
      <input
        {...register}
        id={htmlFor}
        type="text"
        maxLength={max}
        placeholder={placeholder}
        className={cls(
          'mt-2 block rounded-md  shadow-sm focus:ring-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50',
          label === '주소' ? 'w-full 2xl:w-[80%]' : 'w-[50%]',
        )}
      />
    </div>
  );
};
export default FilteringInput;
