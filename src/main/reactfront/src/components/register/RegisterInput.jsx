const RegisterInput = ({ label, type = 'text', htmlFor, detailInfo }) => {
  return detailInfo === '주민번호' ? (
    <div className='space-y-2'>
      <label className='flex' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex items-center space-x-4'>
        <input
          type={type}
          id={htmlFor}
          className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
        />
        <span>-</span>
        <input
          type={type}
          id={htmlFor}
          className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
        />
      </div>
    </div>
  ) : detailInfo === '휴대폰' ? (
    <div className='space-y-2'>
      <label className='flex'>{label}</label>
      <div className='flex items-center space-x-4'>
        <select name='010' id='' className='bg-transparent p-1 outline-none'>
          <option value='010'>010</option>
          <option value='011'>011</option>
          <option value='016'>016</option>
        </select>
        <input
          type={type}
          id={htmlFor}
          className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
        />
        <span>-</span>
        <input
          type={type}
          id={htmlFor}
          className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
        />
      </div>
    </div>
  ) : (
    <div className='flex flex-col space-y-2'>
      <label className='' htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
      />
    </div>
  );
};
export default RegisterInput;
