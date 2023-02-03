import MainLogo from '../MainLogo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

import cls from '../../../utils/cls';
import { navbarsAdmin } from '../../../data/navbar/navbars';
import SideNavbar from './sideNavbar/SideNavbar';

const AdminNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="fixed w-full p-3 flex items-center justify-center bg-white z-40">
        <div
          onClick={() => setIsActive((prev) => !prev)}
          className="absolute left-10 flex items-center"
        >
          <span
            className={cls(
              'text-amber-500 hover:text-amber-600 transition-all cursor-pointer inline-block',
            )}
          >
            {isActive ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
          </span>
        </div>
        <MainLogo />
      </div>
      <SideNavbar active={isActive} navItems={navbarsAdmin} />
    </div>
  );
};
export default AdminNavbar;
