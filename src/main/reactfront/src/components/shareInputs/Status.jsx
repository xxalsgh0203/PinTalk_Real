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
            checked={editPage ? ustatus === 'A' : watch('status') === 'A'}
            className={cls(
              editPage
                ? 'appearance-none w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow'
                : 'appearance-none w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow',
              watch('status') === 'A' ? 'bg-pintalk-dark-yellow' : '',
            )}
          />
          <span className="text-sm">Accepted</span>
        </label>

        <label htmlFor="W">
          <input
            type="radio"
            value="W"
            checked={editPage ? ustatus === 'W' : watch('status') === 'W'}
            {...register}
            className={cls(
              editPage
                ? 'appearance-none w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow'
                : 'appearance-none w-3 h-3 bg-gray-100   rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow',
              watch('status') === 'W' ? 'bg-pintalk-dark-yellow' : '',
            )}
          />
          <span className="text-sm">Withdrawal</span>
        </label>

        <label htmlFor="P">
          <input
            type="radio"
            value="P"
            checked={editPage ? ustatus === 'P' : watch('status') === 'P'}
            {...register}
            className={cls(
              editPage
                ? 'appearance-none w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow'
                : 'appearance-none w-3 h-3 bg-gray-100   rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-pintalk-light-yellow',
              watch('status') === 'P' ? 'bg-pintalk-dark-yellow' : '',
            )}
          />
          <span className="text-sm">Pending</span>
        </label>
      </div>
    </div>
  );
};
export default Status;
