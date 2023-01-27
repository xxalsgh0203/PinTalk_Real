import { Link } from 'react-router-dom';
import PinBankLogo from '../../../asset/pinbank_icon.png';
import cls from '../../../utils/cls';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import useWindowSize from '../../../hooks/useWindowSize';
import { useEffect, useState } from 'react';

const navigationItem = [
  {
    title: '투자자',
    id: 'investment',
  },
  {
    title: '대출자',
    id: 'loan',
  },
  {
    title: '관리자',
    id: 'admin',
  },
  {
    title: '로그인',
    id: 'login',
  },
  {
    title: '마이페이지',
    id: 'usermypage',
  },
];

const Navbar = ({ title, home }) => {
  const { smallSize } = useWindowSize();
  const [active, setActive] = useState(false);

  const toggleActiveNavbar = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    !smallSize && setActive(false);
  }, [smallSize]);

  return (
    <div className="relative">
      <div
        className={cls(
          'flex items-center justify-between p-4',
          home ? 'absolute w-full h-full z-20 top-4' : 'bg-white',
        )}
      >
        <Link className="flex" to="/">
          <img className="object-contain h-9 pr-1 w-full" src={PinBankLogo}></img>
          <div className="text-kukmin-dark-brown font-bold text-xl">INBANK</div>
        </Link>
        <h1>{title}</h1>

        {smallSize ? (
          <div onClick={toggleActiveNavbar} className="cursor-pointer">
            {active ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
          </div>
        ) : (
          <ul className="flex items-center space-x-10 text-kukmin-dark-brown font-semi-bold text-lg">
            {navigationItem.map((item) => (
              <li key={item.id}>
                <Link to={`/${item.id}`}>
                  <span className="block p-2 hover:bg-gray-100 rounded-lg transition-all">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div
          className={cls(
            active ? 'scale-y-100' : 'scale-y-0',
            'absolute w-full translate-y-32 left-0 origin-top-left transition-all',
          )}
        >
          <ul className="bg-white">
            {navigationItem.map((item) => (
              <li key={item.id}>
                <Link to={`/${item.id}`}>
                  <span className="block p-3 pl-8 hover:bg-gray-100 transition-all">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
