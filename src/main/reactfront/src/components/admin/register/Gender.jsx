import cls from '../../../utils/cls';

const Gender = ({ register, watch }) => {
  return (
    <div className="w-[50%]">
      <span className="block mb-2 text-sm">성별</span>
      <div className="flex items-center space-x-4">
        <label className="text-sm" htmlFor="M">
          <input
            {...register}
            type="radio"
            value="M"
            checked={watch('gender') === 'M'}
            className={cls(
              'appearance-none w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow',
              watch('gender') === 'M' ? 'bg-pintalk-dark-yellow' : '',
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
              'appearance-none w-3 h-3 bg-gray-100   rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow',
              watch('gender') === 'W' ? 'bg-pintalk-dark-yellow' : '',
            )}
          />
          <span className="text-sm">여</span>
        </label>
      </div>
    </div>
  );
};
export default Gender;
