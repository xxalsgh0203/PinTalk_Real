import { Link } from 'react-router-dom';
import cls from '../../../utils/cls';

const SideNavbar = ({ active, navItems }) => {
  return (
    <div
      className={cls(
        active ? 'scale-x-100' : 'scale-x-0',
        'absolute origin-top-right left-0 right-0 top-16 w-full z-30 transition-all',
      )}
    >
      <ul className="bg-white">
        {navItems?.map((item) => (
          <li key={item.id}>
            <Link to={`/${item.id}`}>
              <span className="block p-3 pl-8 hover:bg-gray-100 transition-all">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideNavbar;
