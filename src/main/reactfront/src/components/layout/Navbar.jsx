import { Link } from 'react-router-dom';
import PinBankLogo from './pinbank_icon.png';

const Navbar = ({ title }) => {
  return (
    <div className="border-2 flex items-center justify-between p-5 shadow-md">
      <Link className="flex" to="/">
        <img className="object-contain h-9 pr-1 w-full" src={PinBankLogo}></img>
        <div className="text-kukmin-dark-brown font-bold text-xl pt-1">PINBANK</div>
      </Link>
      <h1>{title}</h1>
      <ul className="flex items-center space-x-10 text-kukmin-dark-brown font-semi-bold text-xl">
        <li>
          <Link to="/investment">투자자</Link>
        </li>
        <li>
          <Link to="/loan">대출자</Link>
        </li>
        <li>
          <Link to="/admin">관리자</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
