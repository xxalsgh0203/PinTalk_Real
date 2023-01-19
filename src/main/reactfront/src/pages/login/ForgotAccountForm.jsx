import LoginInput from '../../components/login/LoginInput';
import LoginButton from './LoginButton';

const ForgotAccountForm = ({ queryKey }) => {
  return (
    <form>
      {queryKey === 'id' ? (
        <div>
          <div className="flex flex-col">
            <LoginInput htmlFor="id" />
            <LoginButton title="아이디 찾기" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <LoginInput htmlFor="password" type="password" />
          <LoginButton title="비밀번호 찾기" />
        </div>
      )}
    </form>
  );
};
export default ForgotAccountForm;
