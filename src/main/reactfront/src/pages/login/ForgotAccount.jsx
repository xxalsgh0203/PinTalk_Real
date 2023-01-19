import { useSearchParams } from 'react-router-dom';
import LoginLayout from '../../components/login/LoginLayout';
import logo from '../../asset/pinbank_icon.png';
import cls from '../../utils/cls';
import LoginInput from '../../components/login/LoginInput';

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
          <div className="flex items-end mb-10 absolute top-10">
            <img className="w-12 h-12" src={logo} alt="logo" />
            <h1 className="uppercase font-bold text-pintalk-dark-yellow text-2xl">intalk</h1>
          </div>

          <h1 className="font-extrabold text-transparent text-4xl bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text h-16 mb-6">
            계정 찾기
          </h1>
          <form>
            {queryKey === 'id' ? (
              <div>
                <div className="flex flex-col">
                  <LoginInput htmlFor="id" />
                  <button className="w-full bg-amber-600 text-white p-1 text-lg font-bold flex justify-center items-center rounded-lg hover:bg-amber-500 transition-all cursor-pointer">
                    아이디 찾기
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <LoginInput htmlFor="password" type="password" />
                <button className="w-full bg-amber-600 text-white p-1 text-lg font-bold flex justify-center items-center rounded-lg hover:bg-amber-500 transition-all cursor-pointer">
                  비밀번호 찾기
                </button>
              </div>
            )}
          </form>
        </main>
      </div>
    </LoginLayout>
  );
};
export default ForgotAccount;
