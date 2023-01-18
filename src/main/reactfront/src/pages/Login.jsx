import logo from '../../src/components/layout/pinbank_icon.png';
import LoginForm from '../components/login/LoginForm';
import LoginLayout from '../components/login/LoginLayout';

const Login = () => {
  return (
    <LoginLayout>
      <main className="w-[37rem] h-[40rem] flex flex-col items-center justify-center bg-white shadow-md rounded-md relative">
        <div className="flex items-end mb-10 absolute top-10">
          <img className="w-12 h-12" src={logo} alt="logo" />
          <h1 className="uppercase font-bold text-pintalk-dark-yellow text-2xl">intalk</h1>
        </div>

        <h1 className="font-extrabold text-transparent text-4xl bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text h-16 mb-6">
          Login
        </h1>

        <LoginForm />

        <div className="mt-5 text-amber-700 text-sm flex justify-between w-[50%]">
          <span className="block hover:text-amber-600 cursor-pointer transition-all">
            비밀번호 찾기
          </span>
          <span className="block hover:text-amber-600 cursor-pointer transition-all">
            회원신청 하기
          </span>
        </div>
      </main>
    </LoginLayout>
  );
};
export default Login;
