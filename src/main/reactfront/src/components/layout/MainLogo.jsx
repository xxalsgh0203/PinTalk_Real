import { Link } from 'react-router-dom';
import PinBankLogo from '../../asset/pinbank_icon.png';

const MainLogo = () => {
  return (
    <Link className="flex" to="/">
      <div className="flex items-center">
        <img className="object-contain h-9 pr-1 w-full" src={PinBankLogo}></img>
        <div className="text-kukmin-dark-brown font-bold text-xl">INBANK</div>
      </div>
    </Link>
  );
};
export default MainLogo;
