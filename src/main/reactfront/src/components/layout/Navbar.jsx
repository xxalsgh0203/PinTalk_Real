import { Link } from 'react-router-dom';
import PinBankLogo from '../../asset/pinbank_icon.png';
import cls from '../../utils/cls';

const Navbar = ({ title, home }) => {
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
        <ul className="flex items-center space-x-10 text-kukmin-dark-brown font-semi-bold text-lg">
          <li>
            <Link to="/investment">투자자</Link>
          </li>
          <li>
            <Link to="/loan">대출자</Link>
          </li>
          <li>
            <Link to="/admin">관리자</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </div>
      <div className="absolute bg-white opacity-70 w-full h-full" />
    </div>
  );
};

export default Navbar;
