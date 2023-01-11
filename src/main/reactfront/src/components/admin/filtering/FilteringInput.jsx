import FormErrorMessage from '../../FormErrorMessage';

const FilteringInput = ({ register, label, placeholder, max, min, htmlFor, errorMessage }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <label htmlFor={htmlFor} className="font-medium text-sm text-stone-600">
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
        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
      />
    </div>
  );
};
export default FilteringInput;
