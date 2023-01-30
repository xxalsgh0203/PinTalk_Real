import cls from '../../utils/cls';

const Status = ({ register, watch, ustatus, usavestatus, label, infotype }) => {
  if (infotype === 'status') {
    return (
      <div className="w-full">
        <span className="block mb-2 text-sm">{label}</span>
        <div className="flex items-center space-x-4">
          <select
            className="bg-transparent p-1 outline-none text-sm border-2 rounded-md text-pintalk-dark-brown w-[25%]"
            {...register}
          >
            <option value={ustatus}>
              {ustatus === 'A' ? '승인' : ustatus === 'W' ? '탈퇴' : '대기'}
            </option>
            <option value="A" className={ustatus === 'A' ? 'hidden' : ''}>
              승인
            </option>
            <option value="W" className={ustatus === 'W' ? 'hidden' : ''}>
              탈퇴
            </option>
            <option value="P" className={ustatus === 'P' ? 'hidden' : ''}>
              대기
            </option>
          </select>
        </div>
      </div>
    );
  } else if (infotype === 'saveStatus') {
    return (
      <div className="w-full">
        <span className="block mb-2 text-sm">{label}</span>
        <div className="flex items-center space-x-4">
          <select
            className="bg-transparent p-1 outline-none text-sm border-2 rounded-md text-pintalk-dark-brown w-[50%]"
            {...register}
          >
            <option value={usavestatus}>
              {ustatus === 'A' ? '가입승인' : ustatus === 'W' ? '서류반려' : '대기'}
            </option>
            <option value="A" className={ustatus === 'A' ? 'hidden' : ''}>
              가입승인
            </option>
            <option value="W" className={ustatus === 'W' ? 'hidden' : ''}>
              서류반려
            </option>
            <option value="P" className={ustatus === 'P' ? 'hidden' : ''}>
              대기
            </option>
          </select>
        </div>
      </div>
    );
  }
};
export default Status;
