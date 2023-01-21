import { useSearchParams } from 'react-router-dom';
import ForgotAccountForm from '../../components/login/ForgotAccountForm';
import ForgotAccountTitle from '../../components/login/ForgotAccountTitle';
import LoginLayout from '../../components/login/LoginLayout';
import LoginTitle from '../../components/login/LoginTitle';

const ForgotAccount = () => {
  const [query, setQuery] = useSearchParams();

  const handleForgotAccountTitle = (e) => {
    const value = e.target.innerText;
    if (value === '아이디') {
      setQuery({
        account: 'id',
      });
    } else {
      setQuery({
        account: 'password',
      });
    }
  };

  const queryKey = query.get('account') || 'id';

  return (
    <LoginLayout>
      <div>
        <ForgotAccountTitle handleTitle={(e) => handleForgotAccountTitle(e)} queryKey={queryKey} />
        <main className="w-[30rem] h-[30rem] flex flex-col items-center justify-center bg-white shadow-md rounded-b-md relative">
          <LoginTitle title={queryKey === 'id' ? '아이디 찾기' : '비밀번호 찾기'} />
          <ForgotAccountForm queryKey={queryKey} />
        </main>
      </div>
    </LoginLayout>
  );
};
export default ForgotAccount;
