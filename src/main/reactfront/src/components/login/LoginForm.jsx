import LoginInput from './LoginInput';
import logo from '../../asset/pinbank_icon.png';

const LoginForm = () => {
  return (
    <main className="w-[37rem] h-[40rem] flex flex-col items-center justify-center bg-white shadow-md rounded-md relative">
      <div className="flex items-end mb-10 absolute top-10">
        <img className="w-12 h-12" src={logo} alt="logo" />
        <h1 className="uppercase font-bold text-pintalk-dark-yellow text-2xl">intalk</h1>
      </div>

      <h1 className="font-extrabold text-transparent text-4xl bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text h-16 mb-6">
        Login
      </h1>

      <form className="w-[50%]">
        <LoginInput type="text" label="아이디" htmlFor="id" />
        <LoginInput type="password" label="비밀번호" htmlFor="password" />

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
  );
};
export default LoginForm;
