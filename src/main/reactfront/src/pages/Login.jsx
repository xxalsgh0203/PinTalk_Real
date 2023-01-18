import logo from '../../src/components/layout/pinbank_icon.png';
import { AiFillLock } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-2 bg-gradient-to-t from-amber-500">
      <main className="w-[37rem] h-[40rem] flex flex-col items-center justify-center bg-white shadow-md rounded-md relative">
        <div className="flex items-end mb-10 absolute top-10">
          <img className="w-12 h-12" src={logo} alt="logo" />
          <h1 className="uppercase font-bold text-pintalk-dark-yellow text-2xl">intalk</h1>
        </div>

        <h1 className="font-extrabold text-transparent text-4xl bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text h-16 mb-6">
          Login
        </h1>

        <form className="w-[50%]">
          <div className="flex flex-col space-y-1 mb-10">
            <label htmlFor="email" className="text-gray-600">
              아이디
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="아이디를 입력해주세요."
                className="border-b-[1px] border-amber-600 w-full placeholder:text-sm pl-8 p-1 focus:border-b-[1px] focus:border-amber-400 transition-all"
              />
              <div className="absolute top-0 bottom-0 m-auto flex justify-center items-center text-amber-500">
                <FaUserAlt size={20} />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-gray-600" htmlFor="password">
              비밀번호
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className="border-b-[1px] border-amber-600 w-full placeholder:text-sm pl-8 p-1 focus:border-b-[1px] focus:border-amber-400 transition-all"
              />
              <div className="absolute top-0 bottom-0 m-auto flex justify-center items-center text-amber-500">
                <AiFillLock size={23} />
              </div>
            </div>
          </div>

          <button className="mt-12 w-full bg-amber-600 text-white p-1 text-lg font-bold flex justify-center items-center rounded-lg hover:bg-amber-500 transition-all cursor-pointer">
            로그인
          </button>
        </form>
        <div className="mt-5 text-amber-700 text-sm flex justify-between w-[50%]">
          <span className="block hover:text-amber-600 cursor-pointer transition-all">
            비밀번호 찾기
          </span>
          <span className="block hover:text-amber-600 cursor-pointer transition-all">
            회원신청 하기
          </span>
        </div>
      </main>
    </div>
  );
};
export default Login;
