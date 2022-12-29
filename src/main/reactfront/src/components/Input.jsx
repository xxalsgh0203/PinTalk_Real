const Input = ({ size, htmlFor, type = 'text' }) => {
  return size === 'small' ? (
    <input
      type='text'
      id={htmlFor}
      className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
    />
  ) : (
    <input
      id={htmlFor}
      type={type}
      className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
    />
  );
};
export default Input;
