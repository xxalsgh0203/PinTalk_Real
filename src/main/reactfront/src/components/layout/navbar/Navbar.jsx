import { Link } from 'react-router-dom';
import PinBankLogo from '../../../asset/pinbank_icon.png';
import cls from '../../../utils/cls';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import useWindowSize from '../../../hooks/useWindowSize';
import NavDropdown from './NavDropdown';
import { mainNavItems } from '../../../data/navbar/mainNavbars';

const Navbar = ({ title, home }) => {
  const { smallSize, isActive, toggleActive } = useWindowSize();

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
          <div onClick={toggleActive} className="cursor-pointer">
            {isActive ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
          </div>
        ) : (
          <ul className="z-10 flex items-center space-x-10 text-kukmin-dark-brown font-semi-bold text-lg">
            {mainNavItems.map((item) => (
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

        <NavDropdown active={isActive} navigationItems={mainNavItems} />
      </div>
    </div>
  );
};

export default Navbar;
