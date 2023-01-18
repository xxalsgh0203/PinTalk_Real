import { AiFillLock } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

const LoginInput = ({ type, label, htmlFor }) => {
  return (
    <div className="flex flex-col space-y-1 mb-10 w-full">
      <label htmlFor={htmlFor} className="text-gray-600">
        {label}
      </label>
      <div className="relative">
        <input
          id={htmlFor}
          type={type}
          placeholder={type === 'password' ? '비밀번호를 입력해주세요.' : '아이디를 입력해주세요.'}
          className="border-b-[1px] border-amber-600 w-full placeholder:text-sm pl-8 p-1 focus:border-b-[1px] focus:border-amber-400 transition-all"
        />
        <div className="absolute top-0 bottom-0 m-auto flex justify-center items-center text-amber-500">
          {type === 'password' ? <AiFillLock size={23} /> : <FaUserAlt size={20} />}
        </div>
      </div>
    </div>
  );
};
export default LoginInput;
