import MainLogo from '../MainLogo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

import cls from '../../../utils/cls';
import { navbarsAdmin } from '../../../data/navbar/navbars';
import SideNavbar from './sideNavbar/SideNavbar';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="fixed w-full p-3 flex items-center justify-center bg-white border-2">
        <div className="absolute left-10 flex items-center">
          <div className="flex items-center justify-center space-x-6">
            <span
              onClick={() => setIsActive((prev) => !prev)}
              className={cls(
                'text-amber-500 hover:text-amber-600 transition-all cursor-pointer inline-block',
              )}
            >
              {isActive ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
            </span>
            <Link to="/admin">
              <button className="bg-amber-500 text-white rounded-md px-2 hover:bg-amber-600 transition-all cursor-pointer">
                관리자 홈
              </button>
            </Link>
            <Link to="/">
              <button className="bg-amber-500 text-white rounded-md px-2 hover:bg-amber-600 transition-all cursor-pointer">
                홈
              </button>
            </Link>
          </div>
        </div>
        <span className="inline-block p-2 font-bold text-xl">{title}</span>
      </div>
      <SideNavbar active={isActive} navItems={navbarsAdmin} />
    </div>
  );
};
export default AdminNavbar;
