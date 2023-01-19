import { useSearchParams } from 'react-router-dom';
import LoginLayout from '../../components/login/LoginLayout';
import cls from '../../utils/cls';

const forgotAccountTitles = [
  {
    title: '아이디',
    id: 'id',
  },
  {
    title: '비밀번호',
    id: 'password',
  },
];

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
        <div className="flex items-center w-[50%] h-10">
          {forgotAccountTitles.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleForgotAccountTitle(e)}
              className={cls(
                'h-full w-20  bg-pintalk-dark-yellow transition-all',
                item.id === queryKey
                  ? ' text-white font-bold'
                  : 'opacity-50 text-white text-opacity-90',
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        <main className="w-[30rem] h-[30rem] flex flex-col items-center justify-center bg-white shadow-md rounded-b-md relative">
          <form className="flex flex-col">
            <input type="text" placeholder="아이디를 입력해주세요" />
            <button>아이디 찾기</button>
          </form>
        </main>
      </div>
    </LoginLayout>
  );
};
export default ForgotAccount;
