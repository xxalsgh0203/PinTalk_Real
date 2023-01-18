import cls from '../../utils/cls';

const Status = ({ register, watch, editPage, ustatus, label }) => {
  return (
    <div className="w-full">
      <span className="block mb-2 text-sm">{label}</span>
      <div className="flex items-center space-x-4">
        <label className="text-sm" htmlFor="A">
          <input
            {...register}
            type="radio"
            value="A"
            checked={watch('status') === 'A'}
            className={cls(
              editPage
                ? ''
                : 'appearance-none w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow',
              watch('status') === 'A' ? 'bg-pintalk-dark-yellow' : '',
            )}
          />
          <span className="text-sm">승인</span>
        </label>

        <label htmlFor="W">
          <input
            type="radio"
            value="W"
            checked={watch('status') === 'W'}
            {...register}
            className={cls(
              editPage
                ? ''
                : 'appearance-none w-3 h-3 bg-gray-100   rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow',
              watch('status') === 'W' ? 'bg-pintalk-dark-yellow' : '',
            )}
          />
          <span className="text-sm">탈퇴</span>
        </label>

        <label htmlFor="P">
          <input
            type="radio"
            value="P"
            checked={watch('status') === 'P'}
            {...register}
            className={cls(
              editPage
                ? ''
                : 'appearance-none w-3 h-3 bg-gray-100   rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow',
              watch('status') === 'P' ? 'bg-pintalk-dark-yellow' : '',
            )}
          />
          <span className="text-sm">대기</span>
        </label>
      </div>
    </div>
  );
};
export default Status;
