import LoginInput from './LoginInput';

const LoginForm = () => {
  return (
    <form className="w-[50%]">
      <LoginInput type="text" label="아이디" htmlFor="id" />
      <LoginInput type="password" label="비밀번호" htmlFor="password" />

      <button className="mt-12 w-full bg-amber-600 text-white p-1 text-lg font-bold flex justify-center items-center rounded-lg hover:bg-amber-500 transition-all cursor-pointer">
        로그인
      </button>
    </form>
  );
};
export default LoginForm;
