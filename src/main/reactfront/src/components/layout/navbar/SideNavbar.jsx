import { Link } from 'react-router-dom';
import cls from '../../../utils/cls';

const SideNavbar = ({ active, navItems }) => {
  return (
    <div
      className={cls(
        active ? 'scale-x-100' : 'scale-x-0',
        'fixed origin-bottom-left left-0 right-0 top-[60px] w-full z-50 transition-all',
      )}
    >
      <ul className="bg-pintalk-dark-brown text-white w-[60vw] lg:w-[30vw] h-screen">
        {navItems?.map((item) => (
          <li key={item.id}>
            <Link to={`/${item.id}`}>
              <span className="inline-block p-3 pl-8 cursor-pointer">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideNavbar;
